/**
 * Created by zhongchenxi on 4/2/16.
 */
angular.module('myResume')
    .controller('ClimateController', ['$http', '$scope', function($http, $scope){
        $scope.climate = {};
        $http.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=648bf37441d915d5185f3e393052cbdb').success(function(data) {
            $scope.climate = data;
            console.log(data);
        });
    }])
    .directive('ClimateDirective', function(){
        return {
            restrict: 'E',
            template: 'Climate: {{climate.weather}}'
        //controller: ['$http', function($http){
        //    var climate = this;
        //    $http.get('api.openweathermap.org/data/2.5/weather?q=London').success(function(data){
        //        climate = data;
        //        console.log(climate);
        //    });
        //}],
        //controllerAs: 'climateCtrl'
        };
    });