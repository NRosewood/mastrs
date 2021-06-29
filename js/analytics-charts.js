const formatNumbersWithSpaces = (number) => {
  number = Math.round(number);
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const TOOLTIP_TEMPLATE = (data) => {
  return `
    <div class="analytics_graph__tooltip">
      + ${formatNumbersWithSpaces(data)}₽
    </div>
  `;
}

const DATA_ROWS_SEED = [
  [ 'Пн 03.05', 8650 ],
  [ 'Вт 04.05', 10000 ],
  [ 'Ср 05.05', 12000 ],
  [ 'Чт 06.05', 24000 ],
  [ 'Пт 07.05', 25000 ],
  [ 'Сб 08.05', 100000 ]
];

function drawChart(root, rows) {
  let data = new google.visualization.DataTable();

  data.addColumn('string', 'Days',);
  data.addColumn('number', 'Salary');
  data.addColumn({ 'type': 'string', 'role': 'tooltip', 'p': { 'html': true } });

  rows.forEach(row => {
    const [ title, value ] = row;
    
    data.addRow([ title, value, TOOLTIP_TEMPLATE(value) ]);
  });

  var options = {
    'width': '100%',
    'height': '100%',
    legend: 'none',
    colors: [ "#fff" ],
    areaOpacity: 0.24,
    lineWidth: 1,
    backgroundColor: 'transparent',
    chartArea: { backgroundColor: "transparent" },

    hAxis: {
      titleTextStyle: { color: '#fff' }, 
      gridlines: { count: 0 },
      textStyle: { 
        color: '#fff', 
        fontName: 'Inter', 
        fontSize: '10', 
        fontWeight: '500'
      }
    },

    vAxis: {
      minValue: 0, 
      gridlines: { count: 0 },
      viewWindowMode: 'maximized',
      baselineColor: 'transparent', 
      textStyle: { 
        color: '#fff', 
        fontName: 'Inter', 
        fontSize: '10', 
        fontWeight: '500'
      }
    },

    bar: { 
      groupWidth: "4", 
      borderRadius: '50px'
    },

    tooltip: { 
      isHtml: true, 
      ignoreBounds: true 
    }
  };

  let chart = new google.visualization.ColumnChart(root);
  chart.draw(data, options);
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart.bind(null, document.querySelector('.analytics_graph-table__chart'), DATA_ROWS_SEED));

window.addEventListener('resize', drawChart.bind(null, document.querySelector('.analytics_graph-table__chart'), DATA_ROWS_SEED));