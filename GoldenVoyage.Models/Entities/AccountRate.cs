using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 账户房价
    /// </summary>
    public class AccountRate : ItemBase
    {
        public int? AccountId { get; set; }

        // 房价代码
        public int? RateCodeId { get; set; }

        [ForeignKey(nameof(RateCodeId))]
        public RateCode RateCode { get; set; }

        // 手工折扣比率
        public decimal DiscountPercentage { get; set; }

        // 手工折扣金额
        public decimal DiscountAmount { get; set; }

        // 生效日期
        [JsonConverter(typeof(JsonDateConverter))]
        [DataType(DataType.Date)]
        public DateTime BeginDate { get; set; }

        // 房税结构
        public int? PackageId { get; set; }

        [ForeignKey(nameof(PackageId))]
        public Package Package { get; set; }

        // 金额
        public decimal Amount { get; set; }

        protected override void VerificationFields()
        {
            base.VerificationFields();
            VerifyField(nameof(RateCodeId));
            VerifyField(nameof(PackageId));
        }
    }
}