var	appView = Backbone.View.extend({
	el		: "#app",
	initialize	: function(){
		this.render();
	},
	render 		: function(){
		var nav	= new navView();
		$("#nav").html(nav.render().el);
		var home = new homeView();
		$("#content").html(home.render().el);
		var footer = new footerView();
		$("#footer").html(footer.render().el);
		
		return this;
	}
});