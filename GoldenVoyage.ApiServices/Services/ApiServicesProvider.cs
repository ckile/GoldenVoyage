using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
            var ser = _serviceProvider.GetService<TService>();
        }


    }
}
