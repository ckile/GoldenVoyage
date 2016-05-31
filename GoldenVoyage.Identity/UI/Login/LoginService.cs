using System;
using System.Threading.Tasks;
using GoldenVoyage.Models;
using GoldenVoyage.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace GoldenVoyage.Identity.UI.Login
{
    public class LoginService
    {
        private readonly PmsDbContext _pmsDbContext;

        public LoginService(PmsDbContext pmsDbContext)
        {
            _pmsDbContext = pmsDbContext;
        }

        public async Task<bool> ValidateCredentials(string username, string password)
        {
            var user = await FindByUsername(username);
            if (user != null)
            {
                return user.Password.PasswordString.Equals(password);
            }
            return false;
        }

        public async Task<Employee> FindByUsername(string username)
        {
            return await _pmsDbContext.Set<Employee>()
                .Include(t => t.Password)
                .FirstOrDefaultAsync(t => t.UserCode.Equals(username, StringComparison.OrdinalIgnoreCase));
        }

        /// <summary>
        /// 进行一个登陆
        /// </summary>
        /// <param name="username">登陆员工号</param>
        /// <returns></returns>
        public async Task<EmployeeLogin> Login(string username)
        {
            var employee = await FindByUsername(username);
            var login = new EmployeeLogin()
            {
                EmployeeId = employee.Id,
                Employee = employee,
                LoginTime = DateTime.Now,
            };

            var resulTrack = _pmsDbContext.Set<EmployeeLogin>().Add(login);
            await _pmsDbContext.SaveChangesAsync();
            return resulTrack.Entity;
        }

        /// <summary>
        /// 注销一个登陆
        /// </summary>
        /// <param name="loginId">登陆Id</param>
        /// <returns></returns>
        public async Task LogOut(int loginId)
        {
            var login = await _pmsDbContext.Set<EmployeeLogin>()
                            .FirstOrDefaultAsync(t => t.Id.Equals(loginId));

            if (login == null) return;
            login.Ended = true;
            login.LogoutTime = DateTime.Now;
            _pmsDbContext.Set<EmployeeLogin>().Update(login);
            await _pmsDbContext.SaveChangesAsync();
        }
    }
}