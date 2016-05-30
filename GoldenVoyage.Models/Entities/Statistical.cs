namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 基本统计
    /// </summary>
    public class Statistical : EntityBase
    {
        //来店次数
        public int ArrivalCount { get; set; }
        // 房晚数
        public int NightCount { get; set; }

        // 未到次数
        public int NoShowCount { get; set; }

        // 取消次数
        public int CancelCount { get; set; }

        // 消费合计
        public decimal ExpenseTotal { get; set; }

        // 积分合计
        public decimal BonusPointTotal { get; set; }
    }
}
