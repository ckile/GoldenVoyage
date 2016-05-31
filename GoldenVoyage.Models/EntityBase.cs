using System;
using System.Collections;
using System.ComponentModel.DataAnnotations;
using System.Reflection;

//using System.Reflection; 提供反射支持的类库
using Newtonsoft.Json;

namespace GoldenVoyage.Models
{
    /// <summary>
    /// 项目基础类
    /// </summary>
    public abstract class ItemBase
    {
        [Key]
        public int Id { get; set; }

        // 是否不可见 逻辑删除
        [JsonIgnore]
        public bool Invisible { get; set; }

        private OperatorResult _verifyResult;

        // 验证数据
        public OperatorResult Verification()
        {
            _verifyResult = OperatorResult.Success("");
            VerificationFields();
            return _verifyResult;
        }

        protected void MergeVerify(OperatorResult result)
        {
            _verifyResult.Merge(result);
        }

        protected virtual void VerificationFields()
        { }

        protected void VerifyField(string fieldName)
        {
            var type = GetType();
            var value = type.GetRuntimeProperty(fieldName).GetValue(this);
            var fieldType = type.GetRuntimeProperty(fieldName).PropertyType;
            var verifyResult = VerifyFieldCase(fieldType.Name, value);
            if (verifyResult)
                AddVerifyError(fieldName);
        }

        protected virtual bool VerifyFieldCase(string fieldTypeName, object value)
        {
            switch (fieldTypeName.ToLower())
            {
                case "string":
                    return value == null || string.IsNullOrWhiteSpace(value.ToString());

                case "icollection`1":
                    var items = value as ICollection;
                    return items == null || items.Count == 0;

                case "int32":
                    var i = Convert.ToInt32(value);
                    return i <= 0;

                default:
                    return value == null;
            }
        }

        protected void AddVerifyError(string fieldName)
        {
            _verifyResult.Merge(OperatorResult.Error($"错误:{ GetType().Name }.{ fieldName }\n"));
        }
    }

    /// <summary>
    /// 实体基础类
    /// </summary>
    public abstract class EntityBase : ItemBase
    {
        // 行版本 时间戳
        [Timestamp]
        public byte[] RowVersion { get; set; }
    }

    /// <summary>
    /// 值实体基础类
    /// </summary>
    public abstract class ValueObjectEntityBase : ItemBase
    {
        // 项目编号
        [Required]
        [StringLength(20)]
        public string Code { get; set; }

        // 项目描述
        [Required]
        [StringLength(200)]
        public string Description { get; set; }

        // 验证数据
        protected override void VerificationFields()
        {
            VerifyField(nameof(Code));
            VerifyField(nameof(Description));
        }
    }
}