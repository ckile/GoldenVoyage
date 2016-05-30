using System.Collections.Generic;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 房价实体
    /// </summary>
    public class Rate : EntityBase
    {
        // 房价代码
        public RateCode Code { get; set; }
        // 房价金额
        public ICollection<RateMmRateDetail> RateDetails { get; set; }

    }

    public class RateMmRateDetail : EntityBase
    {
        public RateCodeDetail Detail { get; set; }
    }

}
