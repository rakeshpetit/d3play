var svg = d3.select('#chart-area').append('svg')
    .attr('width', 800)
    .attr('height', 800);

d3.json('basics/buildings.json').then((data) => {
    data.forEach(d => {
        d.height = +d.height;
    });

    const arr = [];
    data.map((i) => {
        arr.push(i.name);
    });

    console.log(arr);

    var x = d3.scaleBand()
        .domain(arr)
        .range([0, 600])
        .paddingInner(0.3)
        .paddingOuter(0.3);

    var y = d3.scaleLinear()
        .domain([0, 828])
        .range([0, 400]);
        
    var bars = svg.selectAll('rect').data(data);

    bars.enter().append('rect')
        .attr('x', (d) => {
            return x(d.name) + 40;
        })
        .attr('y', 200)
        .attr('width', 40)
        .attr('height', (d) => {
            return y(d.height);
        })
        .attr('fill', 'gray');
});

