using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.Models;
using GoldenVoyage.Models.Entities;

namespace GoldenVoyage.ApiServices.Services.Core
{
    public interface ILoginService
    {
        /// <summary>
        /// 获取登陆信息
        /// </summary>
        /// <returns>可null</returns>
        Task<EmployeeLogin> GetLoginInfo();

        /// <summary>
        /// 切换酒店
        /// </summary>
        /// <param name="hotelId">新酒店id</param>
        /// <returns></returns>
        Task<OperatorResult> SwitchHotel(int hotelId);

        /// <summary>
        /// 修改密码
        /// </summary>
        /// <param name="newPassword">新密码</param>
        /// <returns></returns>
        Task<OperatorResult> ChangePassword(string newPassword);
    }
}