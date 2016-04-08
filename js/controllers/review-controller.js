/**
 * Created by zhongchenxi on 4/1/16.
 */
app.controller("ReviewController", function(){
    this.review= {};

    this.addReview = function(product){
        product.review.push(this.review);
        this.review = {};
    };
});