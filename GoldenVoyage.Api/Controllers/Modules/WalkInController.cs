using System.Threading.Tasks;
using GoldenVoyage.ApiServices.Services;
using GoldenVoyage.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace GoldenVoyage.Api.Controllers.Modules
{
    public class WalkInController : AuthorControllerBase
    {
        public WalkInController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }

        public async Task<IActionResult> GetParamters()
        {
            return Ok(new
            {
                accountTypes = await Create<IEntityRepository<Account>>().GetAll()
            });
        }
    }
}