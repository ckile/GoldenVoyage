using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 停留日期，描述一个日期段,晚数为来期与离期之差
    /// </summary>
    public class StayDate : ItemBase
    {
        /// <summary>
        /// 来期
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

        //protected override void VerificationFields()
        //{
        //    base.VerificationFields();
        //    if (Departure < Arrival)
        //        AddVerifyError(nameof(Departure));
        //}
    }
}