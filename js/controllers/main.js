(function(){
  var page = angular.module('page',[]);
  page.controller('pageController',['$scope','$http',function($scope,$http) {

    this.left = 18;
    this.leftpointer = 18;

    this.home = function(){
      this.leftpointer =18;
      $.fn.fullpage.moveTo(0, 0);
    };
    this.aboutme = function(){
      this.leftpointer =97;
      $.fn.fullpage.moveTo(0, 1);
    };
    this.projects = function(){
      this.leftpointer =192;
      $.fn.fullpage.moveTo(0, 2);
    };
    this.blog = function(){
      this.leftpointer =273;
      $.fn.fullpage.moveTo(0, 3);
    };
    this.contact = function(){
      this.leftpointer =290;
      $.fn.fullpage.moveTo(0, 3);
    };
  }]);
})();