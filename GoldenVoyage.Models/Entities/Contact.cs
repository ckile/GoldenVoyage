using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 联系方式
    /// </summary>
    public class Contact : ItemBase
    {
        // 联系方式属性
        public AddressAttribute Attribute { get; set; }

        // 所属客户
        public int? CustomerId { get; set; }

        // 所属宾客
        public int? GuestId { get; set; }

        // 邮件地址
        [EmailAddress]
        public string Email { get; set; }
        
        // 办公电话
        [Phone]
        public string OfficePhone { get; set; }

        // 办公传真
        [Phone]
        public string OfficeFax { get; set; }

        // 手机
        [Phone]
        public string Mobile { get; set; }

        // 微信OpenId
        [JsonIgnore]
        public string Weixin { get; set; }

    }
}
