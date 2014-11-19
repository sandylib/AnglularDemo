using System.Web;
using System.Web.Mvc;

namespace AngularCRUD_aspMvc5asBackend
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
