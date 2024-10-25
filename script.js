function Book(title, author, pages, isAlreadyRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAlreadyRead = isAlreadyRead;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isAlreadyRead ? 'read already' : 'not read yet'}`;
    }
}

Book.prototype.toogleReadStatus = function() {
    this.isAlreadyRead = !this.isAlreadyRead;
}

const myLibrary = [
    new Book("The Hobbit", "J.R.R. Tolkien", 295, true),
    new Book("1984", "George Orwell", 328, true),
    new Book("Project Hail Mary", "Andy Weir", 496, false),
    new Book("Pride and Prejudice", "Jane Austen", 432, true),
    new Book("The Way of Kings", "Brandon Sanderson", 1007, false),
    new Book("Dune", "Frank Herbert", 412, true)
];

function addBookToLibrary(title, author, pages, isAlreadyRead) {
    const book = new Book(title, author, pages, isAlreadyRead);
    myLibrary.push(book);
}

function renderLibrary() {
    const libraryContainer = document.querySelector(".library-container");
    libraryContainer.innerHTML = ""

    for(let i = 0; i < myLibrary.length; i++){

        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const title = document.createElement("h2");
        title.textContent = myLibrary[i].title;
        title.classList.add("book-title");

        const author = document.createElement("div");
        author.textContent = myLibrary[i].author;
        author.classList.add("book-author");

        const pages = document.createElement("div");
        pages.textContent = myLibrary[i].pages + " pages";
        pages.classList.add("book-pages");

        const toggleReadBtn = document.createElement("button");
        toggleReadBtn.setAttribute('type', 'button');
        toggleReadBtn.textContent = myLibrary[i].isAlreadyRead === true ? "Already read" : "Not read";
        toggleReadBtn.classList.add(myLibrary[i].isAlreadyRead === true ? "read" : "not-read");
        toggleReadBtn.setAttribute('data-index-value', i);

        deleteBtn = document.createElement("button");
        deleteBtn.setAttribute('type', 'button');
        deleteBtn.setAttribute('data-index-value', i);
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = "X";
        

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(toggleReadBtn);
        bookCard.appendChild(deleteBtn);

        libraryContainer.appendChild(bookCard);
    }
}

let libraryContainer = document.querySelector('.library-container');

libraryContainer.addEventListener('click', (event) => {
    let target = event.target;
    if(target.classList.contains("read") || target.classList.contains("not-read")){
        const indexOfClickedBookCard = target.getAttribute("data-index-value");
        const book = myLibrary[indexOfClickedBookCard];
        console.log(book);
        book.toogleReadStatus();
        renderLibrary();
    } else if(target.classList.contains("delete")){
        const indexToDelete = target.getAttribute("data-index-value");
        myLibrary.splice(indexToDelete, 1);
        renderLibrary();
    }

    return;
})

renderLibrary();