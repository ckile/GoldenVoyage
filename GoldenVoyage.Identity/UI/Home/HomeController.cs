using Microsoft.AspNetCore.Mvc;

namespace GoldenVoyage.Identity.UI.Home
{
    public class HomeController : Controller
    {
        [Route("/")]
        public IActionResult Index()
        {
            return View();
        }
    }
}