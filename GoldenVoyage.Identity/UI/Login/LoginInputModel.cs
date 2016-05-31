using System.ComponentModel.DataAnnotations;

namespace GoldenVoyage.Identity.UI.Login
{
    public class LoginInputModel
    {
        [Required]
        [Display(Name ="员工号")]
        public string Username { get; set; }
        [Required]
        [Display(Name ="密  码")]
        public string Password { get; set; }
        public bool RememberLogin { get; set; }
        public string SignInId { get; set; }
    }
}