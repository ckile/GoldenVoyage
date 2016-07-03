using GoldenVoyage.ApiServices.Services;

namespace GoldenVoyage.Api.Controllers.Modules
{
    /// <summary>
    /// 仪表盘控制器
    /// </summary>
    public class DashboardController : AuthorControllerBase
    {
        public DashboardController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }
}