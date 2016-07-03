using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.ApiServices.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace GoldenVoyage.Api.Controllers.Modules
{
    public class AccountsController : AuthorControllerBase
    {
        public AccountsController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }
}