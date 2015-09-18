/**
 * Created by mkundos on 9/17/2015.
 */

Meteor.publish('posts', function(){
    return Posts.find();
});