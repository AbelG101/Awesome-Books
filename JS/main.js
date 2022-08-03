import { callRemoveBook, callAddBook, retrieveBookData } from './bookScript.js';
import { app } from './singlePageApp.js'

const addBtn = document.querySelector('.add-btn');
function onPageLoad() {
  retrieveBookData();
  app.init();
}
window.onload = onPageLoad();
document.addEventListener('click', (e) => {
  if (!e.target.matches('.remove-btn')) {
    return;
  }
  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((removeBtn, index) => {
    if (e.target === removeBtn) {
      callRemoveBook(e.target.parentElement.getAttribute('id'));
    }
  });

});
addBtn.addEventListener('click', callAddBook);