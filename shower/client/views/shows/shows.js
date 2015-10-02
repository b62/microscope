/**
 * Created by mkundos on 10/1/15.
 */

var showsData = [
    {
        title: 'Introducing Telescope',
        author: 'Sacha Greif',
        date: (new Date()).toDateString(),
        url: 'http://sachagreif.com/introducing-telescope/',
        description: 'No description'
    },
    {
        title: 'Meteor',
        author: 'Tom Coleman',
        date: (new Date()).toDateString(),
        url: 'http://meteor.com',
        description: 'No description'
    },
    {
        title: 'The Meteor Book',
        author: 'Tom Coleman',
        date: (new Date()).toDateString(),
        url: 'http://themeteorbook.com',
        description: 'No description'
    }];

Template.showsList.helpers({
    shows: function(){
        return Shows.find();
    }
});