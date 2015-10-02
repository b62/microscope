/**
 * Created by mkundos on 10/1/15.
 */

if (Shows.find().count() === 0) {

    Shows.insert({
        title: 'Introducing Telescope',
        author: 'Sacha Greif',
        date: (new Date('01.01.2015')).toDateString(),
        description: 'no description',
        url: 'http://sachagreif.com/introducing-telescope/'
    });

}