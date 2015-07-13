var uploadView	= Backbone.View.extend({
	tagName		: "div",
	render		: function(){
		var data 	= {};
		this.$el.html(app.hookTemplate("upload",data))
		return this;
	}
});