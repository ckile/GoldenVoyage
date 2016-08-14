using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.Models;

namespace GoldenVoyage.ApiServices.Services.Modules
{
    public interface IUpdate<T>
    {
        Task<OperatorResult> Update(int id, T entity);
    }
}