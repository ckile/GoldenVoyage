using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoldenVoyage.ApiServices.Services
{
    public class ServiceBase
    {
        protected ServiceContext ServiceContext { get; private set; }

        public void InitServiceContext(ServiceContext serviceContext)
        {
            ServiceContext = serviceContext;
        }
    }
}
