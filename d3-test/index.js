d3.selectAll('p').style('color','blue');
d3.selectAll('p').style('color',function () {
  return "hsl(" + Math.random() * 360 + ",100%,50%)";
})
// d3.selectAll('p').style('color',function (d,i) {
//   return i%2? '#999':'#eee';
// });
d3.selectAll('p')
.data([12,18,24,35])
.style('font-size',function (d,i) {
  return d+'px';
})
.style('color',function (d,i) {
  return i%2? '#999':'#eee';
});
lis=d3.selectAll('li');
// lis.style({'color':'red','font-size':'23px'});
lis.style('color','red');
lis.append('li');
lis.style('font-size','23px');
lis.style('color','blue');
// lis.remove();
var divs=d3.select("body").selectAll("div").data([4, 8, 15, 16, 23, 42])
  divs.text(function(d){return d;})//old element
    .style('color','red')
  divs.enter().append("div")
    .text(function(d) { return d; })//new element
    .style('color','green')
  // divs.style('font-size','25px')//并不能old and new element，只能old
  d3.selectAll('div').style('font-size','25px')//old and new element
  var divs1=d3.select('body').selectAll('div').data([1,2,4,8,16,32],function (d) {
    return d;
  })
  divs1.enter().append('div').text(function (d) {
    return d;
  })

// var matrix = [
//   [11975,  5871, 8916, 2868],
//   [ 1951, 10048, 2060, 6171],
//   [ 8010, 16145, 8090, 8045],
//   [ 1013,   990,  940, 6907]
// ];
//
// var tr = d3.select("body").append("table").selectAll("tr")
//     .data(matrix)
//   .enter().append("tr");
//
// var td = tr.selectAll("td")
//     .data(function(d) { return d; })
//   .enter().append("td")
//     .text(function(d) { return d; });
