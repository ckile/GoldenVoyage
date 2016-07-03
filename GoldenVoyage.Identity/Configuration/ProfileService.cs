using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using GoldenVoyage.Models;
using IdentityModel;
using IdentityServer4.Extensions;
using IdentityServer4.Models;
using IdentityServer4.Services;

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