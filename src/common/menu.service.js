(function () {
"use strict";

  angular.module('common')
  .service('MenuService', MenuService);


  MenuService.$inject = ['$http', 'ApiPath', 'ApiMenuPath'];
  function MenuService($http, ApiPath, ApiMenuPath) {
    var service = this;

    service.getCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };

    service.validateShortNameMenu = function(name) {
      return $http
        .get(ApiMenuPath + '/menu_items/'+ name + '.json')
        .then(function (response) {
          return response.data;
        });
    };

    service.setUser = function(data) {
      service.user = data;
    };

    service.getUser = function() {
      return service.user;
    };


    service.getMenuItems = function (category) {
      var config = {};
      if (category) {
        config.params = {'category': category};
      }

      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
        return response.data;
      });
    };

  }
})();
