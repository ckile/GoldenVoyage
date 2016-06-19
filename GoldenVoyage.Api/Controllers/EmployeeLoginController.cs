using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.ApiServices.Services;
using Microsoft.AspNetCore.Mvc;

namespace GoldenVoyage.Api.Controllers
{ 
    public class EmployeeLoginController : AuthorControllerBase
    {
        public EmployeeLoginController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var login = await GetLoginInfo();
            return Ok(login);
        }
    }
}