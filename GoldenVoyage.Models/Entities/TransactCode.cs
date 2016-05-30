using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 交易代码
    /// </summary>
    public class TransactCode : ValueObjectEntityBase
    {
        /// <summary>
        /// 交易属性
        /// </summary>
        public TransactAttribute Attribute { get; set; }
    }
}
