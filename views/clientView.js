var clientView	= Backbone.View.extend({
	tagName		: "div",
	render		: function(){
		
		var data 	= {};
		this.$el.html(app.hookTemplate("client",data))
		return this;
	}
});