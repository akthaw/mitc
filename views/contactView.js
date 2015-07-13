var contactView	= Backbone.View.extend({
	tagName		: "div",
	render		: function(){
		var data 	= {};
		this.$el.html(app.hookTemplate("contact",data))
		return this;
	}
});