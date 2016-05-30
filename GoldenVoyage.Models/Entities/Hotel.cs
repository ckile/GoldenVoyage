using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 酒店实体
    /// </summary>
    public class Hotel : EntityBase    // 这是 principal entity 主实体 相对Profile
    {
        [Required]
        [StringLength(200)]
        public string Name { get; set; }

        [Required]
        public int ProfileId { get; set; }   // 如果没有定义此属性则系统自动生成Show Property

        [ForeignKey(nameof(ProfileId))]
        public virtual HotelProfile Profile { get; set; }  // 这是 reference navigation property 导航对象

        protected override void VerificationFields()
        {
            VerifyField(nameof(Name));
        }
    }

    public class HotelProfile : EntityBase   // 这是dependent entity 关联实体
    {
        [JsonIgnore]   // 避免重复的Id
        public int HotelId { get; set; }  // 这是 foreign key 外键

        [JsonIgnore]   // 避免Json序列化死循环
        public Hotel Hotel { get; set; } // 这是 reference navigation property 导航对象

        //[DatabaseGenerated(DatabaseGeneratedOption.None)]
        [JsonConverter(typeof(JsonDateConverter))]
        [Column(TypeName = "smalldatetime")]
        public DateTime HotelDate { get; set; }

        [JsonConverter(typeof(JsonDateConverter))]
        [Column(TypeName = "smalldatetime")]
        public DateTime ReportDate { get; set; }

        [Url]
        public string LocalServiceAddress { get; set; }
    }

    /// <summary>
    /// 在JSON序列化日期时进行格式转换
    /// </summary>
    public class JsonDateConverter : DateTimeConverterBase
    {
        private static IsoDateTimeConverter dtConverter = new IsoDateTimeConverter { DateTimeFormat = "yyyy-MM-dd" };

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            return dtConverter.ReadJson(reader, objectType, existingValue, serializer);
        }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            dtConverter.WriteJson(writer, value, serializer);
        }
    }
}