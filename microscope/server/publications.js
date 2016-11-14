Meteor.publish('posts', function(){
  //use additional flagg to mark content that may be expliced
	//return Posts.find({flagged: false});
  return Posts.find();
});