using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.ApiServices.Services;
using GoldenVoyage.ApiServices.Services.Core;
using GoldenVoyage.Models.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GoldenVoyage.Api.Controllers
{
    [Authorize]
    public class AuthorControllerBase : Controller
    {
        private readonly IApiServicesProvider _apiServicesProvider;

        public AuthorControllerBase(IApiServicesProvider apiServicesProvider)
        {
            _apiServicesProvider = apiServicesProvider;
        }

        protected TService Create<TService>()
        {
            var loginId = GetLoginId();
            return _apiServicesProvider.Create<TService>(loginId);
        }

        protected async Task<EmployeeLogin> GetLoginInfo()
        {
            var loginService = Create<ILoginService>();
            return await loginService.GetLoginInfo();
        }

        private int GetLoginId()
        {
            var claims = HttpContext.User.Claims.FirstOrDefault(t => t.Type.Equals("sub"));
            if (claims == null) return 0;
            var sub = claims.Value;
            if (string.IsNullOrWhiteSpace(sub)) return 0;
            return Convert.ToInt32(sub);
        }
    }
}