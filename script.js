const addBtn = document.querySelector('.add-btn');
const booksContainer = document.querySelector('.books-container');
let books = [];

// retrive books from local storage (if they exist) when page loads
window.onload = () => {
  books = JSON.parse(localStorage.getItem('All Books: '));
  // if books exist on local storage
  if (books !== null) {
    books.forEach((book) => {
      addBookOnPage(book);
    });
  }
};

function saveOnLocalStorage(book) {
    books = JSON.parse(localStorage.getItem('All Books: '));
    // if local storage is empty
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
  
  function addBook(author, title) {
    let book = {
      title: String,
      author: String
    };
  
    book.title = title.value;
    book.author = author.value;
  
    saveOnLocalStorage(book);
    addBookOnPage(book);
  }
  