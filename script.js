const addBtn = document.querySelector('.add-btn');
const booksContainer = document.querySelector('.books-container');

class BookClass {
  constructor(title, author) {
    this.author = author;
    this.title = title;
  }
};

class BookOperations {
  constructor() {
    this.books = [];
  }
  addBook(title, author) {
    const book = new BookClass(title, author)
    saveOnLocalStorage(book);
    addBookOnPage(book);
  }
  removeBook(index) {
    const booksDiv = document.querySelectorAll('.book');
    this.books.splice(index, 1);
    booksDiv[index].remove();
    localStorage.setItem('All Books: ', JSON.stringify(this.books));
    if (booksContainer.childNodes.length === 1)
      booksContainer.classList.toggle('active');
  }
};

const bookOperations = new BookOperations();

function saveOnLocalStorage(book) {
  bookOperations.books = JSON.parse(localStorage.getItem('All Books: '));
  if (bookOperations.books == null) bookOperations.books = [];
  bookOperations.books.push(book);
  localStorage.setItem('Book: ', JSON.stringify(book));
  localStorage.setItem('All Books: ', JSON.stringify(bookOperations.books));
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
  bookOperations.books = JSON.parse(localStorage.getItem('All Books: '));
  if (bookOperations.books !== null) {
    bookOperations.books.forEach((book) => {
      addBookOnPage(book);
    });
  }
};
document.addEventListener('click', (e) => {
  if (!e.target.matches('.remove-btn')) {
    return;
  }
  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((removeBtn, index) => {
    if (e.target === removeBtn) {
      bookOperations.removeBook(index);
    }
  });
});
addBtn.addEventListener('click', () => {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  bookOperations.addBook(title, author);
});