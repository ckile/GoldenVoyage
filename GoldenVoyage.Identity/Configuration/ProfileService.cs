using IdentityServer4.Core.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer4.Core.Models;
using System.Security.Claims;
using IdentityModel;
using IdentityServer4.Core.Extensions;

namespace GoldenVoyage.Identity.Configuration
{
    public class ProfileService : IProfileService
    {
        private readonly PmsDbContext _pmsDbContext;

        public ProfileService(PmsDbContext pmsDbContext)
        {
            _pmsDbContext = pmsDbContext;
        }

        public Task GetProfileDataAsync(ProfileDataRequestContext context)
        {
            var claims = new List<Claim>{
                new Claim(JwtClaimTypes.Subject, context.Subject.GetSubjectId()),
            };

            context.IssuedClaims = claims;
            return Task.FromResult(0);
        }

        public Task IsActiveAsync(IsActiveContext context)
        {
            context.IsActive = true;
            return Task.FromResult(0);
        }
    }
}
