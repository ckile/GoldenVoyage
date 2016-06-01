using GoldenVoyage.Models.Entities;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GoldenVoyage.Models
{
    /// <summary>
    /// 登陆用户基础类
    /// </summary>
    public abstract class UserBase : ItemBase
    {
        [Required]
        public UserRoles Role { get; set; }

        [Required]
        [StringLength(20)]
        public string UserCode { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        

        [JsonIgnore]
        public Password Password { get; set; }
    }
}
