using System.Collections.Generic;

namespace GoldenVoyage.Identity.UI.Consent
{
    public class ConsentInputModel
    {
        public IEnumerable<string> ScopesConsented { get; set; }
        public bool RememberConsent { get; set; }
    }
}
