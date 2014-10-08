angular.module('angular-login.user', [ 'angular-login.grandfather','ui.bootstrap' ])
.config(function ($stateProvider) {
  $stateProvider
    .state('app.user', {
      url: '/user',
      templateUrl: 'pages/user/user.tpl.html',
      controller: 'UserController',
      accessLevel: accessLevels.user
    })
    .state('app.user.biodata', {
      url: '/biodata',
      views: {
        '@app.user' :{
          templateUrl: "pages/user/user.biodata.tpl.html"
        },
        'filters@app.user.biodata': {
          templateUrl: 'pages/user/user.biodata.filter.tpl.html',
          //controller: function($scope){ ... controller stuff just for filters view ... }
        },
        'tabledata@app.user.biodata': {
          templateUrl: 'pages/user/user.biodata.detail.tpl.html',
          //controller: function($scope){ ... controller stuff just for tabledata view ... }
        },
        'graph@app.user.biodata': {
          templateUrl: 'pages/user/user.biodata.edit.tpl.html',
          //controller: function($scope){ ... controller stuff just for graph view ... }
        },
      },
      controller: 'UserController',
      accessLevel: accessLevels.user
    })
    .state('app.user.akun', {
      url: '/akun',
      templateUrl: 'pages/user/user.akun.tpl.html',
      controller: 'UserController',
      accessLevel: accessLevels.user
    })
    .state('app.user.print', {
      url: '/print',
      templateUrl: 'pages/user/user.print.tpl.html',
      controller: 'UserController',
      accessLevel: accessLevels.user
    });
})
.controller('UserController', function ($scope) {

});