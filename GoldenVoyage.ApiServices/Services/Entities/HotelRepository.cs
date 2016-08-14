using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace GoldenVoyage.ApiServices.Services.Entities
{
    public class HotelRepository : EntityRepository<Hotel>
    {
        protected override IQueryable<Hotel> Include(IQueryable<Hotel> query)
        {
            var result = query.Include(t => t.Profile);
            return base.Include(result);
        }
    }
}