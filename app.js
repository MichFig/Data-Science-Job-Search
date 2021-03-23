// Scatter Plot for Employers
<script>
/ set the dimensions and margins of the graph

var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

          let filterbutton = document.getElementById("filter-btn");

function handleClick(){
    let tablefilter = document.getElementById("tablefilter");
    tablefilter.innerHTML = "";
    let date_Time = document.getElementById("datetime").value;
    console.log("data =",date_Time);

   let filter = data.filter(date => date.datetime == date_Time);
    console.log("filter",filter);  
   

    for(let x = 0;x<filter.length;x++){
        console.log("filter",filter[x]);  
        tablefilter.innerHTML +=
        "<tr> " +
        "<td>" + filter[x].datetime + "</td>" +
        "<td>" + filter[x].city  + "</td>" +
        "<td>" + filter[x].state + "</td>" +
        "<td>" + filter[x].country + "</td>" +
        "<td>" + filter[x].shape + "</td>" +
        "<td>" + filter[x].duration + "</td>" +
        "<td>" + filter[x].comments + "</td>" +
        "</tr>";
    }
//Read the data
d3.csv("cleaned_data.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 4000])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 500000])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.GrLivArea); } )
      .attr("cy", function (d) { return y(d.SalePrice); } )
      .attr("r", 1.5)
      .style("fill", "#69b3a2")

})

</script>
