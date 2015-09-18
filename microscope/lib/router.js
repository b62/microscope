/**
 * Created by mkundos on 9/17/2015.
 */

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function(){ return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});