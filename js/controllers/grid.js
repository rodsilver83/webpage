(function(){
  var page = angular.module('page',[]);

  page.controller('gridController',['$scope',function($scope) {
    $scope.gridWidth = 20;
    $scope.gridHeight = 20;
    $scope.containerheight = window.innerHeight - 180;
    $scope.boxes = [];
    $scope.bigBox = false;
    $scope.openBox = false;

    for(var i=0; i<$scope.gridWidth; i++) {
      for(var j=0; j<$scope.gridWidth; j++) {
        var boxcolor = boxColor();
        var box = {X: i, Y:j, class: boxcolor.classS,text: boxcolor.text, status: 'cell', T: i*5, L: j*5};
        $scope.boxes.push(box);
      }
    }

    function logo(){
      for(var i= 1; i<$scope.gridWidth-1; i++){
        $scope.boxes[(i * $scope.gridWidth) + 1].class += ' black-box';
        $scope.boxes[(1 * $scope.gridWidth) + i].class += ' black-box';
        $scope.boxes[(($scope.gridHeight-2) * $scope.gridWidth) + i].class += ' black-box';
        $scope.boxes[(i * $scope.gridWidth) + ($scope.gridHeight-2)].class += ' black-box';
      }

      for(var i= 3; i<17; i++) {
        $scope.boxes[(i * $scope.gridWidth) + 3].class += ' black-box';
      }
      for(var i= 3; i<9; i++) {
        $scope.boxes[(3 * $scope.gridWidth) + i].class += ' black-box';
      }
      for(var i= 4; i<9; i++) {
        $scope.boxes[(i * $scope.gridWidth) + 9].class += ' black-box';
      }
      for(var i= 3; i<9; i++) {
        $scope.boxes[(9 * $scope.gridWidth) + i].class += ' black-box';
      }
        $scope.boxes[(10 * $scope.gridWidth) + 6].class += ' black-box';
        $scope.boxes[(10 * $scope.gridWidth) + 7].class += ' black-box';
        $scope.boxes[(11 * $scope.gridWidth) + 7].class += ' black-box';
        $scope.boxes[(11 * $scope.gridWidth) + 8].class += ' black-box';
        $scope.boxes[(12 * $scope.gridWidth) + 8].class += ' black-box';
        $scope.boxes[(13 * $scope.gridWidth) + 8].class += ' black-box';
        $scope.boxes[(13 * $scope.gridWidth) + 9].class += ' black-box';
        $scope.boxes[(14 * $scope.gridWidth) + 9].class += ' black-box';
        $scope.boxes[(15 * $scope.gridWidth) + 9].class += ' black-box';
        $scope.boxes[(16 * $scope.gridWidth) + 9].class += ' black-box';

        $scope.boxes[(3 * $scope.gridWidth) + 12].class += ' black-box';
        $scope.boxes[(3 * $scope.gridWidth) + 13].class += ' black-box';
        $scope.boxes[(3 * $scope.gridWidth) + 14].class += ' black-box';
        $scope.boxes[(3 * $scope.gridWidth) + 15].class += ' black-box';
        $scope.boxes[(4 * $scope.gridWidth) + 16].class += ' black-box';
        $scope.boxes[(4 * $scope.gridWidth) + 11].class += ' black-box';
        $scope.boxes[(5 * $scope.gridWidth) + 11].class += ' black-box';
        $scope.boxes[(6 * $scope.gridWidth) + 11].class += ' black-box';
        $scope.boxes[(7 * $scope.gridWidth) + 11].class += ' black-box';
        $scope.boxes[(8 * $scope.gridWidth) + 11].class += ' black-box';
        $scope.boxes[(9 * $scope.gridWidth) + 12].class += ' black-box';
        $scope.boxes[(9 * $scope.gridWidth) + 13].class += ' black-box';
        $scope.boxes[(9 * $scope.gridWidth) + 14].class += ' black-box';
        $scope.boxes[(9 * $scope.gridWidth) + 15].class += ' black-box';
        $scope.boxes[(10 * $scope.gridWidth) + 16].class += ' black-box';
        $scope.boxes[(11 * $scope.gridWidth) + 16].class += ' black-box';
        $scope.boxes[(12 * $scope.gridWidth) + 16].class += ' black-box';
        $scope.boxes[(13 * $scope.gridWidth) + 16].class += ' black-box';
        $scope.boxes[(14 * $scope.gridWidth) + 16].class += ' black-box';
        $scope.boxes[(15 * $scope.gridWidth) + 16].class += ' black-box';
        $scope.boxes[(16 * $scope.gridWidth) + 12].class += ' black-box';
        $scope.boxes[(16 * $scope.gridWidth) + 13].class += ' black-box';
        $scope.boxes[(16 * $scope.gridWidth) + 14].class += ' black-box';
        $scope.boxes[(16 * $scope.gridWidth) + 15].class += ' black-box';
        $scope.boxes[(15 * $scope.gridWidth) + 11].class += ' black-box';
        $scope.boxes[(5 * $scope.gridWidth) + 16].class += ' black-box';
        $scope.boxes[(14 * $scope.gridWidth) + 11].class += ' black-box';


    }

    $scope.showBox = function(box){
      if($scope.bigBox == box){
        $scope.openBox = true;
        $scope.zoomOutBigBox(box);
      }else {
        $scope.openBox = true;
        $scope.bigBox = box;
        if (box.X > 0 && box.Y > 0 && box.X < ($scope.gridWidth - 1) && box.Y < ($scope.gridHeight - 1)) {
        }

        //SECOND LEVEL
        if (box.X > 1 && box.Y > 1 && box.X < ($scope.gridWidth - 2) && box.Y < ($scope.gridHeight - 2)) {
          //FIRSTLEVEL
          $scope.boxes[((box.X) * $scope.gridWidth) + (box.Y)].status = 'showBox';
          $scope.boxes[((box.X) * $scope.gridWidth) + (box.Y)].T = 5;
          $scope.boxes[((box.X) * $scope.gridWidth) + (box.Y)].L = 5;
        }
      }

    }

    $scope.zoomOut = function(box){
      if($scope.bigBox != box) {
        if (box.X > 0 && box.Y > 0 && box.X < ($scope.gridWidth - 1) && box.Y < ($scope.gridHeight - 1)) {
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

        /*SECOND LEVEL*/
        if (box.X > 1 && box.Y > 1 && box.X < ($scope.gridWidth - 2) && box.Y < ($scope.gridHeight - 2)) {
          //FIRSTLEVEL
          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y - 1)].T += 3;
          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y - 1)].L += 3;

          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y - 1)].L += 3;
          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y - 1)].T -= 3;

          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y + 1)].T += 3;
          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y + 1)].L -= 3;

          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y + 1)].T -= 3;
          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y + 1)].L -= 3;

          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y    )].status = 'cell';
          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y    )].T += 3;
          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y    )].L += 3;

          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y    )].status = 'cell';
          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y    )].T -= 3;
          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y    )].L += 3;

          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y - 1)].status = 'cell';
          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y - 1)].L += 3;
          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y - 1)].T += 3;

          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 1)].status = 'cell';
          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 1)].L -= 3;
          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 1)].T += 3;

          if ($scope.openBox) {
            $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y    )].status = 'cell';
            $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y    )].T = box.X * 5;
            $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y    )].L = box.Y * 5;
            $scope.openBox = false;
          } else {
            $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y    )].status = 'cell';
            $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y    )].T += 3;
            $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y    )].L += 3;
          }
          //SECOND LEVEL
          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y - 2)].status = 'cell';

          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y - 1)].status = 'cell';
          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y - 1)].L += 3;

          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y    )].status = 'cell';
          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y    )].L += 4;

          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y + 1)].status = 'cell';
          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y + 1)].L -= 3.5;

          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y + 2)].status = 'cell';
          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y + 2)].L -= 2.5;


          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y - 2)].status = 'cell';
          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y - 2)].T += 3;

          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y - 2)].status = 'cell';
          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y - 2)].T += 4;

          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y - 2)].status = 'cell';
          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y - 2)].T -= 3.5;


          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y + 2)].status = 'cell';
          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y + 2)].L -= 2.5;
          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y + 2)].T += 3;

          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 2)].status = 'cell';
          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 2)].L -= 2.5;
          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 2)].T += 4;

          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y + 2)].status = 'cell';
          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y + 2)].L -= 2.5;
          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y + 2)].T -= 3.5;

          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y - 2)].status = 'cell';
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y - 2)].T -= 2.5;

          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y - 1)].status = 'cell';
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y - 1)].L += 3;
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y - 1)].T -= 2.5;

          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y    )].status = 'cell';
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y    )].T -= 2.5;
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y    )].L += 4;

          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y + 1)].status = 'cell';
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y + 1)].L -= 3.5;
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y + 1)].T -= 2.5;

          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y + 2)].status = 'cell';
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y + 2)].L -= 2.5;
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y + 2)].T -= 2.5;

        }
      }
    }

    $scope.zoomOutBigBox = function(box){
      for(var i=box.X - 2; i<= box.X + 2; i++) {
        for(var j=box.Y - 2; j<= box.Y + 2; j++) {
          $scope.boxes[((i) * $scope.gridWidth) + (j)].T = i*5 ;
          $scope.boxes[((i) * $scope.gridWidth) + (j)].L = j*5 ;
          $scope.boxes[((i) * $scope.gridWidth) + (j)].status = 'cell' ;
        }
      }
    }

    $scope.zoomBox = function(box){
      if($scope.bigBox != box) {
        $scope.bigBox = false;
        if (box.X > 0 && box.Y > 0 && box.X < ($scope.gridWidth - 1) && box.Y < ($scope.gridHeight - 1)) {
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
        if (box.X > 1 && box.Y > 1 && box.X < ($scope.gridWidth - 2) && box.Y < ($scope.gridHeight - 2)) {
          //FIRSTLEVEL
          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y - 1)].T -= 3;
          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y - 1)].L -= 3;

          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y - 1)].L -= 3;
          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y - 1)].T += 3;

          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y + 1)].T -= 3;
          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y + 1)].L += 3;

          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y + 1)].T += 3;
          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y + 1)].L += 3;

          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y    )].status = 'cellx6y';
          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y    )].T -= 3;
          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y    )].L -= 3;

          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y    )].status = 'cellx6y';
          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y    )].T += 3;
          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y    )].L -= 3;

          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y - 1)].status = 'cellxy6';
          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y - 1)].L -= 3;
          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y - 1)].T -= 3;

          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 1)].status = 'cellxy6';
          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 1)].L += 3;
          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 1)].T -= 3;

          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y    )].status = 'cellX2Y2';
          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y    )].T -= 3;
          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y    )].L -= 3;
          //SECOND LEVEL
          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y - 2)].status = 'cellxy';

          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y - 1)].status = 'cellx2y';
          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y - 1)].L -= 3;

          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y    )].status = 'cellx4y';
          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y    )].L -= 4;

          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y + 1)].status = 'cellx2y';
          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y + 1)].L += 3.5;

          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y + 2)].status = 'cellxy';
          $scope.boxes[((box.X - 2) * $scope.gridWidth) + (box.Y + 2)].L += 2.5;


          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y - 2)].status = 'cellxy2';
          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y - 2)].T -= 3;

          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y - 2)].status = 'cellxy4';
          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y - 2)].T -= 4;

          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y - 2)].status = 'cellxy2';
          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y - 2)].T += 3.5;


          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y + 2)].status = 'cellxy2';
          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y + 2)].L += 2.5;
          $scope.boxes[((box.X - 1) * $scope.gridWidth) + (box.Y + 2)].T -= 3;

          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 2)].status = 'cellxy4';
          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 2)].L += 2.5;
          $scope.boxes[((box.X    ) * $scope.gridWidth) + (box.Y + 2)].T -= 4;

          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y + 2)].status = 'cellxy2';
          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y + 2)].L += 2.5;
          $scope.boxes[((box.X + 1) * $scope.gridWidth) + (box.Y + 2)].T += 3.5;

          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y - 2)].status = 'cellxy';
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y - 2)].T += 2.5;

          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y - 1)].status = 'cellx2y';
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y - 1)].L -= 3;
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y - 1)].T += 2.5;

          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y    )].status = 'cellx4y';
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y    )].T += 2.5;
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y    )].L -= 4;

          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y + 1)].status = 'cellx2y';
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y + 1)].L += 3.5;
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y + 1)].T += 2.5;

          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y + 2)].status = 'cellxy';
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y + 2)].L += 2.5;
          $scope.boxes[((box.X + 2) * $scope.gridWidth) + (box.Y + 2)].T += 2.5;

        }
      }
    }

  }]).directive("pageContent",function(){
    return {
      restrict: 'E',
      scope: {
        box: '='
      },
      templateUrl: pageTemplates
    }
  });

  function pageTemplates(tElement, tAttrs){
    return 'template.html';
  }

  function boxColor() {
    var random = Math.floor((Math.random() * 100) % 9 +1);
    var classS = '';
    var text = '';
    switch (random) {
      case 1:
        classS = 'red-box';
          text = 'ABOUT ME';
        break;
      case 2:
        classS = 'yellow-box';
          text = 'Amarillo';
        break;
      case 3:
        classS = 'green-box';
          text = 'VERDE';
        break;
      case 4:
        classS = 'blue-box';
          text = 'AZUL';
        break;
      case 5:
        classS = 'dark-blue-box';
          text = 'MARINO';
        break;
      case 6:
        classS = 'dark-yellow-box';
          text = 'ORO';
        break;
      case 7:
        classS = 'dark-green-box';
          text = 'PINO';
        break;
      case 8:
        classS = 'dark-red-box';
          text = 'VINO';
        break;
      case 9:
        classS = 'purple-box';
          text = 'MORADO';
        break;
    }
    return {classS: classS,text: text};
  }

})();
