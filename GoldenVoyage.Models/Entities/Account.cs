using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 账户  这是 Reservation实体的 依赖实体 dependent entity
    /// 每一次预订、入住等均生成至少一个新账户
    /// 一个账户在某一时刻只允许有一个房号，但允许多个客人
    /// </summary>
    public class Account : HotelEntityBase
    {
        /// <summary>
        /// 账号 *
        /// </summary>
        [Required]
        [StringLength(20)]
        public string Code { get; set; }

        /// <summary>
        /// 账户描述 *
        /// </summary>
        [Required]
        [StringLength(200)]
        public string Description { get; set; }

        /// <summary>
        /// 账户类型
        /// </summary>
        public int? TypeId { get; set; }

        [ForeignKey(nameof(TypeId))]
        public AccountType Type { get; set; }

        /// <summary>
        /// 账户状态 *
        /// </summary>
        [Required]
        public AccountStatus Status { get; set; }

        /// <summary>
        /// 所属客户
        /// </summary>
        public int? CustomerId { get; set; }

        [ForeignKey(nameof(CustomerId))]
        public Customer Customer { get; set; }

        /// <summary>
        /// 所属订单 * 相对于订单的外键 foreign key
        /// </summary>
        public int ReservationId { get; set; }

        [JsonIgnore]
        [ForeignKey(nameof(ReservationId))]
        public Reservation Reservation { get; set; }   // 逆转导航属性

        /// <summary>
        /// 同来关系
        /// </summary>
        public int? ComeWithId { get; set; }

        [ForeignKey(nameof(ComeWithId))]
        public AccountComeWith ComeWith { get; set; }  // 导航属性

        /// <summary>
        /// 所属合住
        /// </summary>
        public int? ShareId { get; set; }

        [JsonIgnore]
        [ForeignKey(nameof(ShareId))]
        public AccountShare Share { get; set; }

        /// <summary>
        /// 今日房价
        /// 随日期的变化自动调整
        /// </summary>
        public int? CurrentRateId { get; set; }

        [ForeignKey(nameof(CurrentRateId))]
        public AccountRate CurrentRate { get; set; }

        /// <summary>
        /// 房价计划集合
        /// 这个Account使用到的全部房价
        /// </summary>
       // public ICollection<AccountRate> Rates { get; set; }

        /// <summary>
        /// 账户停留日期
        /// 日期范围
        /// </summary>

        public int? StayId { get; set; }

        [ForeignKey(nameof(StayId))]
        public AccountStay Stay { get; set; }

        /// <summary>
        /// 账户分类统计信息
        /// </summary>
        public int? ClassifyId { get; set; }

        [ForeignKey(nameof(ClassifyId))]
        public AccountClassify Classify { get; set; }

        /// <summary>
        /// 账户宾客列表
        /// 一个账户允许多个住客
        /// </summary>
        public ICollection<AccountMmGuest> Guests { get; set; }

        /// <summary>
        /// 账户备注
        /// </summary>
        public ICollection<AccountMmRemark> Remarks { get; set; }

        protected override void VerificationFields()
        {
            base.VerificationFields();
            VerifyField(nameof(HotelId));
            VerifyField(nameof(Code));
            VerifyField(nameof(Description));
            VerifyField(nameof(Guests));
            VerifyField(nameof(ComeWith));
            VerifyField(nameof(Share));
            VerifyField(nameof(Stay));
            VerifyField(nameof(CurrentRate));
            VerifyField(nameof(Classify));
            MergeVerify(Share.Verification());
        }
    }

    public class AccountMmRemark : ItemBase
    {
        public int AccountId { get; set; }

        public RemarkAttribute Attribute { get; set; }

        public string Remark { get; set; }
    }
}