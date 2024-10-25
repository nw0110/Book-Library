const myLibrary = [
    new Book("The Hobbit", "J.R.R. Tolkien", 295, true),
    new Book("1984", "George Orwell", 328, true),
    new Book("Project Hail Mary", "Andy Weir", 496, false),
    new Book("Pride and Prejudice", "Jane Austen", 432, true),
    new Book("The Way of Kings", "Brandon Sanderson", 1007, false),
    new Book("Dune", "Frank Herbert", 412, true)
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read already' : 'not read yet'}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function renderLibrary() {
    const libraryContainer = document.querySelector(".library-container");
    for(let i = 0; i < myLibrary.length; i++){
        bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
    }
}