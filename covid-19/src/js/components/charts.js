import Chart from 'chart.js';

export default function showChart() {
  const ctx = document.querySelector('#myChart').getContext('2d');
  const colorText = '#f0f8ff';

  let color;
  let staticDataToChart;

  const chartConfig = {
    type: 'line',
    data: {
      datasets: [{
        fontColor: colorText,
        backgroundColor: color,
        borderColor: color,
        fill: false,
      }],
    },
    options: {
      title: {
        display: true,
        fontColor: colorText,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
              fontColor: colorText,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              display: true,
              fontColor: colorText,
            },
          },
        ],
      },
      legend: {
        display: true,
        position: 'right',
        labels: {
          boxWidth: 30,
          fontColor: colorText,
          padding: 5,
        },
      },
      elements: {
        point: {
          radius: 1,
        },
      },
    },
  };

  const chart = new Chart(ctx, chartConfig);

  const view = {
    render(type = 'cases', data = {}, country) {
      const text = country === 'all' ? 'Cumulative data for All' : `Cumulative data for ${country}`;
      const { cases, deaths, recovered } = country === 'all' ? data : data.timeline;
      switch (type) {
        case 'deaths':
          staticDataToChart = deaths;
          color = '#800000';

          break;
        case 'recovered':
          staticDataToChart = recovered;
          color = '#00FF00';
          break;
        case 'cases':
          staticDataToChart = cases;
          color = '#6db2c7';
          break;
        default:
          break;
      }
      const lengthData = staticDataToChart.length;
      const maxData = Math.max(...Object.values(staticDataToChart));
      const stepData = Math.floor(maxData / 5);

      chartConfig.data.labels = Object.keys(staticDataToChart);
      chartConfig.data.datasets[0].label = type;
      chartConfig.data.datasets[0].backgroundColor = color;
      chartConfig.data.datasets[0].borderColor = color;
      chartConfig.data.datasets[0].data = Object.values(staticDataToChart);
      chartConfig.options.title.text = text;
      chartConfig.options.scales.yAxes[0].ticks.stepSize = stepData;
      chartConfig.options.scales.yAxes[0].ticks.max = staticDataToChart[lengthData];
      // eslint-disable-next-line prefer-destructuring
      chartConfig.options.scales.yAxes[0].ticks.min = staticDataToChart[0];

      chart.update();
    },
    message(message, country) {
      const text = country === 'all' ? 'Cumulative data for All' : `Cumulative data for ${country}`;
      chartConfig.options.title.text = text;
      chartConfig.data.datasets[0].label = message;
      chart.update();
    },
  };
  return view;
}
