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
  const authorTitle = document.createElement('p');
  const removeBtn = document.createElement('button');
  authorTitle.textContent = '"' + book.title + '"' + ' by ' + book.author;
  removeBtn.textContent = 'Remove';
  removeBtn.setAttribute('class', 'remove-btn');
  div.setAttribute('class', 'book');
  div.appendChild(authorTitle);
  div.appendChild(removeBtn);
  booksContainer.appendChild(div);
  if (booksContainer.childNodes.length !== 0)
    booksContainer.classList.add('active');
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
  if (booksContainer.childNodes.length === 1)
    booksContainer.classList.toggle('active');
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