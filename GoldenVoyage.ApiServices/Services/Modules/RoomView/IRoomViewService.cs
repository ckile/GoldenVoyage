using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.Models.Entities;

namespace GoldenVoyage.ApiServices.Services.Modules
{
   public interface IRoomViewService
    {
        Task<IEnumerable<Room>> GetRooms();
    }
}
