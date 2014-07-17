(function(){
  var page = angular.module('page',[]);

  page.controller('pageController',['$scope','$timeout',function($scope,$timeout) {

    $scope.leftStyle={'margin-left':'18px'};
    $scope.leftPointerStyle={'margin-left':'18px'};

    clickControl = true;

    $scope.home = function(){
      clickControl = false;
      $scope.movepointer(18,0);
    };
    $scope.aboutme = function(){
      clickControl = false;
      $scope.movepointer(97,1);
    };
    $scope.projects = function(){
      clickControl = false;
      $scope.movepointer(192,2);
    };
    this.contact = function(){
      clickControl = false;
      $scope.movepointer(290,3);
    };
    this.blog = function(){
      $scope.leftPointerStyle={'margin-left':'367px'}
    };
    $scope.movepointer = function(position,index){
      console.log("P: "+position+" I: "+index);
      if(index != -1){
        $scope.leftPointerStyle={'margin-left': position+'px'};
        $scope.leftStyle={'margin-left': position+'px'};
        $.fn.fullpage.moveTo(0, index);
        clickControl = true;
        //$scope.$apply();
      }else{
        if(clickControl) {
          $scope.leftPointerStyle = {'margin-left': position + 'px'};
          $scope.$apply();
          $timeout(function () {
            $scope.leftStyle = {'margin-left': position + 'px'};
            $scope.$apply();
          }, 150);
        }

      }

    };
  }]);
})();

$(document).ready(function () {
  $('#fullpage').fullpage({
    verticalCentered: false,
    resize: false,
    loopHorizontal: false,
    onSlideLeave: function(anchorLink, index, slideIndex, direction){
      if(direction === 'left')
        slideIndex--;
      if(direction === 'right')
        slideIndex++;
      if(slideIndex < 0)
        slideIndex = 3;
      if(slideIndex > 3)
        slideIndex = 0;
      console.log("SI: "+slideIndex);
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