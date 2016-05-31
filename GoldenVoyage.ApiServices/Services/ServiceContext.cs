using GoldenVoyage.ApiServices.Configuration.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoldenVoyage.ApiServices.Services
{
    public class ServiceContext
    {
        private IApiServicesProvider _apiServicesProvider;
        public HttpContext HttpContext { get; internal set; }

        public ApiServicesOptions Options { get; set; }

        public int LoginId { get; set; }

        public ServiceContext(IHttpContextAccessor contextAccessor, ApiServicesOptions options)
        {
            HttpContext = contextAccessor.HttpContext;
            Options = options;
        }

        public void InitApiServicesProvider(IApiServicesProvider apiServicesProvider)
        {
            _apiServicesProvider = apiServicesProvider;
        }

        public TService Create<TService>()
        {
            return _apiServicesProvider.Create<TService>(LoginId);
        }

    }
}
