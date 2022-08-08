import { callRemoveBook, callAddBook, retrieveBookData } from './modules/bookScript.js';
import app from './modules/singlePageApp.js';
import getDateTime from './modules/DateTimeScript.js';

const addBtn = document.querySelector('.add-btn');
function onPageLoad() {
  retrieveBookData();
  app.init();
  getDateTime();
}
window.onload = onPageLoad();
document.addEventListener('click', (e) => {
  if (!e.target.matches('.remove-btn')) {
    return;
  }
  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((removeBtn, index) => {
    if (e.target === removeBtn) {
      callRemoveBook(index);
    }
  });
});
addBtn.addEventListener('click', callAddBook);