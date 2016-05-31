using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoldenVoyage.ApiServices.Services
{
    public interface IApiServicesProvider
    {
        TService Create<TService>(int loginId);
    }
}
