using System.ComponentModel.DataAnnotations;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 员工操作位权
    /// </summary>
    public class EmployeeRights : ItemBase
    {        

        public string Right { get; set; }
    }
}