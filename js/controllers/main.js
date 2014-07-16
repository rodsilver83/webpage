var pageCtrl;

(function(){
  var page = angular.module('page',[]);

  pageCtrl = page.controller('pageController',['$scope',function($scope) {

    $scope.leftStyle={'margin-left':'18px'};
    $scope.leftPointerStyle={'margin-left':'18px'};

    var pageIndex = 0;

    this.home = function(){
      $scope.leftPointerStyle={'margin-left':'18px'}
      pageIndex = 0;
      $.fn.fullpage.moveTo(0, 0);
    };
    this.aboutme = function(){
      $scope.leftPointerStyle={'margin-left':'97px'}
      pageIndex = 1;
      $.fn.fullpage.moveTo(0, 1);
    };
    this.projects = function(){
      $scope.leftPointerStyle={'margin-left':'192px'}
      pageIndex = 2;
      $.fn.fullpage.moveTo(0, 2);
    };
    this.contact = function(){
      $scope.leftPointerStyle={'margin-left':'290px'}
      pageIndex = 3;
      $.fn.fullpage.moveTo(0, 3);
    };
    this.blog = function(){
      $scope.leftPointerStyle={'margin-left':'350px'}
    };
    $scope.movepointer = function(position){
      $scope.leftPointerStyle={'margin-left': position+'px'}
      $scope.leftStyle={'margin-left': position+'px'}
      $scope.$apply();
    };
  }]);



})();

$(document).ready(function () {
  $('#fullpage').fullpage({
    verticalCentered: false,
    resize: false,
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
      switch(slideIndex){
        case 0:
          angular.element(document.getElementById('pageController')).scope().movepointer(18);
          break;
        case 1:
          angular.element(document.getElementById('pageController')).scope().movepointer(97);
          break;
        case 2:
          angular.element(document.getElementById('pageController')).scope().movepointer(192);
          break;
        case 3:
          angular.element(document.getElementById('pageController')).scope().movepointer(290);
          break;
      }
    }
  });
});