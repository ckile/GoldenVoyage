using System;
using System.Linq;
using System.Linq.Expressions;

namespace GoldenVoyage.ApiServices.Services
{
    public static class IQueryableExtensions
    {
        /// <summary>
        /// 针对Query多级排序
        /// </summary>
        /// <typeparam name="T">实体类型</typeparam>
        /// <param name="query">查询</param>
        /// <param name="keys">排序的Key</param>
        /// <returns></returns>
        public static IQueryable<T> PageOrderBy<T>(this IQueryable<T> query, PageOrderKey<T>[] keys)
        {
            if (keys == null) return query;
            bool flg = false;
            var orderQuery = (IOrderedQueryable<T>)query;
            foreach (var key in keys)
            {
                if (!flg)
                {
                    orderQuery = key.Desc
                        ? orderQuery.OrderByDescending(key.Key)
                        : orderQuery.OrderBy(key.Key);
                }
                else
                {
                    orderQuery = key.Desc
                        ? orderQuery.ThenByDescending(key.Key)
                        : orderQuery.ThenBy(key.Key);
                }
            }
            return orderQuery;
        }
    }

    /// <summary>
    /// 用于多列排序的Key
    /// </summary>
    /// <typeparam name="T">实体表</typeparam>
    public class PageOrderKey<T>
    {
        public PageOrderKey(Expression<Func<T, dynamic>> key) : this(key, false)
        { }

        public PageOrderKey(Expression<Func<T, dynamic>> key, bool desc)
        {
            Key = key;
            Desc = desc;
        }

        public Expression<Func<T, dynamic>> Key { get; set; }

        public bool Desc { get; set; }
    }
}