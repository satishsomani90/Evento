/// <reference path="../mainApp.js" />
mainApp.controller("indexController", ["$scope", "getCities", function ($scope, getCities) {
    $scope.GetCity = function (value) {
        $scope.Request = new Request();
        $scope.Request.Criteria = "[{Key: 'Text', Value: '"+value+"'}]",
        getCities.get($scope.Request.get(), function(callback) {
            $scope.Cities = callback.Data;
        })
    }
}])