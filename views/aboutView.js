var aboutView	= Backbone.View.extend({
	tagName		: "div",
	// className	: "navbar navbar-default",
	render		: function(){
		// var user = app.getUserInfo();
		var data 	= {};
		// if (user) {
		// 	data = {auth: true};
		// } else{
		// 	data = {auth: false};	
		// };
		this.$el.html(app.hookTemplate("about",data))
		return this;
	}
});