/// <reference path="../mainApp.js" />
mainApp.factory("supplierService", function ($http) {
    return {
        get: function (request, callback) {
            $http({
                url: "/api/Supplier",
                method: "GET",
                params: request
            }).success(callback);
        }
    }
})