const titleDeaths = document.querySelector('.recovered-deaths-title');
const containerCountry = document.querySelector('.containerAllCountry');
const numberOfTitle = document.querySelector('.recovered-deaths-subtitle');

async function getDate() {
  const response = await fetch('https://corona.lmao.ninja/v2/all');
  const result = await response.json();
  return result;
}

export default async function getDateCountry() {
  const response = await fetch('https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=false&sort=deaths&allowNull=0');
  const result = await response.json();
  return result;
}

async function getDateCountryCases() {
  const response = await fetch('https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=false&sort=cases&allowNull=0');
  const result = await response.json();
  return result;
}

async function getDateCountryRecovered() {
  const response = await fetch('https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=false&sort=recovered&allowNull=0');
  const result = await response.json();
  return result;
}

async function getDateUS() {
  const response = await fetch('https://disease.sh/v3/covid-19/states?sort=deaths&yesterday=true&allowNull=0');
  const result = await response.json();
  return result;
}

function cleaningTitleGlobal() {
  titleDeaths.innerHTML = '';
}

function addTitleDeaths() {
  titleDeaths.textContent = 'Global Deaths';
}

function addTitleRecovered() {
  titleDeaths.textContent = 'Global Recovered';
}

function addTitleConfirmed() {
  titleDeaths.textContent = 'Global Confirmed';
}

function fillDeathsTitle(data) {
  numberOfTitle.innerHTML = '';
  numberOfTitle.textContent = `${data.deaths}`;
  document.querySelector('.deaths-title').appendChild(numberOfTitle);
}

function fillRecoveredTitle(data) {
  numberOfTitle.textContent = `${data.recovered}`;
  document.querySelector('.deaths-title').appendChild(numberOfTitle);
}

function fillConfirmedTitle(data) {
  numberOfTitle.textContent = `${data.cases}`;
  document.querySelector('.deaths-title').appendChild(numberOfTitle);
}
function fillConfirmedGlobalToday(data) {
  numberOfTitle.textContent = `${data.todayCases}`;
  document.querySelector('.deaths-title').appendChild(numberOfTitle);
}

function fillDeathGlobalToday(data) {
  numberOfTitle.innerHTML = '';
  numberOfTitle.textContent = `${data.todayDeaths}`;
  document.querySelector('.deaths-title').appendChild(numberOfTitle);
}

function fillDeathsGlobalPer100k(data) {
  numberOfTitle.textContent = `${data.deathsPerOneMillion / 10}`;
  document.querySelector('.deaths-title').appendChild(numberOfTitle);
}

function fillConfirmedGlobalPer100K(data) {
  numberOfTitle.textContent = `${data.casesPerOneMillion / 10}`;
  document.querySelector('.deaths-title').appendChild(numberOfTitle);
}

function fillRecoveredGlobalPer100K(data) {
  numberOfTitle.textContent = `${data.recoveredPerOneMillion / 10}`;
  document.querySelector('.deaths-title').appendChild(numberOfTitle);
}

function fillDeathsGlobalTodayPer100K(data) {
  const num = ((data.todayDeaths / data.population) * 100000).toFixed(3);
  numberOfTitle.textContent = `${num}`;
  document.querySelector('.deaths-title').appendChild(numberOfTitle);
}

function fillRecoveredGlobalTodayPer100K(data) {
  const num = ((data.todayRecovered / data.population) * 100000).toFixed(3);
  numberOfTitle.textContent = `${num}`;
  document.querySelector('.deaths-title').appendChild(numberOfTitle);
}

function fillCasesGlobalTodayPer100K(data) {
  const num = ((data.todayCases / data.population) * 100000).toFixed(3);
  numberOfTitle.textContent = `${num}`;
  document.querySelector('.deaths-title').appendChild(numberOfTitle);
}

function fillDeathByCountry(data) {
  containerCountry.innerHTML = '';
  for (let i = 0; i < data.length; i += 1) {
    const deathByCountry = `
      <div class="deathsNumber">
        <p>${data[i].deaths} deaths</p>
        <p>${data[i].country} <img style='width:1rem' src=${data[i].countryInfo.flag} alt=${data[i].country}></p>
        <hr>
      </div>
    `;
    containerCountry.insertAdjacentHTML('beforeend', deathByCountry);
  }
}

function fillRecoverdByCountry(data) {
  containerCountry.innerHTML = '';
  for (let i = 0; i < data.length; i += 1) {
    const deathByCountry = `
      <div class="deathsNumber">
        <p>${data[i].recovered} recovered</p>
        <p>${data[i].country} <img style='width:1rem' src=${data[i].countryInfo.flag} alt=${data[i].country}></p>
        <hr>
      </div>
    `;
    containerCountry.insertAdjacentHTML('beforeend', deathByCountry);
  }
}

function fillConfirmedByCountry(data) {
  containerCountry.innerHTML = '';
  for (let i = 0; i < data.length; i += 1) {
    const confirmedByCountry = `
      <div class="deathsNumber">
        <p>${data[i].cases} confirmed</p>
        <p>${data[i].country} <img style='width:1rem' src=${data[i].countryInfo.flag} alt=${data[i].country}></p>
        <hr>
      </div>
    `;
    containerCountry.insertAdjacentHTML('beforeend', confirmedByCountry);
  }
}

function fillDeathTodayByCountry(data) {
  containerCountry.innerHTML = '';
  for (let i = 0; i < data.length; i += 1) {
    const deathByCountry = `
      <div class="deathsNumber">
        <p>${data[i].todayDeaths} deaths</p>
        <p>${data[i].country} <img style='width:1rem'
src=${data[i].countryInfo.flag} alt=${data[i].country}></p>
        <hr>
      </div>
    `;
    containerCountry.insertAdjacentHTML('beforeend', deathByCountry);
  }
}

function fillRecoveredTodayByCountry(data) {
  containerCountry.innerHTML = '';
  for (let i = 0; i < data.length; i += 1) {
    const deathByCountry = `
      <div class="deathsNumber">
        <p>${data[i].todayRecovered} recovered</p>
        <p>${data[i].country} <img style='width:1rem'
src=${data[i].countryInfo.flag} alt=${data[i].country}></p>
        <hr>
      </div>
    `;
    containerCountry.insertAdjacentHTML('beforeend', deathByCountry);
  }
}

function fillConfirmedTodayByCountry(data) {
  containerCountry.innerHTML = '';
  for (let i = 0; i < data.length; i += 1) {
    const deathByCountry = `
      <div class="deathsNumber">
        <p>${data[i].todayCases}  confirmed</p>
        <p>${data[i].country} <img style='width:1rem'
src=${data[i].countryInfo.flag} alt=${data[i].country}></p>
        <hr>
      </div>
    `;
    containerCountry.insertAdjacentHTML('beforeend', deathByCountry);
  }
}

function fillDeathsPer100K(data) {
  containerCountry.innerHTML = '';
  for (let i = 0; i < data.length; i += 1) {
    const dataDeaths100k = data[i].deathsPerOneMillion / 10;
    const deathByCountry = `
      <div class="deathsNumber">
        <p>${dataDeaths100k}  deaths</p>
        <p>${data[i].country} <img style='width:1rem'
src=${data[i].countryInfo.flag} alt=${data[i].country}></p>
        <hr>
      </div>
    `;
    containerCountry.insertAdjacentHTML('beforeend', deathByCountry);
  }
}

function fillRecoveredPer100K(data) {
  containerCountry.innerHTML = '';
  for (let i = 0; i < data.length; i += 1) {
    const dataRecovered100k = data[i].recoveredPerOneMillion / 10;
    const recoveredByCountry = `
      <div class="deathsNumber">
        <p>${dataRecovered100k}  recovered</p>
        <p>${data[i].country} <img style='width:1rem'
src=${data[i].countryInfo.flag} alt=${data[i].country}></p>
        <hr>
      </div>
    `;
    containerCountry.insertAdjacentHTML('beforeend', recoveredByCountry);
  }
}

function fillConfirmedPer100K(data) {
  containerCountry.innerHTML = '';
  for (let i = 0; i < data.length; i += 1) {
    const dataCases100k = data[i].casesPerOneMillion / 10;
    const casesByCountry = `
      <div class="deathsNumber">
        <p>${dataCases100k}  confirmed</p>
        <p>${data[i].country} <img style='width:1rem'
src=${data[i].countryInfo.flag} alt=${data[i].country}></p>
        <hr>
      </div>
    `;
    containerCountry.insertAdjacentHTML('beforeend', casesByCountry);
  }
}

function fillDeathsTodayPer100k(data) {
  containerCountry.innerHTML = '';
  for (let i = 0; i < data.length; i += 1) {
    const dataDeaths100k = ((data[i].todayDeaths / data[i].population) * 100000).toFixed(3);
    const casesByCountry = `
      <div class="deathsNumber">
        <p>${dataDeaths100k} deaths</p>
        <p>${data[i].country} <img style='width:1rem'
src=${data[i].countryInfo.flag} alt=${data[i].country}></p>
        <hr>
      </div>
    `;
    containerCountry.insertAdjacentHTML('beforeend', casesByCountry);
  }
}

function fillRecoveredTodayPer100k(data) {
  containerCountry.innerHTML = '';
  for (let i = 0; i < data.length; i += 1) {
    const dataRecovered100k = ((data[i].todayRecovered / data[i].population) * 100000).toFixed(3);
    const casesByCountry = `
      <div class="deathsNumber">
        <p>${dataRecovered100k}  confirmed</p>
        <p>${data[i].country} <img style='width:1rem'
src=${data[i].countryInfo.flag} alt=${data[i].country}></p>
        <hr>
      </div>
    `;
    containerCountry.insertAdjacentHTML('beforeend', casesByCountry);
  }
}

function fillConfirmedTodayPer100k(data) {
  containerCountry.innerHTML = '';
  for (let i = 0; i < data.length; i += 1) {
    const dataConfirmed100k = ((data[i].todayCases / data[i].population) * 100000).toFixed(3);
    const casesByCountry = `
      <div class="deathsNumber">
        <p>${dataConfirmed100k}  confirmed</p>
        <p>${data[i].country} <img style='width:1rem'
src=${data[i].countryInfo.flag} alt=${data[i].country}></p>
        <hr>
      </div>
    `;
    containerCountry.insertAdjacentHTML('beforeend', casesByCountry);
  }
}

function fillStatisticsByUs(data) {
  const listByUSA = document.querySelector('.infoUS');
  for (let i = 0; i < data.length; i += 1) {
    const infoByUs = `
      <div class="statisticsUsNumber">
        <p>${data[i].deaths} deaths</p>
        <p>${data[i].recovered} recovered</p>
        <p>${data[i].state}</p>
        <hr>
      </div>
    `;
    listByUSA.insertAdjacentHTML('beforeend', infoByUs);
  }
}

async function fillStatisticsUs() {
  const dataUs = await getDateUS();
  fillStatisticsByUs(dataUs);
}

async function fillAll() {
  const dataTitle = await getDate();
  const dataDeathsAll = await getDateCountry();
  const dataCasesAll = await getDateCountryCases();
  const dataRecoverdAll = await getDateCountryRecovered();
  const selInf = document.getElementById('selInf').selectedIndex;
  const optionInf = document.getElementById('selInf').options;
  const selCoef = document.getElementById('selCoef').selectedIndex;
  const ontionSelCoef = document.getElementById('selCoef').options;

  switch (optionInf[selInf].text) {
    case 'deaths':
      cleaningTitleGlobal();
      addTitleDeaths();
      fillDeathsTitle(dataTitle);
      fillDeathByCountry(dataDeathsAll);
      break;
    case 'recovered':
      cleaningTitleGlobal();
      addTitleRecovered();
      fillRecoveredTitle(dataTitle);
      fillRecoverdByCountry(dataRecoverdAll);
      break;
    case 'confirmed':
      cleaningTitleGlobal();
      addTitleConfirmed();
      fillConfirmedTitle(dataTitle);
      fillConfirmedByCountry(dataCasesAll);
      break;
    default:
      break;
  }

  switch (ontionSelCoef[selCoef].text) {
    case 'all':

      break;
    case 'all per 100k':
      switch (optionInf[selInf].text) {
        case 'deaths':
          cleaningTitleGlobal();
          addTitleDeaths();
          fillDeathsGlobalPer100k(dataTitle);
          fillDeathsPer100K(dataDeathsAll);
          break;
        case 'recovered':
          cleaningTitleGlobal();
          addTitleRecovered();
          fillRecoveredGlobalPer100K(dataTitle);
          fillRecoveredPer100K(dataRecoverdAll);
          break;
        case 'confirmed':
          cleaningTitleGlobal();
          addTitleConfirmed();
          fillConfirmedGlobalPer100K(dataTitle);
          fillConfirmedPer100K(dataCasesAll);
          break;
        default:
          break;
      }
      break;
    case 'today':
      switch (optionInf[selInf].text) {
        case 'deaths':
          cleaningTitleGlobal();
          addTitleDeaths();
          fillDeathGlobalToday(dataTitle);
          fillDeathTodayByCountry(dataDeathsAll);
          break;
        case 'recovered':
          cleaningTitleGlobal();
          addTitleRecovered();
          fillRecoveredTitle(dataTitle);
          fillRecoveredTodayByCountry(dataRecoverdAll);
          break;
        case 'confirmed':
          cleaningTitleGlobal();
          addTitleConfirmed();
          fillConfirmedGlobalToday(dataTitle);
          fillConfirmedTodayByCountry(dataCasesAll);
          break;
        default:
          break;
      }
      break;
    case 'today per 100k':
      switch (optionInf[selInf].text) {
        case 'deaths':
          cleaningTitleGlobal();
          addTitleDeaths();
          fillDeathsGlobalTodayPer100K(dataTitle);
          fillDeathsTodayPer100k(dataDeathsAll);
          break;
        case 'recovered':
          cleaningTitleGlobal();
          addTitleRecovered();
          fillRecoveredGlobalTodayPer100K(dataTitle);
          fillRecoveredTodayPer100k(dataRecoverdAll);
          break;
        case 'confirmed':
          cleaningTitleGlobal();
          addTitleConfirmed();
          fillCasesGlobalTodayPer100K(dataTitle);
          fillConfirmedTodayPer100k(dataCasesAll);
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
}

fillStatisticsUs();
fillAll();
document.getElementById('selInf').addEventListener('change', fillAll);
document.getElementById('selCoef').addEventListener('change', fillAll);
