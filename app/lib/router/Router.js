/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.route('/home', {
  name: 'Home'
});

Router.route('/studentsparents', {
  name: 'StudentsParents'
});

Router.route('/facultystaff', {
  name: 'FacultyStaff'
});

Router.route('/alumni', {
  name: 'AlumniFriends'
});

Router.route('/contactus', {
  name: 'ContactUs'
});

Router.route('/stuff/:_id', {
  name: 'EditStuff',
  data: function() { return Stuff.findOne(this.params._id); }
});
