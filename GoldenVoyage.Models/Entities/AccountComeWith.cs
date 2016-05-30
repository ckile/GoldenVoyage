using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 账户 - 同来
    /// 代表与此Account一同抵店的Account
    /// </summary>
    public class AccountComeWith : ItemBase
    {
        /// <summary>
        /// 同行描述
        /// </summary>
        [Required]
        [StringLength(200)]
        public string Description { get; set; }

        /// <summary>
        /// 同行全部清单
        /// </summary>
        public ICollection<Account> Accounts { get; set; }

        protected override void VerificationFields()
        {
            base.VerificationFields();
            VerifyField(nameof(Description));
        }
    }
}