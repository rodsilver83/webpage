(function(){
  var page = angular.module('page',[]);
  var randomSet = Math.floor((Math.random() * 100) % 2 +1);

  page.controller('gridController',['$scope',function($scope) {
    $scope.gridWidth = 20;
    $scope.gridHeight = 20;
    $scope.containerheight = window.innerHeight - 180;
    $scope.boxes = [];
    $scope.bigBox = false;
    $scope.openBox = false;
    $scope.navigator = mobileCheck();

    function mobileCheck() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    }

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

  }]).directive("pageContent",['$compile', '$http', '$templateCache',
    function($compile,$http,$templateCache){

      var getTemplate = function(contentType) {
        var templateLoader,
          baseUrl = '/',
          templateMap = {
            aboutMe: 'aboutMe.html',
            Experience: 'experience.html',
            skills: 'skills.html',
            CV: 'cv.html'
          };

        if(templateMap[contentType])
          var templateUrl = baseUrl + templateMap[contentType];
        else
          var templateUrl = baseUrl + 'template.html';
        templateLoader = $http.get(templateUrl, {cache: $templateCache});

        return templateLoader;

      }

      var linker = function(scope, element, attrs) {

        var loader = getTemplate(scope.type);

        var promise = loader.success(function(html) {
          element.html(html);
        }).then(function (response) {
          element.replaceWith($compile(element.html())(scope));
        });
      }

      return {
        restrict: 'E',
        scope: {
          type: '='
        },
        link: linker

      }
  }]);



  function boxColor() {
    var random = Math.floor((Math.random() * 100) % 4 +1);
    var classS = '';
    var text = '';

    switch(randomSet){
      case 1:
        switch (random) {
          case 1:
            classS = 'dark-blue-box';
              text = 'aboutMe';
            break;
          case 2:
            classS = 'green-box';
              text = 'skills';
            break;
          case 3:
            classS = 'blue-box';
              text = 'Experience';
            break;
          case 4:
            classS = 'purple-box';
              text = 'CV';
            break;
        }
        break;
      case 2:
        switch (random) {
          case 1:
            classS = 'yellow-box';
            text = 'aboutMe';
            break;
          case 2:
            classS = 'red-box';
            text = 'skills';
            break;
          case 3:
            classS = 'dark-yellow-box';
            text = 'Experience';
            break;
          /*
           case 4:
           classS = 'dark-green-box';
           text = 'PINO';
           break;
           */
          case 4:
            classS = 'dark-red-box';
            text = 'CV';
            break;
        }
        break;
    }
    return {classS: classS,text: text};
  }

})();
