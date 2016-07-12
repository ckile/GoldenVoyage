using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 宾客实体
    /// </summary>
    public class Guest : EntityBase
    {
        // 中文名 *
        [Required]
        [StringLength(200)]
        public string Name { get; set; }

        // 英文名
        [StringLength(200)]
        public string EName { get; set; }

        // 所属酒店
        public int? HotelId { get; set; }

        [ForeignKey("HotelId")]
        public Hotel Hotel { get; set; }

        // 类型
        public int? TypeId { get; set; }

        [ForeignKey("TypeId")]
        public GuestType Type { get; set; }

        // 属性 *
        public GuestAttribute Attribute { get; set; }

        // 性别 *
        public GenderAttribute Gender { get; set; }

        // 生日
        [DataType(DataType.Date)]
        public DateTime? BirthDate { get; set; }

        // 称谓
        public int? TitleId { get; set; }

        [ForeignKey("TitleId")]
        public GuestTitle Title { get; set; }

        // 语种
        public int? LanguageId { get; set; }

        [ForeignKey("LanguageId")]
        public Language Language { get; set; }

        // 贵宾
        public int? VipTypeId { get; set; }

        [ForeignKey("VipTypeId")]
        public VipType VipType { get; set; }

        // 所属公司
        public int? CustomerId { get; set; }

        [ForeignKey("CustomerId")]
        public Customer Customer { get; set; }

        // 喜好
        public int? PreferenceId { get; set; }

        [ForeignKey("PreferenceId")]
        public GuestPreference Preference { get; set; }

        // 统计
        public int? StatisticalId { get; set; }

        [ForeignKey("StatisticalId")]
        public Statistical Statistical { get; set; }

        // 备注
        public int? RemarkId { get; set; }

        [ForeignKey("RemarkId")]
        public GuestRemark Remark { get; set; }

        // 证件集合
        public ICollection<Identity> Identities { get; set; }

        // 地址集合
        public ICollection<Address> Addresses { get; set; }

        // 联系方式集合
        public ICollection<Contact> Contacts { get; set; }

        // 特殊要求历史纪录集合
        public ICollection<GuestMmSpecialRequest> SpecialRequests { get; set; }

        // 扩展信息
        public int? ProfileId { get; set; }

        [ForeignKey("ProfileId")]
        public virtual GuestProfile Profile { get; set; }

        protected override void VerificationFields()
        {
            base.VerificationFields();
            VerifyField(nameof(Name));
        }
    }

    /// <summary>
    /// 宾客扩展属性
    /// </summary>
    public class GuestProfile : ItemBase
    {
        public int GuestId { get; set; }

        [JsonIgnore]
        public Guest Guest { get; set; }

        // 名族
        public int? EthnicityId { get; set; }

        [ForeignKey("EthnicityId")]
        public Ethnicity Ethnicity { get; set; }
    }

    // 宾客特殊要求
    public class GuestMmSpecialRequest : ItemBase
    {
        // 所属宾客
        public int GuestId { get; set; }

        public int SpecialRequestId { get; set; }
        
        // 特殊要求
        public SpecialRequest SpecialRequest { get; set; }
    }

    // 宾客备注
    public class GuestRemark : ItemBase
    {
        // 所属宾客
        public int GuestId { get; set; }

        // 前台备注
        public string FrontRemark { get; set; }

        // 收银备注
        public string CashingRemark { get; set; }
    }
}