using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.Models;
using GoldenVoyage.Models.Entities;

namespace GoldenVoyage.ApiServices.Services.Modules.Guests
{
    /// <summary>
    /// 面向控制器的服务类
    /// 完成验证操作
    /// </summary>
    public class GuestsService : ServiceBase, IGuestsService
    {
        private IEntityRepository<Guest> GetRepository()
        {
            return ServiceContext.CreateRepository<IEntityRepository<Guest>>();
        }

        public async Task<OperatorResult> Create(Guest entity)
        {
            return await GetRepository().Create(entity);
        }

        public async Task<PaginatedResult<Guest>> GetPage(PaginateParamter paramter)
        {
            return await GetRepository().GetBy(paramter);
        }

        public async Task<OperatorResult> Update(int id, Guest entity)
        {
            return await GetRepository().Update(id, entity);
        }
    }
}