﻿using GoldenVoyage.Models.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoldenVoyage.ApiServices.Services.Entities
{
    public class RoomService: EntityService<Room>
    {

        protected override IQueryable<Room> Include(IQueryable<Room> query)
        {
            var result = query.Include(t => t.Type)
                            .Include(t => t.Hotel)
                            .Include(t => t.Features)
                            .Include(t => t.Profile);
            return base.Include(result);
        }

    }
}