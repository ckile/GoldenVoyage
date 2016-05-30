using System.Collections.Generic;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 房价代码
    /// </summary>
    public class RateCode : ValueObjectEntityBase
    {
        public RateAttribute Attribute { get; set; }

        public ICollection<RateCodeDetail> Details { get; set; }
    }
}