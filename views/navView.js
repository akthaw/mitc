var navView		= Backbone.View.extend({
	tagName		: "div",
	className	: "navbar navbar-default",
	events		: {
		"click #home"	: "ShowHome",
		"click #about" 	: "ShowAbout",
		"click #service" : "ShowService",
		"click #client" : "ShowClient",
		"click #job" 	: "ShowJob",
		"click #upload"	: "ShowUpload",
		"click #contact" : "ShowContact",

	},
	ShowHome: function(){
		var newhome = new homeView();
		$('#content').html(newhome.render().el);
	},
	ShowAbout: function(){
		var newabout = new aboutView();
		$('#content').html(newabout.render().el);
	},
	ShowService: function(){
		var newservice = new serviceView();
		$('#content').html(newservice.render().el);
	},
	ShowClient: function(){
		var newclient = new clientView();
		$('#content').html(newclient.render().el);
	},
	ShowJob: function(){
		var newjob = new jobView();
		$('#content').html(newjob.render().el);
	},
	ShowUpload: function(){
		var newupload = new uploadView();
		$('#content').html(newupload.render().el);
	},
	ShowContact: function(){
		var newcontact = new contactView();
		$('#content').html(newcontact.render().el);
	},
	render		: function(){
		var data 	= {};
		this.$el.html(app.hookTemplate("nav",data))
		return this;
	}
});