using IdentityServer4.Core.Validation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
            
        }
    }
}
