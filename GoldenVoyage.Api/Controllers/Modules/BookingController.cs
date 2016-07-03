using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.ApiServices.Services;
using Microsoft.AspNetCore.Mvc;

namespace GoldenVoyage.Api.Controllers.Modules
{
    public class BookingController : AuthorControllerBase
    {
        public BookingController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }
}