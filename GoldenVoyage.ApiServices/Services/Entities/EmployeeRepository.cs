using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace GoldenVoyage.ApiServices.Services.Entities
{
    public class EmployeeRepository : EntityRepository<Employee>
    {
        protected override IQueryable<Employee> Include(IQueryable<Employee> query)
        {
            var result = query.Include(t => t.DefaultHotel)
                            .Include(t => t.Department)
                            .Include(t => t.Position)
                            .Include(t => t.Hotels);
            return base.Include(result);
        }
    }
}