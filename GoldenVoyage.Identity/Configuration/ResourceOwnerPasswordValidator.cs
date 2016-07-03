using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.Models;
using GoldenVoyage.Models.Entities;
using IdentityServer4.Validation;
using Microsoft.EntityFrameworkCore;

namespace GoldenVoyage.Identity.Configuration
{
    public class ResourceOwnerPasswordValidator : IResourceOwnerPasswordValidator
    {
        private readonly PmsDbContext _pmsDbContext;

        public ResourceOwnerPasswordValidator(PmsDbContext pmsDbContext)
        {
            _pmsDbContext = pmsDbContext;
        }

        public Task<CustomGrantValidationResult> ValidateAsync(string userName, string password, ValidatedTokenRequest request)
        {
            var user = _pmsDbContext.Set<Employee>()
                    .Include(t => t.Password)
                    .Where(t => t.UserCode.Equals(userName) && t.Password.PasswordString.Equals(password))
                    .FirstOrDefault();
            if (user != null)
            {
                return Task.FromResult(new CustomGrantValidationResult(user.Id.ToString(), "password"));
            }

            return Task.FromResult(new CustomGrantValidationResult("无效的用户名或密码"));
        }
    }
}