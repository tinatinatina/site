var angApp = angular.module('angApp', [
  'ngRoute']
);

// angApp.factory('getRequestParams',
// }]);


angApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/homepage.html',
        controller: 'homeCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'blogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

angApp.controller('homeCtrl', ['$scope', function($scope){}]);
angApp.controller('blogCtrl', ['$scope', function($scope){}]);