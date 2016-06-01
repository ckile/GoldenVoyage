using System.Threading.Tasks;
using GoldenVoyage.ApiServices.Services;
using GoldenVoyage.Models;
using Microsoft.AspNetCore.Mvc;
using static GoldenVoyage.Models.OperatorResult;
using Microsoft.AspNetCore.Authorization;

namespace GoldenVoyage.Api.Controllers
{
    [Route("[controller]")]
    public class EntityControllerBase<TEntity> : AuthorControllerBase
    {
        public EntityControllerBase(IApiServicesProvider apiServicesProvider) : base(apiServicesProvider)
        { }

        private IEntityService<TEntity> GetService()
        {
            return Create<IEntityService<TEntity>>();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await GetService().GetBy(id);
            if (result == null) return NotFoundEntity();
            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> Get(PaginateParamter paramter)
        {
            if (paramter == null) return InvaildArgument();
            var result = await GetService().GetBy(paramter);
            if (result == null) return NotFoundEntity();
            return Ok(result);
        }

        [Authorize(Roles = "")]
        [HttpPost]
        public async Task<IActionResult> Post(TEntity entity)
        {
            if (entity == null) return InvaildArgument();
            var result = await GetService().Create(entity);
            if (!result.Flag) return BadRequest(result);
            return Created("", result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, TEntity entity)
        {
            if (entity == null) return InvaildArgument();
            var result = await GetService().Update(id, entity);
            if (!result.Flag) return BadRequest(result);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await GetService().Delete(id);
            if (!result.Flag) return BadRequest(result);
            return Ok(result);
        }

        private IActionResult InvaildArgument()
        {
            return BadRequest(Error(ErrorCodes.InvalidArgument));
        }

        private IActionResult NotFoundEntity()
        {
            return NotFound(Error(ErrorCodes.NotFound));
        }
    }
}