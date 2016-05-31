using GoldenVoyage.ApiServices.Configuration.Options;
using GoldenVoyage.Models;
using Microsoft.AspNetCore.Http;

namespace GoldenVoyage.ApiServices.Services
{
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

        public TService Create<TService>()
        {
            return _apiServicesProvider.Create<TService>(LoginId);
        }
    }
}