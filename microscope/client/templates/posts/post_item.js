Template.postItem.helpers({
	domain: function(){
    //each item in posts becomes "this"
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
	}
});