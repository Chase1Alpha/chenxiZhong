/**
 * Created by zhongchenxi on 4/8/16.
 */
angular.module("myResume")
    .controller("HomeController", function(){
        this.comments = [
            {
                image: "images/1.pic_hd.jpg",
                body: "Beautiful Rainbow!",
                author: "Chenxi Zhong",
                email: "111798@yahoo.com"
            },
            {
                image: "images/2.pic_hd.jpg",
                body: "Yummy Food!",
                author: "Chenxi Zhong",
                email: "111798@yahoo.com"
            }
        ];
    });