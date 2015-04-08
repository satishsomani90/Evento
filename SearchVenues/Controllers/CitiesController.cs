using SearchVenues.Models;
using SearchVenues.Models.Models;
using SearchVenues.Models.ViewModel;
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
        public List<CityViewModel> Get([FromUri]VenueBrokerRequest request, string text)
        {
            //string SearchText = request.SearchCriteria["SearchText"];
            VenueBrokerResponse response = new VenueBrokerResponse();
            List<CityViewModel> listOfCities = (from b in cityProvider.All
                                                where b.CityName.Contains(text)
                                       select new CityViewModel() { 
                                            display = b.CityName,
                                            value = b.CityID,
                                            state = b.State.StateName
                                       }).ToList();
            return listOfCities;
        }
    }
}
