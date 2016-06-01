using GoldenVoyage.Models.Entities;
using GoldenVoyage.ApiServices.Services;

namespace GoldenVoyage.Api.Controllers.Entities
{
    public class HotelController : EntityControllerBase<Hotel>
    {
        public HotelController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        { }
    }

    public class RoomTypeController : EntityControllerBase<RoomType>
    {
        public RoomTypeController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        { }
    }

    public class RoomFeatureController : EntityControllerBase<RoomFeature>
    {
        public RoomFeatureController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class OutOfOrderReasonController : EntityControllerBase<OutOfOrderReason>
    {
        public OutOfOrderReasonController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class RoomController : EntityControllerBase<Room>
    {
        public RoomController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class ReservationTypeController : EntityControllerBase<ReservationType>
    {
        public ReservationTypeController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class AccountTypeController : EntityControllerBase<AccountType>
    {
        public AccountTypeController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class IdentityTypeController : EntityControllerBase<IdentityType>
    {
        public IdentityTypeController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class MarketController : EntityControllerBase<Market>
    {
        public MarketController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class SourceController : EntityControllerBase<Source>
    {
        public SourceController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class CountryController : EntityControllerBase<Country>
    {
        public CountryController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class ProvinceController : EntityControllerBase<Province>
    {
        public ProvinceController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class RegionController : EntityControllerBase<Region>
    {
        public RegionController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class TransactCodeController : EntityControllerBase<TransactCode>
    {
        public TransactCodeController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class BillingDetailPackageController : EntityControllerBase<BillingDetailPackage>
    {
        public BillingDetailPackageController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class EthnicityController : EntityControllerBase<Ethnicity>
    {
        public EthnicityController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class GroupTypeController : EntityControllerBase<GroupType>
    {
        public GroupTypeController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class GuestTypeController : EntityControllerBase<GuestType>
    {
        public GuestTypeController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class GuestTitleController : EntityControllerBase<GuestTitle>
    {
        public GuestTitleController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class RateCodeController : EntityControllerBase<RateCode>
    {
        public RateCodeController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }

    public class LanguageController : EntityControllerBase<Language>
    {
        public LanguageController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }


    public class TransactClassifyController : EntityControllerBase<TransactClassify>
    {
        public TransactClassifyController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }
    }
}
