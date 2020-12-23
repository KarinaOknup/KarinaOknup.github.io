async function getDate() {
  const response = await fetch('https://corona.lmao.ninja/v2/all');
  const result = await response.json();
  console.log(result);
  return result;
}

async function getDateCountry() {
  const response = await fetch('https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&sort=cases&allowNull=true');
  const result = await response.json();
  console.log(result);
  return result;
}

function fillGlobalCases(data) {
  const numberGlobalCases = document.querySelector('.global-cases-subtitle');
  numberGlobalCases.textContent = `${data.cases}`;
}

function fillCasesCountryData(data) {
  const casesCountry = document.querySelector('.cases-country-data');
  casesCountry.innerHTML = '';
  for (let i = 0; i < data.length; i += 1) {
    const countryCasesData = `
        <div class="cases-country-numbers" data-country='${data[i].country}'>
          <p>${data[i].cases}</p>
          <p>${data[i].country} <img style='width:1.8rem' src=${data[i].countryInfo.flag} alt=${data[i].country}></p>
          
          <hr>
        </div>
      `;
    casesCountry.insertAdjacentHTML('beforeend', countryCasesData);
  }
}

async function fillStatistics() {
  const data = await getDate();
  const dataCountry = await getDateCountry();
  fillGlobalCases(data);
  fillCasesCountryData(dataCountry);
  console.log(data);
}

fillStatistics();
