using System;
using System.Threading.Tasks;
using GoldenVoyage.Models;
using GoldenVoyage.Models.Entities;

namespace GoldenVoyage.ApiServices.Services.Core
{
    public class LoginService : ServiceBase, ILoginService
    {
        public Task<OperatorResult> ChangePassword(string newPassword)
        {
            throw new NotImplementedException();
        }

        public async Task<EmployeeLogin> GetLoginInfo()
        {
            var loginId = ServiceContext.LoginId;
            return await GetLogin();
        }

        public Task<OperatorResult> SwitchHotel(int hotelId)
        {
            throw new NotImplementedException();
        }
    }
}