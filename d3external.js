var d3 = require("d3");
var jsdom = require('jsdom');

exports.d3Construct = function(callback) {
    const { JSDOM } = jsdom;
    JSDOM.fromFile("./public/index.html").then(dom => {
        var circleEl = dom.window.document.querySelector('#dataviz-container');
        var body = dom.window.document.querySelector('body');

        //Create just two circles
        var circleId = 'a2324';
        d3.select(circleEl).append('svg:svg')
                .attr('width', 600)
                .attr('height', 300)
                .append('circle')
                .attr('cx', 50)
                .attr('cy', 50)
                .attr('r', 40)
                .attr('fill', '#69b3a2')
                .attr('id', circleId);
        
        var circleEl2 = dom.window.document.querySelector(".target");
        d3.select(circleEl2).attr('stroke-width', 8).attr('opacity', 0);
        
                var clientScript2 = "d3.select('.target').transition().delay(1000).attr('opacity', 1);";
                var clientScript = "d3.select('#" + circleId + "').transition().delay(1000).attr('fill', '#f9af26');";
        

        //Create a visual area with circles
        var elem3 = dom.window.document.querySelector('#dataviz_area');
        var svg3 = d3.select(elem3);
        svg3.append('circle')
                        .attr('cx', 2)
                        .attr('cy', 2)
                        .attr('r', 40)
                        .style("fill", "blue");
        svg3.append('circle')
            .attr('cx', 140)
            .attr('cy', 70)
            .attr('r', 40)
            .style("fill", "red");
        svg3.append('circle')
            .attr('cx', 300)
            .attr('cy', 100)
            .attr('r', 40)
            .style("fill", "green");

                //append the script to the page's body
                d3.select(body).append('script').html(clientScript).html(clientScript2);
                callback(dom);

        
     });
     
 }




