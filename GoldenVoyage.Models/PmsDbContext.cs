using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace GoldenVoyage.Models
{
    public class PmsDbContext : DbContext
    {
        public PmsDbContext(DbContextOptions options) : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Hotel>().HasIndex(t => t.Name).IsUnique();
            modelBuilder.Entity<Room>().HasIndex(t => t.Code).IsUnique();
            modelBuilder.Entity<RoomType>().HasIndex(t => t.Code).IsUnique();
            modelBuilder.Entity<RoomFeature>().HasIndex(t => t.Code).IsUnique();
            // modelBuilder.Entity<Account>().HasIndex(t => t.Code).IsUnique();
            modelBuilder.Entity<Employee>().HasIndex(t => t.UserCode).IsUnique();
            // modelBuilder.Entity<EmployeeLogin>().HasIndex(t => t.EmployeeId).IsUnique();
        }

        public DbSet<Hotel> Hotel { get; set; }

        public DbSet<Account> Account { get; set; }

        public DbSet<Employee> Employee { get; set; }

        public DbSet<EmployeeLogin> EmployeeLogin { get; set; }

        public DbSet<Room> Room { get; set; }

        public DbSet<Guest> Guest { get; set; }

        public DbSet<Customer> Customer { get; set; }

        public DbSet<Group> Group { get; set; }

        public DbSet<OutOfOrderReason> OutOfOrderReason { get; set; }

        public DbSet<PaymentType> PaymentType { get; set; }

        public DbSet<Country> Country { get; set; }

        public DbSet<Province> Province { get; set; }

        public DbSet<Region> Region { get; set; }

        public DbSet<Package> Package { get; set; }

        public DbSet<OperLogger> OperLogger { get; set; }

        public DbSet<ReservationTemplate> ReservationTemplate { get; set; }
    }
}