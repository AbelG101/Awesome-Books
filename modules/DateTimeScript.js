import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';
function getDateTime() {
  const dateTimeDiv = document.querySelectorAll('.date-time');
 
  setInterval(() => {
    const now = DateTime.local();
    const nowFormatted = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    console.log(nowFormatted)
    dateTimeDiv.forEach((elt) => {
      elt.textContent = nowFormatted;
    })
  }, 1000)
}
export default getDateTime;
