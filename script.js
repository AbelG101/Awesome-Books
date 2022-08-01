const addBtn = document.querySelector('.add-btn');
const booksContainer = document.querySelector('.books-container');
let books = [];

function saveOnLocalStorage(book) {
  books = JSON.parse(localStorage.getItem('All Books: '));
  if (books == null) books = [];
  books.push(book);
  localStorage.setItem('Book: ', JSON.stringify(book));
  localStorage.setItem('All Books: ', JSON.stringify(books));
}
function addBookOnPage(book) {
  const div = document.createElement('div');
  const authorParag = document.createElement('p');
  const titleParag = document.createElement('p');
  const btn = document.createElement('button');
  const hr = document.createElement('hr');
  authorParag.textContent = book.author;
  titleParag.textContent = book.title;
  btn.textContent = 'remove';
  btn.setAttribute('class', 'remove-btn');
  div.setAttribute('class', 'book');
  div.appendChild(titleParag);
  div.appendChild(authorParag);
  div.appendChild(btn);
  div.appendChild(hr);
  booksContainer.appendChild(div);
}
window.onload = () => {
  books = JSON.parse(localStorage.getItem('All Books: '));
  if (books !== null) {
    books.forEach((book) => {
      addBookOnPage(book);
    });
  }
};
function addBook(author, title) {
  const book = {
    title: String,
    author: String,
  };
  book.title = title.value;
  book.author = author.value;
  saveOnLocalStorage(book);
  addBookOnPage(book);
}
function removeBook(index) {
  const booksDiv = document.querySelectorAll('.book');
  books.splice(index, 1);
  booksDiv[index].remove();
  localStorage.setItem('All Books: ', JSON.stringify(books));
}
document.addEventListener('click', (e) => {
  if (!e.target.matches('.remove-btn')) {
    return;
  }
  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((removeBtn, index) => {
    if (e.target === removeBtn) {
      removeBook(index);
    }
  });
});
addBtn.addEventListener('click', () => {
  const author = document.getElementById('author');
  const title = document.getElementById('title');
  addBook(author, title);
});