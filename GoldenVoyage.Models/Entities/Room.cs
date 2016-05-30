using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 房间实体
    /// </summary>
    public class Room : HotelEntityBase
    {
        [Required]
        // 房号
        [StringLength(20)]
        public string Code { get; set; }

        public int? ProfileId { get; set; }

        [ForeignKey(nameof(ProfileId))]
        public RoomProfile Profile { get; set; }

        // 房型
        [Required]
        public int TypeId { get; set; }

        [ForeignKey(nameof(TypeId))]
        public RoomType Type { get; set; }

        // 属性
        public ICollection<RoomMmRoomFeature> Features { get; set; }

        // 楼层
        public int? Floor { get; set; }

        // 床数
        public int? Beds { get; set; }

        public RoomState Status { get; set; }

        public RoomCleanStatus CleanStatus { get; set; }
    }

    public class RoomProfile : EntityBase
    {
        [JsonIgnore]
        public int RoomId { get; set; }

        [JsonIgnore]
        public Room Room { get; set; }
    }

    public class RoomMmRoomFeature : EntityBase
    {
        public int RoomId { get; set; }

        [JsonIgnore]
        [ForeignKey(nameof(RoomId))]
        public Room Room { get; set; }

        public int FeatureId { get; set; }

        [ForeignKey(nameof(FeatureId))]
        public RoomFeature Feature { get; set; }
    }
}