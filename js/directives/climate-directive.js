/**
 * Created by zhongchenxi on 4/2/16.
 */
angular.module('myResume')
    //.controller('ClimateController', ['$http', '$scope', function($http, $scope){
    //    $scope.climate = {};
    //    $http.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=648bf37441d915d5185f3e393052cbdb').success(function(data) {
    //        $scope.climate = data;
    //
    //    });
    //}])
    .directive('ClimateDirective', function(){
        return {
            restrict: 'E',
            template: 'Location: {{climateCtrl.climate.name}} Climate: {{climate.weather[0].description}}',
            controller: ['$http', function($http){
            var climate = this;
            $http.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=648bf37441d915d5185f3e393052cbdb').success(function(data){
                climate = data;

                });
            }],
            controllerAs: 'climateCtrl'
        };
    });