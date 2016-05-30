namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 贵宾类型
    /// </summary>
    public class VipType : ValueObjectEntityBase
    {
        public VipAttribute Attribute { get; set; }
    }
}
