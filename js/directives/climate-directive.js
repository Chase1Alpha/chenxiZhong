/**
 * Created by zhongchenxi on 4/2/16.
 */
app.directive('ClimateDirective', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/climate.html',
        controller: ['$http', function($http){
            var climate = this;
            $http.get('api.openweathermap.org/data/2.5/weather?q=London').success(function(data){
               climate = data;
            });
        }],
        controllerAs: 'climateCtrl'
    };
});