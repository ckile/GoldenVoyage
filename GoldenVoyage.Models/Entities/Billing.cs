using Newtonsoft.Json;
namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 账单
    /// 不论账户、团队都可以存在账单
    /// </summary>
    public class Billing : EntityBase
    {
        public int AccountId { get; set; }

        [JsonIgnore]
        public Account Account { get; set; }

        

    }
}
