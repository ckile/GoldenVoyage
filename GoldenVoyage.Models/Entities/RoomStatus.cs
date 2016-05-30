namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 房间状态表
    /// </summary>
    public class RoomStatus : EntityBase
    {
        public int RoomId { get; set; }

        public RoomState Status { get; set; }

        public StayDate LockDate { get; set; }

    }
}
