const addBtn = document.querySelector('.add-btn');
const booksContainer = document.querySelector('.books-container');
function addBookOnPage(book) {
  const div = document.createElement('div');
  const authorTitle = document.createElement('p');
  const removeBtn = document.createElement('button');
  authorTitle.textContent = `"${book.title}" by ${book.author}`;
  removeBtn.textContent = 'Remove';
  removeBtn.setAttribute('class', 'remove-btn');
  div.setAttribute('class', 'book');
  div.appendChild(authorTitle);
  div.appendChild(removeBtn);
  booksContainer.appendChild(div);
  if (booksContainer.childNodes.length !== 0) {
    booksContainer.classList.add('active');
  }
}
class BookClass {
  constructor(title, author) {
    this.author = author;
    this.title = title;
  }

  static createArray() {
    this.books = [];
  }

  static addBook(title, author) {
    const book = new BookClass(title, author);
    saveOnLocalStorage(book);
    addBookOnPage(book);
  }

  static removeBook(index) {
    const booksDiv = document.querySelectorAll('.book');
    this.books.splice(index, 1);
    booksDiv[index].remove();
    localStorage.setItem('All Books: ', JSON.stringify(this.books));
    if (booksContainer.childNodes.length === 1) {
      booksContainer.classList.toggle('active');
    }
  }
}
function saveOnLocalStorage(book) {
  BookClass.books = JSON.parse(localStorage.getItem('All Books: '));
  if (BookClass.books == null) BookClass.books = [];
  BookClass.books.push(book);
  localStorage.setItem('Book: ', JSON.stringify(book));
  localStorage.setItem('All Books: ', JSON.stringify(BookClass.books));
}

BookClass.createArray();

window.onload = () => {
  BookClass.books = JSON.parse(localStorage.getItem('All Books: '));
  if (BookClass.books !== null) {
    BookClass.books.forEach((book) => {
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
      BookClass.removeBook(index);
    }
  });
});
addBtn.addEventListener('click', () => {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  BookClass.addBook(title, author);
});