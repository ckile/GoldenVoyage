using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace GoldenVoyage.Models.Entities
{
    public class BillingDetail : EntityBase
    {
        public int BillingId { get; set; }

        [JsonIgnore]
        public Billing Billing { get; set; }

        [Required]
        public int TransactCodeId { get; set; }

        [ForeignKey(nameof(TransactCodeId))]
        public TransactCode TransactCode { get; set; }



        public decimal Amount { get; set; }

        [Required]
        public int PackageId { get; set; }

        [ForeignKey(nameof(PackageId))]
        public BillingDetailPackage Package { get; set; }

        public DateTime PosTime { get; set; }
        
        public DateTime HotelDate { get; set; }

        public int EmployeeId { get; set; }

        [JsonIgnore]
        public Employee Employee { get; set; }
    }
}
