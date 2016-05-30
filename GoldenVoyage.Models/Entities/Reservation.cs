using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 订单实体
    /// 代表一个订单
    /// </summary>
    public class Reservation : EntityBase
    {
        /// <summary>
        /// 订单状态
        /// </summary>
        public ReservationStatus Status { get; set; }

        /// <summary>
        /// 订单代码
        /// </summary>
        [StringLength(20)]
        public string Code { get; set; }

        // 描述
        [StringLength(200)]
        public string Description { get; set; }

        /// <summary>
        /// 旅行社
        /// </summary>
        public int? TravelAgencyId { get; set; }

        [ForeignKey(nameof(TravelAgencyId))]
        public Customer TravelAgency { get; set; }

        /// <summary>
        /// 订房人或代理人
        /// </summary>
        public int? AgenId { get; set; }

        [ForeignKey(nameof(AgenId))]
        public Guest Agent { get; set; }

        /// <summary>
        /// 订单类型
        /// </summary>
        public int? TypeId { get; set; }

        [ForeignKey(nameof(TypeId))]
        public ReservationType Type { get; set; }

        /// <summary>
        /// 预订确认状态
        /// </summary>
        public ReservationConfirmedStatus ConfirmedStatus { get; set; }

        /// <summary>
        /// 预订所包含的账户 集合导航属性
        /// </summary>
        public ICollection<Account> Accounts { get; set; }

        protected override void VerificationFields()
        {
            VerifyField(nameof(Code));
            VerifyField(nameof(Description));
            VerifyField(nameof(TypeId));
            VerifyField(nameof(Accounts));
        }
    }
}