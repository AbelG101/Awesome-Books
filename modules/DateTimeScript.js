import { DateTime } from '../LuxonFiles/luxon/build/es6/luxon.js';

function getDateTime() {
  const dateTimeDiv = document.querySelectorAll('.date-time');
   setInterval(() => {
    const now = DateTime.local();
    const nowFormatted = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    dateTimeDiv.forEach((elt) => {
      elt.textContent = nowFormatted;
    });
  }, 1000);
}
export default getDateTime;
