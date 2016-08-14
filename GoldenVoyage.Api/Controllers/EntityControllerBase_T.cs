using System.Threading.Tasks;
using GoldenVoyage.ApiServices.Services;
using GoldenVoyage.Models;
using Microsoft.AspNetCore.Mvc;

namespace GoldenVoyage.Api.Controllers
{
    [Route("[controller]")]
    public class EntityControllerBase<TEntity> : AuthorControllerBase
    {
        public EntityControllerBase(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        { }

        private IEntityRepository<TEntity> GetService()
        {
            return Create<IEntityRepository<TEntity>>();
        }

        /// <summary>
        /// Get单个实体
        /// </summary>
        /// <param name="id">实体id</param>
        /// <returns>单个实体或404</returns>
        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await GetService().GetBy(id);
            if (result == null) return NotFoundEntity();
            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> Get(PaginateParamter paramter)
        {
            if (paramter == null || paramter.length.Equals(0)) return InvaildArgument();

            var result = await GetService().GetBy(paramter);
            if (result == null) return NotFoundEntity();
            return Ok(result);
        }

        /// <summary>
        /// 使用Post参数的方法进行Get
        /// </summary>
        /// <param name="paramter">分页参数</param>
        /// <returns>分页结果</returns>
        [HttpPost("page")]
        public async Task<IActionResult> PostGet([FromBody] PaginateParamter paramter)
        {
            return await Get(paramter);
        }

        /// <summary>
        ///  Post添加实体
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] TEntity entity)
        {
            if (entity == null) return InvaildArgument();
            var result = await GetService().Create(entity);
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
        public async Task<IActionResult> Put(int id, [FromBody] TEntity entity)
        {
            if (entity == null) return InvaildArgument();
            var result = await GetService().Update(id, entity);
            if (!result.Flag) return BadRequest(result);
            return Ok(result);
        }

        /// <summary>
        ///  Delete方法 删除实体
        /// </summary>
        /// <param name="id">实体id</param>
        /// <returns>操作结果</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await GetService().Delete(id);
            if (!result.Flag) return BadRequest(result);
            return Ok(result);
        }
    }
}