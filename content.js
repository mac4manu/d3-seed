module.exports = (function(){
	var dataset = [];
	var w = 500;
	var h = 50;
	for(var i=0;i<25;i++){
		dataset.push(Math.random()*30);
	}					
	d3.select("body").selectAll("div")
		.data(dataset)
		.enter()
		.append("div")
		.attr("class", "bar")
		.style("height", function(d) {
			var barHeight = d * 5;
			return barHeight + "px";
		});
     var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
     var circles = svg.selectAll("circle")
                 .data(dataset)
                 .enter()
                 .append("circle");
	 circles.attr("cx", function(d, i) {
		return (i * 50) + 10;
	 })
	 .attr("cy", h/2)
	 .attr("r", function(d) {
	     return d;
	 });
})();
