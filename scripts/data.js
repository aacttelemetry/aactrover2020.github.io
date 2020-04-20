let linegraphs = ["temp-line", "humid-line", "heartrate-line", "speed-line" ]
let linecolors= ['rgb(255,0,0)','rgb(0,0,255)','rgb(180,0,0)', 'rgb(255,0,255)']

for (var i=0; i<linegraphs.length; i++){
    let element = document.getElementById(linegraphs[i]);
    Plotly.newPlot( element, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16],
        line: {color: linecolors[i]} }], {
    margin: { t: 0, r: 0, b: 25, l: 25 },
    plot_bgcolor:"#111", 
    paper_bgcolor:"#111", 
    font: {family:"Exo 2", color:"#FFF"},
    hoverlabel: {font: {family: "Exo 2", color:"#FFF"}}}
     );
}




var hist_data = [];
for (var i = 0; i < 500; i ++) {
	hist_data[i] = Math.random();
}

let histelement = document.getElementById('heartrate-histogram');

Plotly.newPlot(histelement, [{
    x:hist_data,
    type: 'histogram'
}], {
    margin: { t: 0, r: 0, b: 25, l: 25 },
    plot_bgcolor:"#111", 
    paper_bgcolor:"#111", 
    font: {family:"Exo 2", color:"#FFF"},
    hoverlabel: {font: {family: "Exo 2", color:"#FFF"}}} );


//https://plotly.com/javascript/reference/#layout-paper_bgcolor