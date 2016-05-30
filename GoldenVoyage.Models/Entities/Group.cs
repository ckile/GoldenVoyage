using System.ComponentModel.DataAnnotations;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 团队主单
    /// </summary>
    public class Group : HotelEntityBase
    {
        [Required]
        [StringLength(20)]
        public string Code { get; set; }

        [Required]
        [StringLength(200)]
        public string Name { get; set; }

        public GroupType Type { get; set; }

        public GroupAttribute Attribute { get; set; }


    }
}
