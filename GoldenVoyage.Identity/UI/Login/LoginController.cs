using System;
using System.Security.Claims;
using System.Threading.Tasks;
using GoldenVoyage.Models.Entities;
using IdentityModel;
using IdentityServer4.Core;
using IdentityServer4.Core.Services;
using Microsoft.AspNetCore.Mvc;

namespace GoldenVoyage.Identity.UI.Login
{
    public class LoginController : Controller
    {
        private readonly LoginService _loginService;
        private readonly SignInInteraction _signInInteraction;

        public LoginController(
            LoginService loginService,
            SignInInteraction signInInteraction)
        {
            _loginService = loginService;
            _signInInteraction = signInInteraction;
        }

        [HttpGet(Constants.RoutePaths.Login, Name = "Login")]
        public async Task<IActionResult> Index(string id)
        {
            var vm = new LoginViewModel();

            if (id != null)
            {
                var request = await _signInInteraction.GetRequestAsync(id);
                if (request != null)
                {
                    vm.Username = request.LoginHint;
                    vm.SignInId = id;
                }
            }

            return View(vm);
        }

        [HttpPost(Constants.RoutePaths.Login)]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Index(LoginInputModel model)
        {
            if (ModelState.IsValid)
            {
                if (await _loginService.ValidateCredentials(model.Username, model.Password))
                {
                    var login = await _loginService.Login(model.Username);
                    await IssueCookie(login, "idsvr", "password");

                    if (model.SignInId != null)
                    {
                        return new SignInResult(model.SignInId);
                    }

                    return Redirect("~/");
                }

                ModelState.AddModelError("", "无效的用户名或密码.");
            }

            var vm = new LoginViewModel(model);
            return View(vm);
        }

        private async Task IssueCookie(
            EmployeeLogin login,
            string idp,
            string amr)
        {
            var claims = new Claim[] {
                        new Claim(JwtClaimTypes.Subject, login.Id.ToString()),
                        new Claim(JwtClaimTypes.Name, login.Employee.Name),
                        new Claim(JwtClaimTypes.Role, login.Employee.Role.ToString()),
                        new Claim(JwtClaimTypes.IdentityProvider, idp),
                        new Claim(JwtClaimTypes.AuthenticationTime, DateTime.UtcNow.ToEpochTime().ToString()),
                    };
            var ci = new ClaimsIdentity(claims, amr, JwtClaimTypes.Name, JwtClaimTypes.Role);
            var cp = new ClaimsPrincipal(ci);

            await HttpContext.Authentication.SignInAsync(Constants.PrimaryAuthenticationType, cp);
        }
    }
}