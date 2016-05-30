using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 订单合住实体
    /// 一个Share只允许一个Room
    /// 一个Share内有一个或多个Account
    /// </summary>
    public class AccountShare : ItemBase
    {
        [Required]
        // 合住号
        [StringLength(20)]
        public string Code { get; set; }

        /// <summary>
        /// 合住的最大周期
        /// 此值依据Accounts的内容计数
        /// </summary>
        [Required]
        [DataType(DataType.Date)]
        private DateTime _minArrival;

        public DateTime MinArrival
        {
            get
            {
                return _minArrival;
            }
            set
            {
                _minArrival = value;
                if (_maxDeparture < _minArrival)
                    _maxDeparture = _minArrival;
            }
        }

        /// <summary>
        /// 离期
        /// </summary>
        [Required]
        [DataType(DataType.Date)]
        private DateTime _maxDeparture;

        public DateTime MaxDeparture

        {
            get
            {
                return _maxDeparture;
            }
            set
            {
                if (value <= MinArrival)
                    _maxDeparture = MinArrival;
                else
                    _maxDeparture = value;
            }
        }

        /// <summary>
        /// 房间类型
        /// 在未分房前可设定房型合住
        /// </summary>
        public int? RoomTypeId { get; set; }

        public RoomType RoomType { get; set; }

        /// <summary>
        /// 房号
        /// </summary>
        public int? RoomId { get; set; }

        public Room Room { get; set; }

        public int Rooms { get; set; }

        /// <summary>
        /// Accounts列表
        /// </summary>
        [JsonIgnore]
        public ICollection<Account> Accounts { get; set; }




        protected override void VerificationFields()
        {
            base.VerificationFields();
            VerifyField(nameof(Code));
            VerifyField(nameof(RoomTypeId));
        }
    }
}