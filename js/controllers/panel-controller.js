/**
 * Created by zhongchenxi on 3/31/16.
 */
app.controller("PanelController", function(){

    this.selectTab =function(setTab){
        this.tab = setTab;
    };

    this.isSelected = function (checkTab){
        return this.tab === checkTab;
    };
});