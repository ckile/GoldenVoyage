using System.IdentityModel.Tokens.Jwt;
using GoldenVoyage.ApiServices.Configuration;
using GoldenVoyage.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace GoldenVoyage.Api
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<PmsDbContext>(options =>
              options.UseSqlServer(Configuration["Data:PmsConnection:ConnectionString"],
               b => b.MigrationsAssembly("GoldenVoyage.Api")));
            //services
            //    .AddMvcCore()
            //     .AddJsonFormatters()
            //     .AddAuthorization();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddApiServices();

            services.AddMvc();
            services.AddAuthorization();
            services.AddWebEncoders();
            services.AddCors();
        }

        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();
            loggerFactory.AddDebug();

            app.UseCors(policy =>
            {
                //policy.WithOrigins(
                //    "http://localhost:28895",
                //    "http://localhost:7017");
                policy.AllowAnyOrigin();
                policy.AllowAnyHeader();
                policy.AllowAnyMethod();
            });

            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

            app.UseJwtBearerAuthentication(new JwtBearerOptions
            {
                RequireHttpsMetadata = false,
                Authority = Constants.BaseAddress,
                Audience = Constants.BaseAddress + "/resources",
                AutomaticAuthenticate = true
            });

            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
        }
    }
}