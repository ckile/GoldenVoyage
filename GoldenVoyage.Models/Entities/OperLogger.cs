using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace GoldenVoyage.Models.Entities
{
    public class OperLogger : ItemBase
    {
        // 操作账号
        public int? AccountId { get; set; }

        // 功能Id
        public Functions Function { get; set; }
        
        public int? RoomId { get; set; }
        
        // 内容
        public string Data { get; set; }

        public DateTime LogTime { get; set; }
        
        public int? EmployeeId { get; set; }

        [ForeignKey("EmployeeId")]
        public Employee Employee { get; set; }


    }
}
