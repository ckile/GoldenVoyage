using Microsoft.EntityFrameworkCore;

namespace GoldenVoyage.ApiServices.Services
{
    public abstract class ServiceBase
    {
        protected ServiceContext ServiceContext { get; private set; }

        public void InitServiceContext(ServiceContext serviceContext)
        {
            ServiceContext = serviceContext;
        }

        protected DbContext GetDbContext()
        {
            return ServiceContext.DbContext;
        }
    }
}