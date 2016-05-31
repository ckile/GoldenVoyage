using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using GoldenVoyage.Models;
using Microsoft.EntityFrameworkCore;
using static GoldenVoyage.Models.OperatorResult;

namespace GoldenVoyage.ApiServices.Services
{
    public class EntityService<TEntity> : ServiceBase, IEntityService<TEntity> where TEntity : ItemBase
    {
        protected DbSet<TEntity> Set()
        {
            return GetDbContext().Set<TEntity>();
        }

        /// <summary>
        /// 重载进行附加
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        protected virtual IQueryable<TEntity> Include(IQueryable<TEntity> query)
        {
            return query;
        }

        public async Task<OperatorResult> Create(TEntity entity)
        {
            var createResult = CreateEntity(entity);
            if (!createResult.Flag) return createResult;
            var addResult = Set().Add(entity);
            var result = await ServiceContext.SaveChangesAsync();
            return result.Flag ? Success(addResult.Entity.Id.ToString())
                : result;
        }

        /// <summary>
        ///  重载进行实体存储
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        protected virtual OperatorResult CreateEntity(TEntity entity)
        {
            return Success();
        }

        public async Task<OperatorResult> Delete(int id)
        {
            var entity = await GetBy(id);
            if (entity == null)
                return Error(ErrorCodes.NotFound, typeof(TEntity).Name);
            var task = Set().Remove(entity);
            return await ServiceContext.SaveChangesAsync();
        }

        public async Task<PaginatedResult<TEntity>> GetBy(PaginateParamter paramter)
        {
            var allCount = await Set().CountAsync();

            var query = Set()
                        .PageOrderBy(GetOrderKeys(paramter))
                        .Where(GetPredicate(paramter));

            var filterCount = await query.CountAsync();

            var data = await Include(query
                                .Skip(paramter.start)
                                .Take(paramter.length)
                                ).ToListAsync();

            return new PaginatedResult<TEntity>
            {
                draw = paramter.draw,
                recordsFiltered = filterCount,
                recordsTotal = allCount,
                data = data
            };
        }

        private Expression<Func<TEntity, bool>> GetPredicate(PaginateParamter paramter)
        {
            if (paramter.search == null || string.IsNullOrWhiteSpace(paramter.search.value)) return t => true;
            var text = paramter.search.value;
            return GeneratePredicate(text);
        }

        protected virtual Expression<Func<TEntity, bool>> GeneratePredicate(string text)
        {
            Expression<Func<TEntity, bool>> result = t => t.Id.ToString().Equals(text);
            return result;
        }

        private PageOrderKey<TEntity>[] GetOrderKeys(PaginateParamter paramter)
        {
            if (paramter.order == null || !paramter.order.Any())
                return new List<PageOrderKey<TEntity>> { new PageOrderKey<TEntity>(t => t.Id) }.ToArray();
            var result = new List<PageOrderKey<TEntity>>();
            foreach (var order in paramter.order)
            {
                var columnName = paramter.GetColumnFeildName(order.column);
                if (!string.IsNullOrWhiteSpace(columnName))
                {
                    var key = GetOrderKey(columnName);
                    key.Desc = order.dir == "desc";
                    if (key != null) result.Add(key);
                }
            }
            return result.ToArray();
        }

        protected virtual PageOrderKey<TEntity> GetOrderKey(string columnName)
        {
            return new PageOrderKey<TEntity>(t => t.Id);
        }

        public async Task<TEntity> GetBy(int id)
        {
            return await Include(ServiceContext.DbContext.Set<TEntity>())
                                .FirstOrDefaultAsync(t => t.Id == id);
        }

        public Task<OperatorResult> Update(int id, TEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}