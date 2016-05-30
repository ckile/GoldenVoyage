using Newtonsoft.Json;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 密码类
    /// </summary>
    public class Password : EntityBase
    {
        [JsonIgnore]
        public string PasswordString { get; set; }
    }
}
