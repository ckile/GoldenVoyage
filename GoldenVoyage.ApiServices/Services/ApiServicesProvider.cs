using System;
using Microsoft.Extensions.DependencyInjection;

namespace GoldenVoyage.ApiServices.Services
{
    public class ApiServicesProvider : IApiServicesProvider
    {
        private readonly IServiceProvider _serviceProvider;
        private readonly ServiceContext _serviceContext;

        public ApiServicesProvider(IServiceProvider serviceProvider,
                                    ServiceContext serviceContext)
        {
            _serviceProvider = serviceProvider;
            _serviceContext = serviceContext;
        }

        public TService Create<TService>(int loginId)
        {
            _serviceContext.LoginId = loginId;
            try   // 尝试进行服务获取，如果失败则返回空
            {
                var ser = _serviceProvider.GetService<TService>();
                var serbase = ser as ServiceBase;
                serbase?.InitServiceContext(_serviceContext);
                return ser;

            }
            catch (Exception)
            {
                return default(TService);
            }

        }
    }
}