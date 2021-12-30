window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
  theme: "dark2", // "light1", "light2", "dark1"
  animationEnabled: true,
  exportEnabled: true,
  title: {
    text: "PRODUCCIÓN DEL SUBSECTOR RESTAURANTES"
  },
  axisX: {
    margin: 10,
    labelPlacement: "inside",
    tickPlacement: "inside"
  },
  axisY2: {
    title: "Septiembre 2019",
    titleFontSize: 14,
    includeZero: true,
    suffix: "%"
  },
  data: [{
    type: "bar",
    axisYType: "secondary",
    yValueFormatString: "#,###.##",
    indexLabel: "{y}",
    dataPoints: [
      { label: "Pollerias", y: -6.1 },
      { label: "Cevicherias", y: -5.0 },
      { label: "Cafe restaurantes", y: -3.3 },
      { label: "Restaurantes turisticos", y: -2.3 },
      { label: "Chifas", y: 3.5 },
      { label: "Comidas rapidas", y: 5.1 },
      { label: "Restaurantes ", y: 5.4 },
      { label: "Comida Internacional", y: 7.9 },
      { label: "Carnes y parrillas", y: 16.8 },
      { label: "Sandwicherias", y: 17.3 }
    ]
  }]
});
chart.render();
  
function toggleDataSeries(e) {
  if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
    e.dataSeries.visible = false;
  }
  else {
    e.dataSeries.visible = true;            
  }
  chart.render();
}

}  