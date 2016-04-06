/**
 * Created by zhongchenxi on 3/29/16.
 */
angular.module("myResume", ["hc.marked"])
    .factory('data', ['$http', function($http){
        return {
            getResumeData: function() {
                var url = 'data/projects.json';
                return $http.get(url);
            }
        }
    }])
    .controller('resumeCtrl', ['$scope', '$window', 'data', function($scope, $window, data){
        $scope.type = 'Dendrogram';
        $scope.resumeData = '';

        $window.addEventListener('resize', function(){
            $scope.$broadcast('windowResize');
        });

        data.getResumeData()
            .success(function(res){
                if(res.error){
                    throw new Error(res.message);
                } else {
                    $scope.resumeData = res;
                }
            });
    }
    ])
    .directive('resumeList', ['data', '$window', 'marked', function(data, $window, marked){

        var link = function($scope, $el, $attrs){

            var radius = 1200 / 2;

            var cluster = d3.layout.cluster()
                .size([360, radius - 120]);

            var diagonal = d3.svg.diagonal.radial()
                .projection(function(d){
                    return [d.y, d.x / 180 * Math.PI];
                });

            var svg = d3.select($el[0]).append("svg")
                .attr("width", document.documentElement.clientWidth)
                .attr("height", document.documentElement.clientHeight - 5)
                .call(
                    d3.behavior.zoom().scaleExtent([0.6, 3]).on("zoom", zoom)
                );

            var g = svg.append("g")
                .attr("transform", "translate(" + 100 + "," + 100 + ")");

            function zoom () {
                g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
            }

            var update = function(){
                if($scope.resumeData === '') return;

                var data = $scope.resumeData;

                var nodes = cluster.nodes(data);

                var link = g.selectAll("path.link")
                    .data(cluster.links(nodes))
                    .enter().append("path")
                    .attr("class", "link")
                    .attr("d", diagonal);

                var node = g.selectAll("g.node")
                    .data(nodes)
                    .enter().append("g")
                    .attr("class", "node")
                    .attr("transform", function(d){
                        return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")";
                    });

                node.append("circle")
                    .attr("r", 4.5);

                node.append("text")
                    .attr("dy", ".31em")
                    .attr("text-anchor", function(d){
                        return d.x < 180 ? "start" : "end";
                    })
                    .attr("transform", function(d){
                        return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"
                    })
                    .text(function(d){
                        return $(marked(d.name)).text();
                    })
                    .attr("fill", "#000")
                    .on("click", function(d){

                        d3.select("#tooltip")
                            .style("left", 10 + "px")
                            .style("top", 10 + "px");

                        $("#name").html(marked(d.name));

                        d3.select("#tooltip").classed("hidden", false);
                    });
           };

            $scope.$watch('resumeData', update);
        };
        //var out = "";
        //
        //for (var key in data.resumeData){
        //    out += '<h2 ng-controller="resumeCtrl">' + key + '</h2><br>';
        //}
        //console.log(out);
        //document.getElementById("id0").innerHTML = '<h2 ng-controller="resumeCtrl">{{resumeData.name}}</h2><br>"';

        return {
            restrict: 'E',
            template: '<div></div>',
            replace: true,
            link: link
        };
    }]);