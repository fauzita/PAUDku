angular.module('angular-login.gallery', ['angular-login.grandfather'])
.config(function ($stateProvider) {
  $stateProvider
    .state('app.gallery', {
      url: '/gallery',
      templateUrl: 'gallery/gallery.tpl.html',
      controller: 'GalleryController'
    });
})
.controller('GalleryController', function ($scope) {
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: '/img/1.jpg',
      text: 'kegiatan awal PAUD UWATUN HASANAH'
    },
    {
      image: '/img/2.jpg'
    },
    {
      image: '/img/3.jpg'
    },
    {
      image: '/img/4.jpg'
    }
  ];
});
