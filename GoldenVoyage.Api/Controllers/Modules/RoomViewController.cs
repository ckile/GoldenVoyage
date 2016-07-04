using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.ApiServices.Services;
using GoldenVoyage.ApiServices.Services.Modules;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace GoldenVoyage.Api.Controllers.Modules
{
    //[Route("[controller]")]
    public class RoomViewController : AuthorControllerBase
    {
        public RoomViewController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }

        [HttpGet()]
        public async Task<IActionResult> Get()
        {
            var ser = Create<IRoomViewService>();
            var result = await ser.GetRooms();
            return Ok(result);
        }
    }
}