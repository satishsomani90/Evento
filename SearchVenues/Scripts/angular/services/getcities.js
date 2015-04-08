/// <reference path="../../angular.js" />
/// <reference path="../mainApp.js" />
mainApp.factory("getCities", function ($http, $q) {
    return {
        get: function (value, callback) {
            $http({
                url: "api/Cities",
                method: "GET",
                params: value
            }).success(callback);
        }
    }
})