(function(){
  var page = angular.module('page',[]);

  page.controller('pageController',['$scope','$timeout',function($scope,$timeout) {

    $scope.leftStyle={'margin-left':'18px'};
    $scope.leftPointerStyle={'margin-left':'18px'};
    $scope.navbarStyle={'background-color':'#f35f1f'};

    var borderColor = "#143170";

    clickControl = true;

    $scope.home = function(){
      clickControl = false;
      borderColor = "#970F01";
      $scope.navbarStyle = {'background-color':'#F35F1F','border-top':'3px solid #970F01 !important'};
      $scope.movepointer(18,0);
    };
    $scope.aboutme = function(){
      clickControl = false;
      borderColor = "#000000";
      $scope.navbarStyle = {'background-color':'#333333','border-top':'3px solid #000000','border-color':'#000000'};
      $scope.movepointer(97,1);
    };
    $scope.projects = function(){
      clickControl = false;
      borderColor = "#143170";
      $scope.navbarStyle = {'background-color':'#204EB2','border-top':'3px solid #143170','border-color':'#143170'};
      $scope.movepointer(170,2);
    };
    $scope.contact = function(){
      clickControl = false;
      borderColor = "#004F03";
      $scope.navbarStyle = {'background-color':'#007A08','border-top':'3px solid #004F03','border-color':'#004F03'};
      $scope.movepointer(243,3);
    };
    $scope.blog = function(){
      clickControl = false;
      borderColor = "#004f03";
      $scope.navbarStyle = {'background-color':'#007a08','border-top':'3px solid #004f03','border-color':'#004f03'};
      $scope.movepointer(320,4);
    };
    $scope.movepointer = function(position,index){
      if(index != -1){
        $scope.leftPointerStyle={'margin-left': position+'px','border-color':borderColor+' transparent transparent'};
        $scope.leftStyle={'margin-left': position+'px'};
        $.fn.fullpage.moveTo(0, index);
        clickControl = true;
        //$scope.$apply();
      }else{
        if(clickControl) {

          switch(position){
            case 18:
              borderColor = "#970F01";
              $scope.navbarStyle = {'background-color':'#F35F1F','border-top':'3px solid #970F01 !important'};
              break;
            case 97:
              borderColor = "#000000";
              $scope.navbarStyle = {'background-color':'#333333','border-top':'3px solid #000000','border-color':'#000000'};
              break;
            case 170:
              borderColor = "#143170";
              $scope.navbarStyle = {'background-color':'#204EB2','border-top':'3px solid #143170','border-color':'#143170'};
              break;
            case 243:
              borderColor = "#005B06";
              $scope.navbarStyle = {'background-color':'#007A08','border-top':'3px solid #005B06','border-color':'#005B06'};
              break;
          }

          $scope.leftPointerStyle = {'margin-left': position + 'px','border-color':borderColor+' transparent transparent'};
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