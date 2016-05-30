using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 入住登记证件
    /// </summary>
    public class Identity : ItemBase
    {
        // 属性
        public IdentityAttribute Attribute { get; set; }

        // 证件类型
        public int? TypeId { get; set; }
        [ForeignKey("TypeId")]
        public IdentityType Type { get; set; }
 
        // 证件有效期
        [JsonConverter(typeof(JsonDateConverter))]
        public DateTime? ExpirationDate { get; set; }

        // 证件号码
        [StringLength(100)]
        public string Number { get; set; }

        // 所属宾客
        public int? GuestId { get; set; }

    }
}
