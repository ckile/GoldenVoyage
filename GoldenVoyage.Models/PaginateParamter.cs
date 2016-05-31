using System.Collections.Generic;
using System.Linq;

namespace GoldenVoyage.Models
{
    /// <summary>
    /// 分页查询参数
    /// </summary>

    public class PaginateParamter
    {
        // 查询Id
        public int draw { get; set; }

        // 开始Id
        public int start { get; set; }

        // 页宽
        public int length { get; set; }

        // 附带搜索
        public Search search { get; set; }

        // 搜索文本
        public string searchText { get; set; }

        // 排序列
        public List<Order> order { get; set; }

        public List<Column> columns { get; set; }

        public string GetColumnFeildName(int id)
        {
            return columns != null ? columns.ElementAt(id).data : "";
        }
    }

    public class Column
    {
        // 字段Id
        public string data { get; set; }

        // 描述
        public string name { get; set; }

        // 是否搜索
        public bool searchable { get; set; }

        // 是否排序
        public bool orderable { get; set; }

        // 搜索
        public Search search { get; set; }
    }

    public class Order
    {
        public int column { get; set; }

        /// <summary>
        /// asc 升序 desc 降序
        /// </summary>
        public string dir { get; set; }  // 排序asc升  desc 降
    }

    public class Search
    {
        public string value { get; set; }

        public bool regex { get; set; }
    }
}