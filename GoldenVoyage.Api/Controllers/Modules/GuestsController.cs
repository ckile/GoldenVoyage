using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.ApiServices.Services;
using Microsoft.AspNetCore.Mvc;

namespace GoldenVoyage.Api.Controllers.Modules
{
    public class GuestsController : AuthorControllerBase
    {
        public GuestsController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }
}