/**
 * Created by zhongchenxi on 4/6/16.
 */
angular.module('myResume')
.config(function($routeProvider){
        $routeProvider
            .when('/information', {
                templateUrl: 'templates/pages/information.html',
                controller: 'InformationController',
                controllerAs: 'infoCtrl'
            })

            .when('/education', {
                templateUrl: 'templates/pages/education.html'
            })

            .when('/projects', {
                templateUrl: 'templates/pages/projects.html',
                controller: 'ProjectController',
                controllerAs: 'projectCtrl'
            })

            .when('/experiences', {
                templateUrl: 'templates/pages/experiences.html'
            })

            .when('/addinfo', {
                templateUrl: 'templates/pages/addinfo.html'
            })

            .otherwise({ redirectTo: '/information'});
    });