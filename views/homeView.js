var homeView	= Backbone.View.extend({
	tagName		: "div",
	events		: {
		"click #about" : "ShowAbout",
		"click #viewmore"	: "ShowService",
	},
	ShowAbout: function(){
		var newabout = new aboutView();
		$('#content').html(newabout.render().el);
	},
	ShowService: function(){
		var newservice = new serviceView();
		$('#content').html(newservice.render().el);
	},
	render		: function(){
		
		var data 	= {};
		this.$el.html(app.hookTemplate("home",data))
		return this;
	}
});