using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 账户分类信息
    /// </summary>
    public class AccountClassify : ItemBase
    {
        /// <summary>
        /// 市场
        /// </summary>
        public int? MarketId { get; set; }

        [ForeignKey(nameof(MarketId))]
        public Market Market { get; set; }

        /// <summary>
        /// 客源
        /// </summary>
        public int? SourceId { get; set; }

        [ForeignKey(nameof(SourceId))]
        public Source Source { get; set; }

        /// <summary>
        /// 销售员
        /// </summary>
        public int? SalerId { get; set; }

        [ForeignKey(nameof(SalerId))]
        public Employee Saler { get; set; }
        }
}
