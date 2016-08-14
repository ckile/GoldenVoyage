using System;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.ApiServices.Services;
using GoldenVoyage.ApiServices.Services.Core;
using GoldenVoyage.Models;
using GoldenVoyage.Models.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using static GoldenVoyage.Models.OperatorResult;

namespace GoldenVoyage.Api.Controllers
{
    /// <summary>
    /// 认证控制器基础类
    /// 获取登录，创建服务
    /// </summary>
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

        protected IActionResult InvaildArgument()
        {
            return BadRequest(Error(ErrorCodes.InvalidArgument));
        }

        protected IActionResult NotFoundEntity()
        {
            return NotFound(Error(ErrorCodes.NotFound));
        }
    }
}