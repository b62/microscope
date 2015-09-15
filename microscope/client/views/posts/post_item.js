/**
 * Created by mkundos on 9/14/2015.
 */

Template.postItem.helpers({
    domain: function(){
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});
