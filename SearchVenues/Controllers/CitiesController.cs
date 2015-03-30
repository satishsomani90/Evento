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
    public class CitiesController : ApiController
    {
        private readonly ICityProvider cityProvider;
        public CitiesController(ICityProvider cityProvider)
        {
            this.cityProvider = cityProvider;
        }
        public CitiesController()
        {
            this.cityProvider = new CityProvider();
        }
        public VenueBrokerResponse Get([FromUri]VenueBrokerRequest request)
        {
            VenueBrokerResponse response = new VenueBrokerResponse();
            List<City> listOfCities = (from b in cityProvider.All
                                       select b).ToList();
            response.Data = listOfCities;
            response.Message = "Passed";
            response.Result = VenueBrokerResult.PASSED;
            return response;
        }
    }
}
