using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.ApiServices.Configuration.Options;
using GoldenVoyage.ApiServices.Services;
using GoldenVoyage.ApiServices.Services.Core;
using GoldenVoyage.ApiServices.Services.Entities;
using GoldenVoyage.Models;
using GoldenVoyage.Models.Entities;
using Microsoft.Extensions.DependencyInjection;

namespace GoldenVoyage.ApiServices.Configuration
{
    /// <summary>
    /// 向服务容器中注册ApiServices的各项功能
    /// </summary>
    public static class ApiServicesServiceCollectionExtensions
    {
        public static IServiceCollection AddApiServices(this IServiceCollection services, Action<ApiServicesOptions> setupAction = null)
        {
            var options = new ApiServicesOptions();
            setupAction?.Invoke(options);
            return services.AddApiServices(options);
        }

        public static IServiceCollection AddApiServices(this IServiceCollection services, ApiServicesOptions options)
        {
            services.AddSingleton(options);
            services.AddCoreServices();
            services.AddModuleServices();
            return services;
        }

        private static IServiceCollection AddCoreServices(this IServiceCollection services)
        {
            services.AddTransient<IApiServicesProvider, ApiServicesProvider>();
            services.AddTransient<ServiceContext>();
            services.AddTransient<ILoginService, LoginService>();
            return services;
        }

        private static IServiceCollection AddModuleServices(this IServiceCollection services)
        {
            services.AddTransient<IEntityService<Hotel>, HotelService>();
            services.AddEntityService<RoomType>();
            services.AddEntityService<RoomFeature>();
            services.AddEntityService<OutOfOrderReason>();
            services.AddEntityService<Room>();
            services.AddEntityService<ReservationType>();
            services.AddEntityService<AccountType>();
            services.AddEntityService<Market>();
            services.AddEntityService<Source>();
            services.AddEntityService<Country>();
            services.AddEntityService<Province>();
            services.AddEntityService<Region>();
            services.AddEntityService<TransactCode>();
            services.AddEntityService<BillingDetailPackage>();
            services.AddEntityService<Contact>();
            services.AddEntityService<Ethnicity>();
            services.AddEntityService<GroupType>();
            services.AddEntityService<GuestType>();
            services.AddEntityService<GuestTitle>();
            services.AddEntityService<IdentityType>();
            services.AddEntityService<RateCode>();
            services.AddEntityService<Language>();
            services.AddEntityService<TransactCode>();
            services.AddEntityService<TransactClassify>();

            return services;
        }

        private static IServiceCollection AddEntityService<TEntity>(this IServiceCollection services)
            where TEntity : ItemBase
        {
            services.AddTransient<IEntityService<TEntity>, EntityService<TEntity>>();
            return services;
        }
    }
}