using GoldenVoyage.ApiServices.Services;

namespace GoldenVoyage.Api.Controllers.Modules
{
    public class WalkInController : AuthorControllerBase
    {
        public WalkInController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }
}