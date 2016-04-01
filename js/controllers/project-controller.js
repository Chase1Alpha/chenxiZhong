/**
 * Created by zhongchenxi on 3/29/16.
 */
app.controller('ProjectController', ['$scope', function($scope){
    var count = 0;
    $scope.projects = [
        {
            name: 'FPGA Development',
            subname1: 'Media Player System: ',
            subname2: 'Object Tracking: ',
            description1: 'Independently designed a media player system that employs a dual-core processor and allows image processing and music display be separately controlled. This system also has a sleep mode. (Quartus 2, Verilog, C/C++)',
            description2: 'Developed a device that could capture and track the movement of objects whose color has significant difference to the background, and the movement of the object would be marked on a LCD screen on the device. '
        },
        {
            name: 'Embedded System Development',
            description: 'Developed a music player that employs UART protocol, and it allows users to create their own music or play songs by using keyboard. (C/C++)'
        },
        {
            name: 'Supercomputer Development',
            description: 'Developed a program that can be used to calculate histograms of pictures on Pyramid by using MPI and UPC. (C/C++)'
        },
        {
            name: 'Java Development',
            description: 'Designed a BeatBox program which allows users to play all kinds of instruments and create their own work of music. This program also allows users to save their work on the client-side, and allows them to share their work with others through the serve-end. (Java)'
        }
    ];

    $scope.isProjectFPGA = function(proj){
        if(proj.description.toString().length === 0){
            return true;
        } else {
            return false;
        }
    };

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