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