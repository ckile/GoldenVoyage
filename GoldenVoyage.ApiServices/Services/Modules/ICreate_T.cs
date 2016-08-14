using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.Models;

namespace GoldenVoyage.ApiServices.Services.Modules
{
    public interface ICreate<T>
    {
        Task<OperatorResult> Create(T entity);
    }
}