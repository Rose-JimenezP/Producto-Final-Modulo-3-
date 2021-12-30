window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Los 6 paises con los mejores restaurantes de Latinoamerica "             
      }, 
      axisY:{
        title: "Puntaje obtenido"
      },
      toolTip: {
        shared: true
      },
      legend:{
        cursor:"pointer",
        itemclick: toggleDataSeries
      },
      data: [{        
        type: "spline",  
        name: "Argentina",        
        showInLegend: true,
        dataPoints: [
          { label: "2013" , y: 273 },     
          { label:"2014", y: 275 },     
          { label: "2015", y: 212 },     
          { label: "2016", y: 195 },     
          { label: "2017", y: 163 },
          { label: "2018", y: 237 }
        ]
      }, 
      {        
        type: "spline",
        name: "Brasil",        
        showInLegend: true,
        dataPoints: [
          { label: "2013" , y: 262 },     
          { label:"2014", y: 242 },     
          { label: "2015", y: 247 },     
          { label: "2016", y: 248 },     
          { label: "2017", y: 228 },
          { label: "2018", y: 216 }
        ]
      },
      {        
        type: "spline",  
        name: "Chile",        
        showInLegend: true,
        dataPoints: [
          { label: "2013" , y: 46 },     
          { label:"2014", y: 87 },     
          { label: "2015", y: 100 },     
          { label: "2016", y: 117 },     
          { label: "2017", y: 71 },
          { label: "2018", y: 107 }
        ]
      },
      {        
        type: "spline",  
        name: "Colombia",        
        showInLegend: true,
        dataPoints: [
          { label: "2013" , y: 92 },     
          { label: "2014", y: 31 },     
          { label: "2015", y: 107 },     
          { label: "2016", y: 68 },     
          { label: "2017", y: 75 },
          { label: "2018", y: 134 }
        ]
      },
      {        
        type: "spline",  
        name: "Mexico",        
        showInLegend: true,
        dataPoints: [
          { label: "2013" , y: 250 },     
          { label: "2014", y: 272 },     
          { label: "2015", y: 237 },     
          { label: "2016", y: 281 },     
          { label: "2017", y: 295 },
          { label: "2018", y: 269 }
        ]
      },  
      {        
        type: "spline",  
        name: "Perú",        
        showInLegend: true,
        dataPoints: [
          { label: "2013" , y: 290 },     
          { label: "2014", y: 292 },     
          { label: "2015", y: 270 },     
          { label: "2016", y: 275 },     
          { label: "2017", y: 342 },
          { label: "2018", y: 288 }
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