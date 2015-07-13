$.ajaxPrefilter	 (function(options, originalOptions, jqXHR){
	options.crossDomain	= {crossDomain: true};
	options.xhrFields	= {withCredentials: true};
});

var app = {};
// app.host = "http://localhost/";
// app.api = function(path){
// 	return app.host+path 
// };
app.templateCache = {};
app.loadTemplates = function(names, callback){
	var that = this;
	var load= function(index){
		var name = names[index];
		console.log("loading" + name);
		$.get("templates/" + name + ".html?cache=fasle", function(data){
			that.templateCache[name] = data;
			index++;
			if(index < names.length) 
				load(index);
			else 
				callback();
		});
	};
	load(0);
};
app.hookTemplate	= function(name, data){
	var tmpl = _.template(this.templateCache[name]);
	return tmpl(data);
}