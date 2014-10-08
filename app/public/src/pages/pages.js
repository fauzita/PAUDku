angular.module('angular-login.pages', [ 'angular-login.grandfather', 'ngTable', 'ui.bootstrap' ])
.config(function ($stateProvider) {
  $stateProvider
    .state('app.about', {
      url: '/about',
      templateUrl: 'pages/about/about.tpl.html',
      controller: 'AboutController',
      //accessLevel: accessLevels.admin
    })
    .state('app.admin', {
      url: '/admin',
      templateUrl: 'pages/admin.tpl.html',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.overview', {
      url: '/overview',
      views: {
        '@app.admin' :{
          templateUrl: "pages/admin/overview.tpl.html"
        }
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.akun', {
      url: '/akun',
      views: {
        '@app.admin' :{
          templateUrl: "pages/admin/akun/akun.tpl.html"
        }
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.akun.overview', {
      url: '/overview',
      views: {
        '@app.admin.akun' :{
          templateUrl: "pages/admin/akun/akun.overview.tpl.html"
        }
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.akun.overview.password', {
      url: '/pass',
      views: {
        '@app.admin.akun.overview' :{
          templateUrl: "pages/admin/akun/akun.overview.pass.tpl.html"
        }
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.akun.user', {
      url: '/user',
      views: {
        '@app.admin.akun' :{
          templateUrl: "pages/admin/akun/akun.user.tpl.html"
        }
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.overviewLembaga', {
      url: '/overviewLembaga',
      views: {
        '@app.admin' :{
          templateUrl: "pages/admin/lembaga/overviewLembaga.tpl.html"
        }
      },
      controller: 'overviewLembagaController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.overviewPendidik', {
      url: '/pendidik',
      views: {
        '@app.admin' :{
          templateUrl: "pages/admin/ptk/overviewPendidik.tpl.html"
        },
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.overviewPendidik.view', {
      url: '/view',
      views: {
        '@app.admin.overviewPendidik' :{
          templateUrl: "pages/admin/ptk/overviewPendidik.view.tpl.html"
        }
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.overviewPendidik.add', {
      url: '/add',
      views: {
        '@app.admin.overviewPendidik' :{
          templateUrl: "pages/admin/ptk/overviewPendidik.add.tpl.html"
        }
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.overviewPendidik.detail', {
      url: '/detail',
      views: {
        '@app.admin.overviewPendidik' :{
          templateUrl: "pages/admin/ptk/overviewPendidik.detail.tpl.html"
        }
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.overviewPendidik.detail.alamat', {
      url: '/alamat',
      views: {
        '@app.admin.overviewPendidik.detail' :{
          templateUrl: "pages/admin/ptk/overviewPendidik.detail.alamat.tpl.html"
        }
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.overviewPendidik.detail.pendidikan', {
      url: '/pendidikan',
      views: {
        '@app.admin.overviewPendidik.detail' :{
          templateUrl: "pages/admin/ptk/overviewPendidik.detail.pendidikan.tpl.html"
        }
      },
      controller: 'alamatPendidikCtrl',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.overviewPesertaDidik', {
      url: '/pesertaDidik',
      views: {
        '@app.admin' :{
          templateUrl: "pages/admin/peserta-didik/overviewPesertaDidik.tpl.html"
        },
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.overviewPesertaDidik.view', {
      url: '/view',
      views: {
        '@app.admin.overviewPesertaDidik' :{
          templateUrl: "pages/admin/peserta-didik/overviewPesertaDidik.view.tpl.html"
        }
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.overviewPesertaDidik.data', {
      url: '/data',
      views: {
        '@app.admin.overviewPesertaDidik' :{
          templateUrl: "pages/admin/peserta-didik/overviewPesertaDidik.data.tpl.html"
        }
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.overviewPesertaDidik.data.pesertaDidik', {
      url: '/pesertaDidik',
      views: {
        '@app.admin.overviewPesertaDidik.data' :{
          templateUrl: "pages/admin/peserta-didik/overviewPesertaDidik.data.pesertaDidik.tpl.html"
        }
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.overviewPesertaDidik.data.nilai', {
      url: '/nilai',
      views: {
        '@app.admin.overviewPesertaDidik.data' :{
          templateUrl: "pages/admin/peserta-didik/overviewPesertaDidik.data.nilai.tpl.html"
        }
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.overviewPesertaDidik.detail', {
      url: '/detail',
      views: {
        '@app.admin.overviewPesertaDidik' :{
          templateUrl: "pages/admin/peserta-didik/overviewPesertaDidik.detail.tpl.html"
        }
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.overviewPesertaDidik.detail.alamat', {
      url: '/alamat',
      views: {
        '@app.admin.overviewPesertaDidik.detail' :{
          templateUrl: "pages/admin/peserta-didik/overviewPesertaDidik.detail.alamat.tpl.html"
        }
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.overviewPesertaDidik.detail.kesehatan', {
      url: '/kesehatan',
      views: {
        '@app.admin.overviewPesertaDidik.detail' :{
          templateUrl: "pages/admin/peserta-didik/overviewPesertaDidik.detail.kesehatan.tpl.html"
        }
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.overviewPesertaDidik.detail.orangtua', {
      url: '/orangtua',
      views: {
        '@app.admin.overviewPesertaDidik.detail' :{
          templateUrl: "pages/admin/peserta-didik/overviewPesertaDidik.detail.orangtua.tpl.html"
        }
      },
      //controller: 'AdminController',
      accessLevel: accessLevels.admin
    })
    .state('app.admin.editLembaga', {
      url: '/editLembaga',
      views: {
        '@app.admin' :{
          templateUrl: "pages/admin/lembaga/editLembaga.tpl.html"
        }
      },
      controller: 'LembagaController',
      accessLevel: accessLevels.admin
    });
})
.controller('AdminController' , function ($scope ) {
  $scope.navCollapsed = true;
})
.controller('overviewLembagaController', function ($scope, $http, $filter) {
    // ajax request to ap
  $http.get('/admin/get/lembaga')
  .success(function (data ) {
    console.info('get success - ', data);
    $scope.nama_lembaga = data[0].nama_lembaga;
    $scope.nama_penyelenggara = data[0].nama_penyelenggara;
    $scope.no_ijin = data[0].no_ijin;
    $scope.alamat = data[0].alamat;
    $scope.email = data[0].email;
    $scope.telepon = data[0].telepon;
    $scope.tanggal_berdiri = $filter('date')(data[0].tanggal_berdiri,'dd-MM-yyyy');
  });
})
.controller('LembagaController' , function ($scope, $http, $timeout, $state) {
  //datepicker section
  $scope.format="dd-MM-yyyy";
  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };
  

  //POST data
  $scope.xhr = false;
  $scope.redirect = false;
  $scope.submit = function (formInstance) {
    // xhr is departing
    $scope.xhr = true;
    $http.post('/admin/post/lembaga', $scope.lembagaObj)
    .success(function (data, status, headers, config) {
      console.info('post success - ', data);
      $scope.xhr = false;
      $scope.redirect = true;
      $timeout(function () {
        $state.go('app.admin.overview');
      }, 2000);
    })
    .error(function (data, status, headers, config) {
      data.errors.forEach(function (error, index, array) {
        formInstance[error.field].$error[error.name] = true;
      });
      formInstance.$setPristine();
      console.info('post error - ', data);
      $scope.xhr = false;
    });
  };
})
.controller('PendidikController' , function ($scope, $http, $timeout, $state, ngTableParams) {
  //Datepicker section
  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };
    $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.initDate = new Date('2016-15-20');
  $scope.formats = ['dd-MM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  //Typeahead
  $scope.selected = undefined;
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getPendidik = function(val) {
    return $http.get('/admin/get/pendidik', {
      params: {
        idPeg: val,
        sensor: false
      }
    }).then(function(response){
    var idPendidik = [];
      for (var i = 0; i < response.data.length; i++) {
      idPendidik.push(response.data[i].idPeg);
    };
        return idPendidik;
    });
  };

  //POST data
  $scope.xhr = false;
  $scope.redirect = false;
  $scope.submit = function (formInstance) {
    // xhr is departing
    $scope.xhr = true;
    $http.post('/admin/post/pendidik', $scope.pendidikObj)
    .success(function (data, status, headers, config) {
      console.info('post success - ', data);
      $scope.xhr = false;
      $scope.redirect = true;
      $timeout(function () {
        $state.go('app.admin.overview');
      }, 2000);
    })
    .error(function (data, status, headers, config) {
      data.errors.forEach(function (error, index, array) {
        formInstance[error.field].$error[error.name] = true;
      });
      formInstance.$setPristine();
      console.info('post error - ', data);
      $scope.xhr = false;
    });
  };
})
.controller('alamatPendidikCtrl' , function ($scope, $http, $timeout, $state) {
  $scope.selected = undefined;
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getPendidik = function(val) {
    return $http.get('/admin/get/pendidik', {
      params: {
        idPeg: val,
        sensor: false
      }
    }).then(function(response){
    var idPendidik = [];
      for (var i = 0; i < response.data.length; i++) {
      idPendidik.push(response.data[i].idPeg);
    };
        return idPendidik;
    });
  };
  //POST data
  $scope.xhr = false;
  $scope.redirect = false;
  $scope.submit = function (formInstance) {
    // xhr is departing
    $scope.xhr = true;
    $http.post('/admin/post/alamatPendidik', $scope.pendidikObj)
    .success(function (data, status, headers, config) {
      console.info('post success - ', data);
      $scope.xhr = false;
      $scope.redirect = true;
      $timeout(function () {
        $state.go('app.admin.overviewPendidik.view');
      }, 2000);
    })
    .error(function (data, status, headers, config) {
      data.errors.forEach(function (error, index, array) {
        formInstance[error.field].$error[error.name] = true;
      });
      formInstance.$setPristine();
      console.info('post error - ', data);
      $scope.xhr = false;
    });
  };
})
.controller('pendidikanPendidikCtrl' , function ($scope, $http, $timeout, $state) {
  $scope.selected = undefined;
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getPendidik = function(val) {
    return $http.get('/admin/get/pendidik', {
      params: {
        idPeg: val,
        sensor: false
      }
    }).then(function(response){
    var idPendidik = [];
      for (var i = 0; i < response.data.length; i++) {
      idPendidik.push(response.data[i].idPeg);
    };
        return idPendidik;
    });
  };
  //POST data
  $scope.xhr = false;
  $scope.redirect = false;
  $scope.submit = function (formInstance) {
    // xhr is departing
    $scope.xhr = true;
    $http.post('/admin/post/pendidikanPendidik', $scope.pendidikObj)
    .success(function (data, status, headers, config) {
      console.info('post success - ', data);
      $scope.xhr = false;
      $scope.redirect = true;
      $timeout(function () {
        $state.go('app.admin.overviewPendidik.view');
      }, 2000);
    })
    .error(function (data, status, headers, config) {
      data.errors.forEach(function (error, index, array) {
        formInstance[error.field].$error[error.name] = true;
      });
      formInstance.$setPristine();
      console.info('post error - ', data);
      $scope.xhr = false;
    });
  };
})
.controller('PesertaDidikController' , function ($scope, $http, $timeout, $state) {
  //DatePikcer section
  $scope.format="dd-MM-yyyy";
  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };
  
  //POST data
  $scope.xhr = false;
  $scope.redirect = false;
  $scope.submit = function (formInstance) {
    // xhr is departing
    $scope.xhr = true;
    $http.post('/admin/post/pesertadidik', $scope.pesertaDidikObj)
    .success(function (data, status, headers, config) {
      console.info('post success - ', data);
      $scope.xhr = false;
      $scope.redirect = true;
      $timeout(function () {
        $state.go('app.admin.overviewPesertaDidik.view');
      }, 2000);
    })
    .error(function (data, status, headers, config) {
      data.errors.forEach(function (error, index, array) {
        formInstance[error.field].$error[error.name] = true;
      });
      formInstance.$setPristine();
      console.info('post error - ', data);
      $scope.xhr = false;
    });
  };
})
.controller('nilaiPesertaDidikCtrl' , function ($scope, $http, $timeout, $state) {
  //typeAhead
  $scope.selected = undefined;
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getPesertaDidik = function(val) {
    return $http.get('/admin/get/pesertaDidik', {
      params: {
        no_nduk: val
      }
    }).then(function(response){
    var idPesertaDidik = [];
      for (var i = 0; i < response.data.length; i++) {
      idPesertaDidik.push(response.data[i].no_induk);
    };
        return idPesertaDidik;
    });
  };
  //DatePikcer section
  $scope.format="dd-MM-yyyy";
  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };
  
  //POST data
  $scope.xhr = false;
  $scope.redirect = false;
  $scope.submit = function (formInstance) {
    // xhr is departing
    $scope.xhr = true;
    $http.post('/admin/post/nilaiPesertaDidik', $scope.pesertaDidikObj)
    .success(function (data, status, headers, config) {
      console.info('post success - ', data);
      $scope.xhr = false;
      $scope.redirect = true;
      $timeout(function () {
        $state.go('app.admin.overviewPesertaDidik.view');
      }, 2000);
    })
    .error(function (data, status, headers, config) {
      data.errors.forEach(function (error, index, array) {
        formInstance[error.field].$error[error.name] = true;
      });
      formInstance.$setPristine();
      console.info('post error - ', data);
      $scope.xhr = false;
    });
  };
})
.controller('alamatPesertaDidikCtrl' , function ($scope, $http, $timeout, $state) {
  $scope.selected = undefined;
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getPesertaDidik = function(val) {
    return $http.get('/admin/get/pesertaDidik', {
      params: {
        no_nduk: val
      }
    }).then(function(response){
    var idPesertaDidik = [];
      for (var i = 0; i < response.data.length; i++) {
      idPesertaDidik.push(response.data[i].no_induk);
    };
        return idPesertaDidik;
    });
  };
  //POST data
  $scope.xhr = false;
  $scope.redirect = false;
  $scope.submit = function (formInstance) {
    // xhr is departing
    $scope.xhr = true;
    $http.post('/admin/post/alamatPesertaDidik', $scope.pesertaDidikObj)
    .success(function (data, status, headers, config) {
      console.info('post success - ', data);
      $scope.xhr = false;
      $scope.redirect = true;
      $timeout(function () {
        $state.go('app.admin.overviewPesertaDidik.view');
      }, 2000);
    })
    .error(function (data, status, headers, config) {
      data.errors.forEach(function (error, index, array) {
        formInstance[error.field].$error[error.name] = true;
      });
      formInstance.$setPristine();
      console.info('post error - ', data);
      $scope.xhr = false;
    });
  };
})
.controller('kesehatanPesertaDidikCtrl' , function ($scope, $http, $timeout, $state) {
  $scope.selected = undefined;
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getPesertaDidik = function(val) {
    return $http.get('/admin/get/pesertaDidik', {
      params: {
        no_nduk: val
      }
    }).then(function(response){
    var idPesertaDidik = [];
      for (var i = 0; i < response.data.length; i++) {
      idPesertaDidik.push(response.data[i].no_induk);
    };
        return idPesertaDidik;
    });
  };
  //POST data
  $scope.xhr = false;
  $scope.redirect = false;
  $scope.submit = function (formInstance) {
    // xhr is departing
    $scope.xhr = true;
    $http.post('/admin/post/kesehatanPesertaDidik', $scope.pesertaDidikObj)
    .success(function (data, status, headers, config) {
      console.info('post success - ', data);
      $scope.xhr = false;
      $scope.redirect = true;
      $timeout(function () {
        $state.go('app.admin.overviewPesertaDidik.view');
      }, 2000);
    })
    .error(function (data, status, headers, config) {
      data.errors.forEach(function (error, index, array) {
        formInstance[error.field].$error[error.name] = true;
      });
      formInstance.$setPristine();
      console.info('post error - ', data);
      $scope.xhr = false;
    });
  };
})
.controller('orangTuaPesertaDidikCtrl' , function ($scope, $http, $timeout, $state) {
  //typeahead
  $scope.selected = undefined;
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getPesertaDidik = function(val) {
    return $http.get('/admin/get/pesertaDidik', {
      params: {
        no_nduk: val
      }
    }).then(function(response){
    var idPesertaDidik = [];
      for (var i = 0; i < response.data.length; i++) {
      idPesertaDidik.push(response.data[i].no_induk);
    };
        return idPesertaDidik;
    });
  };
  //POST data
  $scope.xhr = false;
  $scope.redirect = false;
  $scope.submit = function (formInstance) {
    // xhr is departing
    $scope.xhr = true;
    $http.post('/admin/post/orangTuaPesertaDidik', $scope.pesertaDidikObj)
    .success(function (data, status, headers, config) {
      console.info('post success - ', data);
      $scope.xhr = false;
      $scope.redirect = true;
      $timeout(function () {
        $state.go('app.admin.overviewPesertaDidik.view');
      }, 2000);
    })
    .error(function (data, status, headers, config) {
      data.errors.forEach(function (error, index, array) {
        formInstance[error.field].$error[error.name] = true;
      });
      formInstance.$setPristine();
      console.info('post error - ', data);
      $scope.xhr = false;
    });
  };
})
.controller('DatePickerController' , function ($scope) {

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };
  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.initDate = new Date('2016-15-20');
  $scope.formats = ['dd-MM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
})
.controller('ngTablePendidikController' , function ($scope, $http, $timeout, $filter, ngTableParams) {
  //ngTable section
  var p_selected;
  $scope.tableParams = new ngTableParams({
      page: 1,            // show first page
      count: 10,          // count per page
      filter: {
            //nama: 'M'       // initial filter
        },
      sorting: {
          name: 'asc'     // initial sorting
      }
  }, {
      total: 0,           // length of data
      getData: function($defer, params) {

          // ajax request to api
        $http.get('/admin/get/pendidik')
        .success(function (data, status, headers, config) {
          console.info('post success - ', data);
          $timeout(function () {
            total = data.length;
            // update table params
            //params.total(data.total);
            // set new data
            //$defer.resolve(data.result);
            // use build-in angular filter
            var filteredData = params.filter() ?
                    $filter('filter')(data, params.filter()) :
                    data;
            var orderedData = params.sorting() ?
                    $filter('orderBy')(filteredData, params.orderBy()) :
                    data;
            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
          },500);
        });
      },
  });
  $scope.changeSelection = function(pendidik) {
    if (p_selected)
      p_selected.$selected=false;
      p_selected=pendidik;
    };
 
})
.controller('deletePendidikCtrl' , function ($scope ) {
  //var data = $scope.p_selected;
  $scope.deleteData = function(data) {
    console.info(data);
  }

})
.controller('ngTablePesertaDidikController' , function ($scope, $http, $timeout, $filter, ngTableParams) {
  //ngTable section
  var p_selected;
  $scope.tableParams = new ngTableParams({
      page: 1,            // show first page
      count: 10,          // count per page
      sorting: {
          name: 'asc'     // initial sorting
      }
  }, {
      total: 0,           // length of data
      getData: function($defer, params) {
          // ajax request to api
        $http.get('/admin/get/pesertaDidik')
        .success(function (data, status, headers, config) {
          console.info('post success - ', data);
          $timeout(function () {
            total = data.length;
            // update table params
            //params.total(data.total);
            // set new data
            //$defer.resolve(data.result);
            // use build-in angular filter
            var filteredData = params.filter() ?
                    $filter('filter')(data, params.filter()) :
                    data;
            var orderedData = params.sorting() ?
                    $filter('orderBy')(filteredData, params.orderBy()) :
                    data;
            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
          }, 500);
        });
      }
  });
  $scope.changeSelection = function(pesertaDidik) {
    console.info(pesertaDidik);
    if (p_selected)
      p_selected.$selected=false;
      p_selected=pesertaDidik;
    }
})
.controller('akunUserCtrl' , function ($scope, $http ) {
  $scope.selected = undefined;
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getPesertaDidik = function(val) {
    return $http.get('/admin/get/pesertaDidik', {
      params: {
        no_induk: val
      }
    }).then(function(response){
    var idPesertaDidik = [];
      for (var i = 0; i < response.data.length; i++) {
      idPesertaDidik.push(response.data[i].no_induk);
    };
        return idPesertaDidik;
    });
  };
 //POST data
  $scope.xhr = false;
  $scope.redirect = false;
  $scope.submit = function (formInstance) {
    // xhr is departing
    $scope.xhr = true;
    $http.post('/registerUser', $scope.userObj)
    .success(function (data, status, headers, config) {
      $scope.xhr = false;
      $timeout(function () {
        $state.go('app.admin.akun.overview');
      }, 2000);
    });
  };


})
.controller('akunOverviewCtrl' , function ($scope, $http ) {
    // ajax request to ap
  $http.get('/user')
  .success(function (data ) {
    console.info('get success - ', data);
    $scope.user = data.name;
    $scope.role = data.userRole.title;
  });

})
.controller('akunOverviewPassCtrl' , function ($scope, $http, $timeout, $state ) {
 //POST data
  $scope.xhr = false;
  $scope.redirect = false;
  $scope.submit = function (formInstance) {
    // xhr is departing
    $scope.xhr = true;
    $http.post('/updateUser', $scope.passwordObj)
    .success(function (data, status, headers, config) {
      $scope.xhr = false;
      $timeout(function () {
        $state.go('app.admin.akun.overview');
      }, 2000);
    });
  };
  
})
.controller('AboutController' , function ($scope, $http, $timeout, $state) {
  //POST data
  $scope.xhr = false;
  $scope.redirect = false;
  $scope.submit = function (formInstance) {
    // xhr is departing
    $scope.xhr = true;
    $http.post('/about/comment', $scope.aboutObj)
    .success(function (data, status, headers, config) {
      console.info('post success - ', data);
      $scope.xhr = false;
      $scope.redirect = true;
      $timeout(function () {
        $state.go('app.home');
      }, 2000);
    })
    .error(function (data, status, headers, config) {
      data.errors.forEach(function (error, index, array) {
        formInstance[error.field].$error[error.name] = true;
      });
      formInstance.$setPristine();
      console.info('post error - ', data);
      $scope.xhr = false;
    });
  };
});