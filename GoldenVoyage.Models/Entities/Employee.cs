using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 员工类
    /// 员工登陆等
    /// </summary>
    public class Employee : UserBase
    {
        // 部门
        public int? DepartmentId { get; set; }

        [ForeignKey(nameof(DepartmentId))]
        public Department Department { get; set; }

        // 职位
        public int? PositionId { get; set; }

        [ForeignKey(nameof(PositionId))]
        public Position Position { get; set; }

        // 默认酒店
        public int? DefaultHotelId { get; set; }

        [ForeignKey(nameof(DefaultHotelId))]
        public Hotel DefaultHotel { get; set; }

        // 权限
        public int? RightId { get; set; }

        [ForeignKey(nameof(RightId))]
        public EmployeeRights Right { get; set; }

        // 可控制酒店列表
        public ICollection<EmployeeMmHotel> Hotels { get; set; }
 
    }
 

    // 员工所属酒店
    public class EmployeeMmHotel : ItemBase
    {
        public int EmployeeId { get; set; }

        public Hotel Hotel { get; set; }
    }
}