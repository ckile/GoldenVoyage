using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 地址
    /// </summary>
    public class Address : ItemBase
    {
        // 地址类型
        [Required]
        public AddressAttribute Attribute { get; set; }

        // 国家
        public int? CountryId { get; set; }
        public Country Country { get; set; }

        // 省份
        public int? ProvinceId { get; set; }
        public Province Province { get; set; }

        // 地区
        public int? RegionId { get; set; }
        public Region Region { get; set; }

        // 地址
        public string Addr { get; set; }

        // 所属宾客
        public int? GuestId { get; set; }

    }

    /// <summary>
    /// 国家
    /// </summary>
    public class Country : ValueObjectEntityBase
    {
        public ICollection<Province> Provinces { get; set; }
    }

    /// <summary>
    /// 省份
    /// </summary>
    public class Province : ValueObjectEntityBase
    {
        public int? CountryId { get; set; }

        public ICollection<Region> Regions { get; set; }
    }

    /// <summary>
    /// 地区或城市
    /// </summary>
    public class Region : ValueObjectEntityBase
    {
        public int? ProvinceId { get; set; }
    }

}
