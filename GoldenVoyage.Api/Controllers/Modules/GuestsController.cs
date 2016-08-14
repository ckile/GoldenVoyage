using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoldenVoyage.ApiServices.Services;
using GoldenVoyage.ApiServices.Services.Modules;
using GoldenVoyage.Models;
using GoldenVoyage.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace GoldenVoyage.Api.Controllers.Modules
{
    public class GuestsController : AuthorControllerBase
    {
        public GuestsController(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        {
        }

        /// <summary>
        /// 使用Post参数的方法进行Get
        /// </summary>
        /// <param name="paramter">分页参数</param>
        /// <returns>分页结果</returns>
        [HttpPost("page")]
        public async Task<IActionResult> PostGet([FromBody] PaginateParamter paramter)
        {
            if (paramter == null || paramter.length.Equals(0)) return InvaildArgument();
            var ser = Create<IGuestsService>();

            var result = await ser.GetPage(paramter);
            if (result == null) return NotFoundEntity();
            return Ok(result);
        }

        /// <summary>
        ///  Post添加实体
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Guest entity)
        {
            if (entity == null) return InvaildArgument();
            var result = await Create<IGuestsService>().Create(entity);
            if (!result.Flag) return BadRequest(result);
            return Created("", result);
        }

        /// <summary>
        ///  Put 修改实体
        /// </summary>
        /// <param name="id">实体id</param>
        /// <param name="entity">实体</param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Guest entity)
        {
            if (entity == null) return InvaildArgument();
            var result = await Create<IGuestsService>().Update(id, entity);
            if (!result.Flag) return BadRequest(result);
            return Ok(result);
        }
    }
}