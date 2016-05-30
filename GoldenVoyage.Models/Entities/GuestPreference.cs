using System.Collections.Generic; 

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 宾客喜好
    /// </summary>
    public class GuestPreference : ItemBase
    { 
        /// <summary>
        /// 喜好描述
        /// </summary>
        public string Preference { get; set; }

        /// <summary>
        /// 喜爱房号
        /// </summary>
        public string LikeRooms { get; set; }

        /// <summary>
        /// 喜爱房间属性
        /// </summary>
        public virtual ICollection<GuestMmRoomFeature> RoomFeatures { get; set; }
    }

    public class GuestMmRoomFeature : EntityBase
    {
        public int PreferenceId { get; set; }

        public virtual RoomFeature RoomFeature { get; set; }
    }

}
