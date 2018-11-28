var data = [25, 20, 10, 12, 15];

var svg = d3.select('#chart-area').append('svg')
    .attr('width', 800)
    .attr('height', 800);

var circles = svg.selectAll('circle').data(data);

circles.enter().append('circle')
    .attr('cx', (d, i) => {
        return (i * 150) + 100;
    })
    .attr('cy', 200)
    .attr('r', (d) => {
        return d * 2;
    })
    .attr('fill', 'red');