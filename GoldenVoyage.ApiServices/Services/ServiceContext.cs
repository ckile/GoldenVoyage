﻿using System.Threading.Tasks;
using GoldenVoyage.ApiServices.Configuration.Options;
using GoldenVoyage.Models;
using Microsoft.AspNetCore.Http;
using static GoldenVoyage.Models.OperatorResult;

namespace GoldenVoyage.ApiServices.Services
{
    /// <summary>
    /// 服务上下文
    /// 负责服务的初始化，获取当前用户，提供服务间相互引用
    /// </summary>
    public class ServiceContext
    {
        private IApiServicesProvider _apiServicesProvider;

        public HttpContext HttpContext { get; internal set; }

        public ApiServicesOptions Options { get; set; }

        public int LoginId { get; set; }

        public PmsDbContext DbContext { get; }

        public ServiceContext(IHttpContextAccessor contextAccessor,
                                PmsDbContext pmsDbContext,
                                ApiServicesOptions options)
        {
            HttpContext = contextAccessor.HttpContext;
            DbContext = pmsDbContext;
            Options = options;
        }

        public void InitApiServicesProvider(IApiServicesProvider apiServicesProvider)
        {
            _apiServicesProvider = apiServicesProvider;
        }

        public TService CreateRepository<TService>()
        {
            return _apiServicesProvider.Create<TService>(LoginId);
        }

        public OperatorResult SaveChanges()
        {
            var task = SaveChangesAsync();
            task.Wait();
            return task.Result;
        }

        public async Task<OperatorResult> SaveChangesAsync()
        {
            try
            {
                await DbContext.SaveChangesAsync();
                return Success();
            }
            catch (System.Exception ex)
            {
                return Error(ex.Message);
            }
        }
    }
}