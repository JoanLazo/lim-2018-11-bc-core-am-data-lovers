// Creando el gráfico estadístico con canvas
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Tank', 'Fighter', 'Assassin', 'Mage', 'Support', 'Marksman'],
    datasets: [{
      label: 'Cantidad de Campeones por Tipo',
      data: [40, 66, 33, 52, 27, 24],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      fontSise: 20,
      text: 'Champios of League of Leagues'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
// console.log(myChart);


// Creando el grafico estadistio con google Charts
// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages': ['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.
  let data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Tank', 40],
    ['Fighter', 66],
    ['Assassin', 33],
    ['Mage', 52],
    ['Support', 27],
    ['Marksman', 24]
  ]);

  // Set chart options
  let options = {'title': 'CAMPEONES POR TIPO',
    'width': 400,
    'height': 300};

  // Instantiate and draw our chart, passing in some options.
  let chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
