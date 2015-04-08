mainApp.controller('venuesCtrl', ['$timeout', '$scope', '$http', function ($timeout, $scope, $http) {
    $scope.SelectedTypes = new Array();
    $scope.Init = function () {
      var url = document.URL;
      var id = url.substring(url.lastIndexOf('/') + 1);
      $scope.Request = new Request();
      $scope.Request.Criteria = "[{Key: 'LocationID', Value: '" + id + "'}]";
      $http({
          method: "GET",
          url: "/api/Venues",
          params: $scope.Request.get()
      }).success(function (callback) {
          $scope.Venues = callback.Data;
          console.log($scope.Venues);
      });
    };

    $scope.selectFacility = function (id, model) {
        if (model) {
            $scope.SelectedTypes.push(id);
        }
        else {
            var index = $scope.SelectedTypes.indexOf(id);
            $scope.SelectedTypes.splice(index, 1);
        }
        console.log($scope.SelectedTypes);
    }

    $scope.Inquiry = function (ID) {
        window.location.href = "/Home/VenueInfo/" + ID;
    }

    $scope.ApplyFilter = function (filter) {
        var url = document.URL;
        var id = url.substring(url.lastIndexOf('/') + 1);
        var budget = filter.Budget != null || typeof (filter.Budget) !== "undefined" ? filter.Budget : 0;
        var capacity = filter.Capacity != null || typeof (filter.Capacity) !== "undefined" ? filter.Capacity : 0;
        $scope.Request = new Request();
        $scope.Request.Criteria = "[{Key: 'LocationID', Value: '" + id + "'}, {Key: 'Capacity', Value: '" + capacity + "'}, {Key: 'Cost', Value: '" + budget + "'}, {Key: 'VanueFacilities', Value: '" + $scope.SelectedTypes + "'}]";
        $http({
            method: "GET",
            url: "/api/Venues",
            params: $scope.Request.get()
        }).success(function (callback) {
            $scope.Venues = callback.Data;
            console.log($scope.Venues);
        });
    }

  $scope.Init();

}]);
