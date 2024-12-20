export function chart(dates) {
         // Load the Visualization API and the corechart package.
         google.charts.load('current', {'packages':['corechart']});

         // Set a callback to run when the Google Visualization API is loaded.
         google.charts.setOnLoadCallback(drawChart);
   
         // Callback that creates and populates a data table,
         // instantiates the pie chart, passes in the data and
         // draws it.
         function drawChart() {
   
           // Create the data table.
           var data = new google.visualization.DataTable();
           data.addColumn('string', 'Topping');
           data.addColumn('number', 'Slices');
           data.addRows(dates);
   
           // Set chart options
           var options = {'title':'Preferencias musicales',
                          'width':1000,
                          'height':500};
   
           // Instantiate and draw our chart, passing in some options.
           var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
           chart.draw(data, options);
           document.querySelector(".chart").classList.add("animate__tada");
         }
}