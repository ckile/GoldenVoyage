using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.Models;
using GoldenVoyage.Models.Entities;

namespace GoldenVoyage.ApiServices.Services.Modules
{
    public interface IGuestsService : ICreate<Guest>, IUpdate<Guest>
    {
        Task<PaginatedResult<Guest>> GetPage(PaginateParamter paramter);
    }
}