/*
show () - If there are no arguments, then the spinner appears for all blocks in the project
If you need to show a spinner for a specific block,
specify the classes in the arguments in the array
for example show(['.class1', '.class1'])
*/

const spinnerHTML = `
  <div class="spinner">
  <div class="loadingio-spinner-spin-o5p4rq2wt3g"><div class="ldio-oof2v6q9grq">
  <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
  </div></div>
  </div>
  `;

export default function spinner() {
  const casesCountry = document.querySelector('.cases-country-data');
  const containerCountry = document.querySelector('.containerAllCountry');
  const containerRecovere = document.querySelector('.death-recovered');
  const graf = document.querySelector('.graph ');
  const map = document.querySelector('.map-area ');
  const globalCases = document.querySelector('.global-cases');

  const countryCasesData = spinnerHTML;

  const view = {
    show(options = []) {
      const { length } = options;
      if (length === 0) {
        casesCountry.insertAdjacentHTML('beforeend', countryCasesData);
        containerCountry.insertAdjacentHTML('beforeend', countryCasesData);
        containerRecovere.insertAdjacentHTML('beforeend', countryCasesData);
        graf.insertAdjacentHTML('beforeend', countryCasesData);
        map.insertAdjacentHTML('beforeend', countryCasesData);
        globalCases.insertAdjacentHTML('beforeend', countryCasesData);
      } else {
        options.forEach((tag) => {
          const element = document.querySelector(tag);
          element.insertAdjacentHTML('beforeend', countryCasesData);
        });
      }
    },
    hide() {
      document.querySelectorAll('.spinner').forEach((item) => {
        item.remove();
      });
    },
  };
  return view;
}
