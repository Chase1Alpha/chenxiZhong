/**
 * Created by zhongchenxi on 3/31/16.
 */
app.controller('ExpController', ['$scope', function($scope){
    var count = 0;

    $scope.counter = function(){

        count += 1;

        return count;
    };

    $scope.isClicked = function(count){
        if(count%2 === 1){
            return true;
        } else {
            return false;
        }
    };
}]);