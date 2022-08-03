const addBtn = document.querySelector('.add-btn');
const booksContainer = document.querySelectorAll('.books-container');
function addBookOnPage(book) {
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
      bookContainer.classList.add('active');
    }
    console.log(bookContainer)
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
        bookContainer.classList.toggle('active');
      }
    });

  }
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

function displaySection(section) {
  const sectionList = document.getElementById('list');
  const sectionForm = document.getElementById('add-new');
  const sectionContact = document.getElementById('contact');

  switch (section) {
    case 'list':
      sectionList.style.display = 'block';
      sectionForm.style.display = 'none';
      sectionContact.style.display = 'none';
      heading.innerHTML = 'All Awesome Books';
      break;

    case 'add-new':
      sectionList.style.display = 'none';
      sectionForm.style.display = 'block';
      sectionContact.style.display = 'none';
      heading.innerHTML = 'Add a New Book';
      break;

    case 'contact':
      sectionList.style.display = 'none';
      sectionForm.style.display = 'none';
      sectionContact.style.display = 'block';
      heading.innerHTML = 'Contact Information';
      break;

    default: break;
  }
}