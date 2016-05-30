using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;
namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 客户实体
    /// </summary>
    public class Customer : EntityBase
    {
        // 名称 *
        [Required]
        [StringLength(200)]
        public string Name { get; set; }

        // 所属酒店
        public int? HotelId { get; set; }
        [ForeignKey("HotelId")]
        public Hotel Hotel { get; set; }

        // 属性 *
        public CustomerAttribute Attribute { get; set; }

        // 类型
        public int? TypeId { get; set; }
        [ForeignKey("TypeId")]
        public CustomerType Type { get; set; }

        // 地址列表
        public ICollection<Address> Addresses { get; set; }

        // 联系方式列表
        public ICollection<Contact> Contacts { get; set; }


        // 扩展信息
        public int? ProfileId { get; set; }
        [ForeignKey("ProfileId")]
        public CustomerProfile Profile { get; set; }

    }

    /// <summary>
    /// 客户扩展信息
    /// </summary>
    public class CustomerProfile : ItemBase
    {
        public int? CustomerId { get; set; }

        [JsonIgnore]
        public Customer Customer { get; set; }

    }



}
