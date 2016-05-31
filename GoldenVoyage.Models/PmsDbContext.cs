using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoldenVoyage.Models
{
    public class PmsDbContext : DbContext
    {
        public PmsDbContext(DbContextOptions options) :base(options)
        { }


    }
}
