﻿using System.Threading.Tasks;
using GoldenVoyage.Models;

namespace GoldenVoyage.ApiServices.Services
{
    public interface IEntityService<TEntity>
    {
        Task<TEntity> GetBy(int id);

        Task<PaginatedResult<TEntity>> GetBy(PaginateParamter paramter);

        Task<OperatorResult> Create(TEntity entity);

        Task<OperatorResult> Update(int id, TEntity entity);

        Task<OperatorResult> Delete(int id);
    }
}