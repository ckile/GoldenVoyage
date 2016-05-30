using System;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;
namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 房价明细
    /// </summary>
    public class RateCodeDetail : ItemBase
    {
        public int RateCodeId { get; set; }

        [JsonIgnore]
        [ForeignKey(nameof(RateCodeId))]
        public RateCode RateCode { get; set; }

        public int RoomTypeId { get; set; }

        [ForeignKey(nameof(RoomTypeId))]
        public RoomType RoomType { get; set; }

        public decimal AmountA { get; set; }

        public decimal AmountB { get; set; }

        public decimal AmountC { get; set; }

        public decimal AmountD { get; set; }

        // 启用日期
        public DateTime BeginDate { get; set; }
    }
}