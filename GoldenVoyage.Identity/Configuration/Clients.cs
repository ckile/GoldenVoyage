using System.Collections.Generic;
using IdentityServer4.Models;

namespace GoldenVoyage.Identity.Configuration
{
    public class Clients
    {
        public static IEnumerable<Client> Get()
        {
            return new List<Client>
            {
                ///////////////////////////////////////////
                // Console Client Credentials Flow Sample
                //////////////////////////////////////////
                new Client
                {
                    ClientId = "client",
                    ClientSecrets = new List<Secret>
                    {
                        new Secret("secret".Sha256())
                    },

                    AllowedGrantTypes = GrantTypes.ClientCredentials,

                    AllowedScopes = new List<string>
                    {
                        "api"
                    }
                },

                ///////////////////////////////////////////
                // Console Resource Owner Flow Sample
                //////////////////////////////////////////
                new Client
                {
                    ClientId = "roclient",
                    ClientSecrets = new List<Secret>
                    {
                        new Secret("secret".Sha256())
                    },

                    AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,

                    AllowedScopes = new List<string>
                    {
                        StandardScopes.OpenId.Name,
                        StandardScopes.Email.Name,
                        StandardScopes.OfflineAccess.Name,

                        "api"
                    }
                },

                ///////////////////////////////////////////
                // Introspection Client Sample
                //////////////////////////////////////////
                new Client
                {
                    ClientId = "roclient.reference",
                    ClientSecrets = new List<Secret>
                    {
                        new Secret("secret".Sha256())
                    },

                    AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,

                    AllowedScopes = new List<string>
                    {
                        "api"
                    },

                    AccessTokenType = AccessTokenType.Reference
                },

                ///////////////////////////////////////////
                // Web Client
                //////////////////////////////////////////
                new Client
                {
                    ClientId = "webclient",
                    ClientName = "Web Client",
                    ClientUri = "http://localhost:49288",

                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowAccessTokensViaBrowser = true,
                    AccessTokenLifetime = 2592000, //秒  30天
                    RedirectUris = new List<string>
                    {
                        "http://localhost:49288",
                        "http://localhost:49288/Home",
                    },
                    PostLogoutRedirectUris = new List<string>
                    {
                        "http://localhost:49288",
                    },

                    AllowedCorsOrigins = new List<string>
                    {
                        "http://localhost:49288"
                    },

                    AllowedScopes = new List<string>
                    {
                        StandardScopes.OpenId.Name,
                        StandardScopes.Profile.Name,
                        StandardScopes.Email.Name,
                        StandardScopes.Roles.Name,
                        "api",
                    },
                },
            };
        }
    }
}