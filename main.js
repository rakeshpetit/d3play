var svg = d3.select('#chart-area').append('svg')
    .attr('width', 400)
    .attr('height', 400);

var circle = svg.append('circle')
    .attr('cx', 200)
    .attr('cy', 200)
    .attr('r', 100)
    .attr('fill', 'yellow');

var rect = svg.append('rect')
    .attr('x', 200)
    .attr('y', 100)
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', 'gray');