var jobView	= Backbone.View.extend({
	tagName		: "div",
	render		: function(){
		var data 	= {};
		this.$el.html(app.hookTemplate("job",data))
		return this;
	}
});