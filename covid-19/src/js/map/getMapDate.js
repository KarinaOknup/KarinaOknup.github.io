/* eslint-disable */
  async function getMapDate() {
  const response = await fetch('https://corona.lmao.ninja/v2/countries', {
    method: 'GET',
    },);
  const result = await response.json();
  return result;
  };
export default getMapDate;