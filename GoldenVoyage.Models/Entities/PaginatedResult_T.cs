using System.Collections.Generic;
using System.Linq;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 查询结果集
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class PaginatedResult<T>
    {
        // 结果集合
        public IEnumerable<T> data { get; set; }

        // 总记录数
        public int recordsTotal { get; set; }

        // 查询Id
        public int draw { get; set; }

        // 过滤数量
        public int recordsFiltered { get; set; }
    }
}