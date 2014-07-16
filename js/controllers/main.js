(function(){
  var page = angular.module('page',[]);

  page.controller('pageController',['$scope','$timeout',function($scope,$timeout) {

    $scope.leftStyle={'margin-left':'18px'};
    $scope.leftPointerStyle={'margin-left':'18px'};

    var pageIndex = 0;

    $scope.home = function(){
      $scope.movepointer(18,0);
      pageIndex = 0;
    };
    $scope.aboutme = function(){
      $scope.leftPointerStyle={'margin-left':'97px'}
      pageIndex = 1;
      $.fn.fullpage.moveTo(0, 1);
    };
    $scope.projects = function(){
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
    $scope.movepointer = function(position,index){
      $scope.leftPointerStyle={'margin-left': position+'px'}
      if(index >= 0){
        $.fn.fullpage.moveTo(0, index);
      }else {
        $scope.$apply();
      }

      $timeout(function(){
        $scope.leftStyle={'margin-left': position+'px'}
        if(index >= 0){
          $.fn.fullpage.moveTo(0, index);
        }else {
          $scope.$apply();
        }
      },100);
    };
  }]);



})();

$(document).ready(function () {
  $('#fullpage').fullpage({
    verticalCentered: false,
    resize: false,
    onSlideLeave: function(anchorLink, index, slideIndex, direction){
      console.log(direction);
      if(direction === 'left')
        slideIndex--;
      if(direction === 'right')
        slideIndex++;
      if(slideIndex < 0)
        slideIndex = 3;
      if(slideIndex > 3)
        slideIndex = 0;
      switch(slideIndex){
        case 0:
          angular.element(document.getElementById('pageController')).scope().movepointer(18,-1);
          break;
        case 1:
          angular.element(document.getElementById('pageController')).scope().movepointer(97,-1);
          break;
        case 2:
          angular.element(document.getElementById('pageController')).scope().movepointer(192,-1);
          break;
        case 3:
          angular.element(document.getElementById('pageController')).scope().movepointer(290,-1);
          break;
      }
    }
  });
});