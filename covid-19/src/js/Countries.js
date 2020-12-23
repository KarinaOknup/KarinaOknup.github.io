import getDateCountry from './block_deaths';
import spinner from './components/spinner';
import showChart from './components/charts';

class Countries {
  constructor() {
    this.staticToCountries = [];
    this.staticToChart = [];
    this.chart = showChart();
    this.country = false;
    this.viewSpinner = spinner();
  }

  async getDataToCountry() {
    const staticToCountries = await getDateCountry()
      .then((data) => {
        this.viewSpinner.hide();
        this.staticToCountries = data;
        return data;
      })
      .catch((err) => console.log(err));
    // this.sort();
    return staticToCountries;
  }

  async getDataToChart() {
    const message = 'Country not found or doesn\'t have any historical data';
    const country = this.country ? `${this.country}` : 'all';
    const url = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=180`;
    const staticToCountry = await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          this.chart.message(message, country);
          this.render();
        } else {
          this.staticToChart = data;
          this.chart.render('cases', this.staticToChart, country);
          this.render();
        }
      })
      .catch((err) => {
        this.chart.message(message, country);
        this.render();
        console.log(err);
      });
    this.viewSpinner.hide();
    return staticToCountry;
  }

  sort(type = 'conf') {
    switch (type) {
      case 'conf':
        this.staticToCountries.sort((a, b) => b.cases - a.cases);
        break;
      case 'deth':
        this.staticToCountries.sort((a, b) => b.deaths - a.deaths);
        break;
      case 'recov':
        this.staticToCountries.sort((a, b) => b.recovered - a.recovered);
        break;
      default:
        break;
    }
  }

  init() {
    this.getDataToCountry();
    this.viewSpinner.show();
    this.getDataToChart();

    document.querySelector('#btnDeaths').addEventListener('click', () => {
      const country = this.country ? `${this.country}` : 'all';
      this.chart.render('deaths', this.staticToChart, country);
    });

    document.querySelector('#btnRecovered').addEventListener('click', () => {
      const country = this.country ? `${this.country}` : 'all';
      this.chart.render('recovered', this.staticToChart, country);
    });
    document.querySelector('#btnCases').addEventListener('click', () => {
      const country = this.country ? `${this.country}` : 'all';
      this.chart.render('cases', this.staticToChart, country);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const getCountry = (event) => {
      this.country = event.target.parentElement.dataset.country;

      this.viewSpinner.show(['.graph']);
      this.getDataToChart();

      document.querySelector('.cases-country-data').removeEventListener('click', getCountry);
    };
    document.querySelector('.cases-country-data').addEventListener('click', getCountry);
  }
}

export default Countries;
