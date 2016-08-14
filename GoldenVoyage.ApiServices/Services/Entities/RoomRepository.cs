using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace GoldenVoyage.ApiServices.Services.Entities
{
    public class RoomRepository : EntityRepository<Room>
    {
        protected override IQueryable<Room> Include(IQueryable<Room> query)
        {
            var result = query.Include(t => t.Type)
                            .Include(t => t.Hotel);
            return base.Include(result);
        }
    }
}