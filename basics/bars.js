d3.json('basics/buildings.json').then((data) => {
    console.log(data);
    
    var svg = d3.select('#chart-area').append('svg')
    .attr('width', 1200)
    .attr('height', 800);
    var bars = svg.selectAll('rect').data(data);

    bars.enter().append('rect')
        .attr('x', (d, i) => {
            return (i * 120) + 300;
        })
        .attr('y', 200)
        .attr('width', 70)
        .attr('height', (d) => {
            return d.height * 2;
        })
        .attr('fill', 'gray');
});

