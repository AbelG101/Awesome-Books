const booksContainer = document.querySelectorAll('.books-container');
const addBookOnPage = (book) => {
  booksContainer.forEach((bookContainer) => {
    const div = document.createElement('div');
    const authorTitle = document.createElement('p');
    const removeBtn = document.createElement('button');
    authorTitle.textContent = `"${book.title}" by ${book.author}`;
    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('class', 'remove-btn');
    div.setAttribute('class', 'book');
    div.appendChild(authorTitle);
    div.appendChild(removeBtn);
    bookContainer.appendChild(div);
    if (bookContainer.childNodes.length !== 0) {
      bookContainer.classList.add('border');
    }
  });
}
class BookClass {
  constructor(title, author) {
    this.author = author;
    this.title = title;
  }

  static createArray() {
    this.books = [];
  }

  static saveOnLocalStorage(book) {
    BookClass.books = JSON.parse(localStorage.getItem('All Books: '));
    if (BookClass.books == null) BookClass.books = [];
    BookClass.books.push(book);
    localStorage.setItem('Book: ', JSON.stringify(book));
    localStorage.setItem('All Books: ', JSON.stringify(BookClass.books));
  }

  static addBook(title, author) {
    const book = new BookClass(title, author);
    this.saveOnLocalStorage(book);
    addBookOnPage(book);
  }

  static removeBook(index) {
    const booksDiv = document.querySelectorAll('.book');
    this.books.splice(index, 1);
    booksDiv[index].remove();
    localStorage.setItem('All Books: ', JSON.stringify(this.books));
    booksContainer.forEach((bookContainer) => {
      if (bookContainer.childNodes.length === 1) {
        bookContainer.classList.toggle('border');
      }
    });
  }
}

BookClass.createArray();
const callAddBook = () => {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  BookClass.addBook(title, author);
}
const callRemoveBook = (index) => {
  BookClass.removeBook(index);
}
const retrieveBookData = () => {
  BookClass.books = JSON.parse(localStorage.getItem('All Books: '));
  if (BookClass.books !== null) {
    BookClass.books.forEach((book) => {
      addBookOnPage(book);
    });
  }
}

export { callRemoveBook, callAddBook, retrieveBookData };