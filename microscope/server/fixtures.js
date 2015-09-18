/**
 * Created by mkundos on 9/17/2015.
 */

if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Introducing Telescope',
        author: 'Sacha Greif',
        url: 'http://sachagreif.com/introducing-telescope/'
    });

    Posts.insert({
        title: 'Meteor 2',
        author: 'Tom Coleman',
        url: 'http://meteor.com'
    });

    Posts.insert({
        title: 'The Meteor Book',
        author: 'Tom Coleman',
        url: 'http://themeteorbook.com'
    });
}