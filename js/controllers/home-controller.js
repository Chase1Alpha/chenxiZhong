/**
 * Created by zhongchenxi on 4/8/16.
 */
angular.module("myResume")
    .controller("HomeController", function(){
        this.blogs = [
            {
                id: 0,
                image: "images/1.pic_hd.jpg",
                title: "Beautiful Rainbow!",
                author: "Chenxi Zhong",
                email: "111798@yahoo.com",
                reviews: []
            },
            {
                id: 1,
                image: "images/2.pic_hd.jpg",
                title: "Yummy Food!",
                author: "Chenxi Zhong",
                email: "111798@yahoo.com",
                reviews: []
            }
        ];


        this.review = {};

        this.addReview = function (product){
            product.push(this.review);
            this.review = {};
        }

    });

