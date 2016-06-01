using Microsoft.AspNetCore.Mvc;

namespace GoldenVoyage.Api.Controllers
{
    //[Route("home")]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}