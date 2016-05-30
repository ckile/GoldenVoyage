using System.ComponentModel.DataAnnotations;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 员工操作位权
    /// </summary>
    public class EmployeeRights : EntityBase
    {
        [Required]
        public int EmployeeId { get; set; }

        // 所属员工

        public Employee Employee { get; set; }

        public string Right { get; set; }
    }
}