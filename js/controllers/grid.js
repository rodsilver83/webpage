(function(){
  var page = angular.module('page',[]);

  page.controller('gridController',['$scope',function($scope) {
    $scope.gridWidth = 20;
    $scope.gridHeight = 20;
    $scope.containerheight = window.innerHeight - 180;
    $scope.boxes = [];

    for(var i=0; i<$scope.gridWidth; i++) {
      for(var j=0; j<$scope.gridWidth; j++) {
        var box = {X: i, Y:j, class: boxColor().classS, status: 'cell', T: i*5, L: j*5};
        $scope.boxes.push(box);
      }
    }

    $scope.zoomBox = function(box){
      if(box.X > 0 && box.Y > 0 && box.X < ($scope.gridWidth-1) && box.Y < ($scope.gridHeight-1)) {
        $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y - 1)].status = 'cellxy';

        $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y    )].status = 'cellXy';
        $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y    )].L -= 3;

        $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y + 1)].status = 'cellxy';
        $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y + 1)].L += 2.5;

        $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y - 1)].status = 'cellxY';
        $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y - 1)].T -= 3;

        $scope.boxes[(box.X * $scope.gridWidth) + (box.Y )].status = 'cellXY';
        $scope.boxes[(box.X * $scope.gridWidth) + (box.Y )].L -= 3;
        $scope.boxes[(box.X * $scope.gridWidth) + (box.Y )].T -= 3;

        $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 1)].status = 'cellxY';
        $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 1)].T -= 3;
        $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 1)].L += 2.5;

        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y - 1)].status = 'cellxy';
        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y - 1)].T += 2.5;

        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y    )].status = 'cellXy';
        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y    )].T += 2.5;
        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y    )].L -= 3;

        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y + 1)].status = 'cellxy';
        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y + 1)].T += 2.5;
        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y + 1)].L += 2.5;
      }

      /*SECOND LEVEL*/
      if(box.X > 1 && box.Y > 1 && box.X < ($scope.gridWidth-2) && box.Y < ($scope.gridHeight-2)) {
        $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y - 2)].status = 'cellxy';

        $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y - 1)].status = 'cellx2y';
        $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y - 1)].L -= 3;

        $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y    )].status = 'cellxy';

        $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y + 1)].status = 'cellxy';

        $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y + 2)].status = 'cellxy';

        $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y - 2)].status = 'cellxy2';
        $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y - 2)].T -= 3;

        $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y - 2)].status = 'cellxy4';
        $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y - 2)].T -= 4;

        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y - 2)].status = 'cellxy2';
        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y - 2)].T += 3.5;


        $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y + 2)].status = 'cellxy';

        $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 2)].status = 'cellxy';

        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y + 2)].status = 'cellxy';

        $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y - 2)].status = 'cellxy';
        $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y - 2)].T += 2.5;

        $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y - 1)].status = 'cellx2y';
        $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y - 1)].L -= 3;
        $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y - 1)].T += 2.5;

        $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y    )].status = 'cellxy';

        $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y + 1)].status = 'cellxy';

        $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y + 2)].status = 'cellxy';

      }
    }

    $scope.zoomOut = function(box){
      if(box.X > 0 && box.Y > 0 && box.X < ($scope.gridWidth-1) && box.Y < ($scope.gridHeight-1)) {
        $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y - 1)].status = 'cell';

        $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y    )].status = 'cell';
        $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y    )].L += 3;

        $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y + 1)].status = 'cell';
        $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y + 1)].L -= 2.5;

        $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y - 1)].status = 'cell';
        $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y - 1)].T += 3;

        $scope.boxes[(box.X * $scope.gridWidth) + (box.Y )].status = 'cell';
        $scope.boxes[(box.X * $scope.gridWidth) + (box.Y )].L += 3;
        $scope.boxes[(box.X * $scope.gridWidth) + (box.Y )].T += 3;

        $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 1)].status = 'cell';
        $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 1)].T += 3;
        $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 1)].L -= 2.5;

        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y - 1)].status = 'cell';
        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y - 1)].T -= 2.5;

        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y    )].status = 'cell';
        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y    )].T -= 2.5;
        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y    )].L += 3;

        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y + 1)].status = 'cell';
        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y + 1)].T -= 2.5;
        $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y + 1)].L -= 2.5;
      }
    }

  }]);

  function boxColor() {
    var random = Math.floor((Math.random() * 100) % 4 +1);
    var classS = '';
    switch (random) {
      case 1:
        classS = 'red-box';
        break;
      case 2:
        classS = 'yellow-box';
        break;
      case 3:
        classS = 'green-box';
        break;
      case 4:
        classS = 'blue-box';
        break;
    }
    return {classS: classS};
  }

})();
