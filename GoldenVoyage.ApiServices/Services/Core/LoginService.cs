using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.Models;
using GoldenVoyage.Models.Entities;
using Microsoft.EntityFrameworkCore;

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
            return await ServiceContext.DbContext.Set<EmployeeLogin>()
                         .Include(t => t.Employee)
                         .Include(t => t.CurrentHotel)
                         .FirstOrDefaultAsync(t => t.Id.Equals(loginId));
        }

        public Task<OperatorResult> SwitchHotel(int hotelId)
        {
            throw new NotImplementedException();
        }
    }
}