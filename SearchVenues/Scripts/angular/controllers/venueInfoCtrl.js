/// <reference path="../mainApp.js" />
mainApp.controller("venueInfoCtrl", ["$scope", "getvenueinfo", "getFacilities", function ($scope, getvenueinfo, getFacilities) {
    var url = document.URL;
    var venueId = url.substring(url.lastIndexOf('/') + 1);
    $scope.Init = function () {
        getvenueinfo.getByID(venueId, function (data) {
            $scope.VenueInfo = data.Data;
        });
    }
    $scope.Init();
    $scope.GetFacilities = function () {
        $scope.Request = new Request();
        $scope.Request.Criteria = "[{Key: 'VenueID', Value: '" + venueId + "'}]";
        getFacilities.getByRequest($scope.Request.get(), function (data) {
            $scope.Facilities = data.Data;
        })
    }
    $scope.GetFacilities();
}])