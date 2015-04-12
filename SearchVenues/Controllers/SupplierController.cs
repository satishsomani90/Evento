using SearchVenues.Models;
using SearchVenues.Models.Models;
using SearchVenues.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SearchVenues.Controllers
{
    public class SupplierController : ApiController
    {
        private readonly ISuplierProvider suplierProvider = new SupplierProvider();
        //   GET: /api/Supplier
        public VenueBrokerResponse Get([FromUri]VenueBrokerRequest request)
        {
            VenueBrokerResponse response = new VenueBrokerResponse();
            List<Supplier> listOfSupplier = (from sup in suplierProvider.All.ToList()
                                             select sup).ToList();
            response.Data = listOfSupplier;
            response.TotalItems = listOfSupplier.Count();
            response.Message = "Passed";
            response.Result = VenueBrokerResult.PASSED;
            return response;
        }
    }
}
