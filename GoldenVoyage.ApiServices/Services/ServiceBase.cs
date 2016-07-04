using System.Threading.Tasks;
using GoldenVoyage.Models.Entities;
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

        protected Task<EmployeeLogin> GetLogin()
        {
            return ServiceContext.DbContext.Set<EmployeeLogin>()
             .Include(t => t.Employee)
             .Include(t => t.CurrentHotel)
             .FirstOrDefaultAsync(t => t.Id.Equals(ServiceContext.LoginId));
        }

    }
}