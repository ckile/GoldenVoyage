using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using GoldenVoyage.Identity.UI.Login;
using IdentityServer4.Core;
using IdentityServer4.Core.Services;
using Microsoft.AspNetCore.Mvc;

namespace GoldenVoyage.Identity.UI.Logout
{
    public class LogoutController : Controller
    {
        private readonly SignOutInteraction _signOutInteraction;

        private readonly LoginService _loginService;

        public LogoutController(SignOutInteraction signOutInteraction,
            LoginService loginService)
        {
            _signOutInteraction = signOutInteraction;
            _loginService = loginService;
        }

        [HttpGet(Constants.RoutePaths.Logout, Name = "Logout")]
        public IActionResult Index(string id)
        {
            return View(new LogoutViewModel { SignOutId = id });
        }

        [HttpPost(Constants.RoutePaths.Logout)]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Submit(string signOutId)
        {
            await _loginService.LogOut(GetLoginId());
            await HttpContext.Authentication.SignOutAsync(Constants.PrimaryAuthenticationType);

            // set this so UI rendering sees an anonymous user
            HttpContext.User = new ClaimsPrincipal(new ClaimsIdentity());

            var vm = new LoggedOutViewModel();
            return View("LoggedOut", vm);
        }

        private int GetLoginId()
        {
            var sub = HttpContext.User.Claims.FirstOrDefault(t => t.Type.Equals("sub")).Value;
            if (string.IsNullOrWhiteSpace(sub)) return 0;
            return Convert.ToInt32(sub);
        }
    }
}