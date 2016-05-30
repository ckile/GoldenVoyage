namespace GoldenVoyage.Models.Entities
{
    public class ReservationType : ValueObjectEntityBase
    {
        // 预定担保类型
        public ReservationGuaranteeAttribute GuaranteeAttribute { get; set; }
    }
}
