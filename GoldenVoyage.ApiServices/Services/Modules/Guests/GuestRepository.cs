using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.Models;
using GoldenVoyage.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace GoldenVoyage.ApiServices.Services.Modules.Guests
{
    public class GuestRepository : EntityRepository<Guest>
    {
        protected override IQueryable<Guest> Include(IQueryable<Guest> query)
        {
            return base.Include(query);
        }
    }
}