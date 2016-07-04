using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace GoldenVoyage.ApiServices.Services.Modules
{
    public class RoomViewService : ServiceBase, IRoomViewService
    {
        /// <summary>
        /// 获取房间
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<Room>> GetRooms()
        {
            var login = await GetLogin();
            var query = ServiceContext.DbContext.Set<Room>()
                .Include(t => t.Type)
                .Where(t => t.HotelId == login.CurrentHotelId);

            return await query.ToListAsync(); 
        }
    }
}
