using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 账户关联的宾客
    /// </summary>
    public class AccountMmGuest : ItemBase
    {
        // 账户Id
        public int AccountId { get; set; }

        // 宾客姓名
        public string Name { get; set; }

        // 宾客Id
        public int? GuestId { get; set; }

        [ForeignKey("GuestId")]
        public Guest Guest { get; set; }

        // 本次入住使用的证件
        public int? IdentityId { get; set; }

        [StringLength(100)]
        public string IdentityNumber { get; set; }

        protected override void VerificationFields()
        {
            base.VerificationFields();
            VerifyField(nameof(Name));
            VerifyField(nameof(IdentityNumber));
        }
    }
}