let TESTER = document.getElementById('tester');
Plotly.newPlot( TESTER, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }], {
margin: { t: 0, r: 0, b: 25, l: 25 },
plot_bgcolor:"#111", 
paper_bgcolor:"#111", 
font: {family:"Exo 2", color:"#FFF"}}
 );
//https://plotly.com/javascript/reference/#layout-paper_bgcolor