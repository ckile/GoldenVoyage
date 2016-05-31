namespace GoldenVoyage.Models
{
    /// <summary>
    /// 服务操作结果
    /// </summary>
    public class OperatorResult
    {
        /// <summary>
        /// 空构造
        /// </summary>
        public OperatorResult()
            : this(false)
        { }

        /// <summary>
        /// 布尔值构造
        /// </summary>
        /// <param name="flag">操作结果成功标志</param>
        public OperatorResult(bool flag)
            : this(flag, null)
        { }

        /// <summary>
        /// 结果值构造
        /// </summary>
        /// <param name="flag">操作结果成功标志</param>
        /// <param name="data">操作结果对象</param>
        public OperatorResult(bool flag, object data)
        {
            Flag = flag;
            Data = data;
        }

        /// <summary>
        /// 合并结果,仅限于字符串
        /// </summary>
        /// <param name="result">被合并的对象</param>
        /// <returns></returns>
        public void Merge(OperatorResult result)
        {
            Flag &= result.Flag;
            Code = result.Code > Code ? result.Code : Code;
            Data += (string)result.Data;
        }

        /// <summary>
        /// 返回成功结果的静态方法
        /// </summary>
        /// <param name="message">成功消息</param>
        /// <returns></returns>
        public static OperatorResult Success(string message = "Success")
        {
            return new OperatorResult(true, message);
        }

        /// <summary>
        /// 返回错误结果的静态方法
        /// </summary>
        /// <param name="code">错误代码</param>
        /// <returns></returns>
        public static OperatorResult Error(ErrorCodes code, string message = "")
        {
            return new OperatorResult
            {
                Flag = false,
                Code = code,
                Data = code.ToString() + ":" + message
            };
        }

        /// <summary>
        /// 返回错误结果的静态方法
        /// </summary>
        /// <param name="message">错误消息</param>
        /// <returns></returns>
        public static OperatorResult Error(string message = "")
        {
            var result = new OperatorResult(false, message);
            result.Code = ErrorCodes.Error;
            return result;
        }

        /// <summary>
        /// 结果标志
        /// </summary>
        public bool Flag { get; set; }

        /// <summary>
        /// 返回代码
        /// </summary>
        public ErrorCodes Code { get; set; }

        /// <summary>
        /// 结果对象
        /// </summary>
        public object Data { get; set; }
    }

    /// <summary>
    /// 错误代码定义,默认为成功
    /// </summary>
    public enum ErrorCodes
    {
        Success, Error, FieldRequired, NotFound, InvalidArgument
    }
}