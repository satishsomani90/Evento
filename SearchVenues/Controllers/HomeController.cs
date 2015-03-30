using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SearchVenues.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
        public ActionResult Vanues(int? LocationID)
        {
            ViewBag.Title = "Vanues";
            return View();
        }
        public ActionResult Contact()
        {
            ViewBag.Title = "Contact Us";
            return View();
        }
        public ActionResult Login()
        {
            ViewBag.Title = "Login";
            return View();
        }
    }
}
