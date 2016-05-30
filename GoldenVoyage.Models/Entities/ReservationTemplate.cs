using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoldenVoyage.Models.Entities
{
    /// <summary>
    /// 开房模板
    /// </summary>
    public class ReservationTemplate : ValueObjectEntityBase
    {
        public string Name { get; set; }

        public int Nights { get; set; }

        public int RoomTypeId { get; set; }

        public int RateCodeId { get; set; }

        public int ReservationTypeId { get; set; }

        public int AccountTypeId { get; set; }
    }
}