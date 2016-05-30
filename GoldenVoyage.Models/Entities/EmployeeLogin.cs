using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 员工登陆实体
    /// 每次登陆将记录登陆信息
    /// 以及登陆的酒店
    /// </summary>
    public class EmployeeLogin : EntityBase
    {
        public int EmployeeId { get; set; }

        [ForeignKey("EmployeeId")]
        public Employee Employee { get; set; }

        public int? CurrentHotelId { get; set; }

        public Hotel CurrentHotel { get; set; }

        [Required]
        public DateTime LoginTime { get; set; }
    }
}
