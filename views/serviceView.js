var serviceView	= Backbone.View.extend({
	tagName		: "div",
	render		: function(){
		
		var data 	= {};
		this.$el.html(app.hookTemplate("service",data))
		return this;
	}
});