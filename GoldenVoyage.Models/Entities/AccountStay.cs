using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 账户停留信息
    /// </summary>
    public class AccountStay : ItemBase
    {


        /// <summary>
        /// 人数
        /// </summary>
        [Required]
        public int Adults { get; set; }

        /// <summary>
        /// 儿童数
        /// </summary>
        [Required]
        public int Childs { get; set; }

        /// <summary>
        /// 来店与离店日期
        /// </summary>
        [Required]
        //[JsonConverter(typeof(JsonDateConverter))]
        [DataType(DataType.Date)]
        private DateTime _arrival;

        public DateTime Arrival
        {
            get
            {
                return _arrival;
            }
            set
            {
                _arrival = value;
                if (_departure < _arrival)
                    _departure = _arrival;
            }
        }

        /// <summary>
        /// 离期
        /// </summary>
        [Required]

        //[JsonConverter(typeof(JsonDateConverter))]
        [DataType(DataType.Date)]
        private DateTime _departure;

        public DateTime Departure

        {
            get
            {
                return _departure;
            }
            set
            {
                if (value <= Arrival)
                    _departure = Arrival;
                else
                    _departure = value;
            }
        }

        /// <summary>
        /// 房晚数
        /// </summary>
        [NotMapped]
        public int Nights
        {
            get { return (Departure - Arrival).Days; }
            set { Departure = Arrival.AddDays(value); }
        }

    }
}