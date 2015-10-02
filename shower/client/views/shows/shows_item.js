/**
 * Created by mkundos on 10/1/15.
 */

Template.showItem.helpers({
   domain: function(){
       var a = document.createElement('a');
       a.href = this.url;
       return a.hostname;
   }
});