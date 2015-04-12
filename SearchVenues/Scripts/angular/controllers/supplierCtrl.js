/// <reference path="../mainApp.js" />
mainApp.controller("supplierCtrl", ["$scope", "supplierService", function ($scope, supplierService) {
    $scope.Init = function () {
        $scope.Request = new Request();
        supplierService.get($scope.Request.get(), function (data) {
            $scope.Suppliers = data.Data;
            console.log(data.Data);
        })
    }
    $scope.Init();
}])