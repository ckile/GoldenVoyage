using Newtonsoft.Json;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 密码类
    /// </summary>
    public class Password : ItemBase
    {

        [JsonIgnore]
        public string PasswordString { get; set; }
    }
}
