/**
 * Created by mkundos on 10/1/15.
 */

Meteor.publish('shows', function(){
    return Shows.find({}, { fields: {
        description: false,
    }});
})