using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 账单明细包
    /// </summary>
    public class BillingDetailPackage : EntityBase
    {

        public decimal Amount { get; set; }

        public ICollection<BillingDetail> Details { get; set; }
    }
}
