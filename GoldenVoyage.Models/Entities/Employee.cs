using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 员工类
    /// 员工登陆等
    /// </summary>
    public class Employee : UserBase
    {
        [Required]
        public int ProfileId { get; set; }

        [ForeignKey("ProfileId")]
        public EmployeeProfile Profile { get; set; }

        // 部门
        public int DepartmentId { get; set; }

        [ForeignKey("DepartmentId")]
        public Department Department { get; set; }

        // 职位
        public int PositionId { get; set; }

        [ForeignKey("PositionId")]
        public Position Position { get; set; }

        // 默认酒店
        public int DefalutHotelId { get; set; }

        [ForeignKey("DefalutHotelId")]
        public Hotel DefaultHotel { get; set; }

        // 权限
        public int? RightId { get; set; }

        [ForeignKey("RightId")]
        public EmployeeRights Right { get; set; }
    }

    public class EmployeeProfile : EntityBase
    {
        [JsonIgnore]
        public int EmployeeId { get; set; }

        [JsonIgnore]
        public Employee Employee { get; set; }

        // 可控制酒店列表
        public ICollection<EmployeeMmHotel> Hotels { get; set; }
    }

    // 员工所属酒店
    public class EmployeeMmHotel : EntityBase
    {
        public Hotel Hotel { get; set; }
    }
}