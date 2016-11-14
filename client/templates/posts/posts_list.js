//dummy data
var postsData =[
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/Introducing-telescope'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  }
];
//assign the following helper to postsList
Template.postsList.helpers({
  //old data using local json
  //posts : postsData
  posts: function(){
    return Posts.find();
  }
});