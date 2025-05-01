const container = document.querySelector(".container");

const library = [];

function Book(name, author, pages, read) {
    if (!new.target) {
        throw Error("Use 'new' to create an instance!")
    }
    this.id = crypto.randomUUID;
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
    const book = new Book(name, author, pages, read);
    library.push(book);
}

function displayBook(book) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.style.border = "1px solid grey";
    
    const name = document.createElement("h3");
    name.textContent = book.name;
    bookDiv.appendChild(name);

    const author = document.createElement("h4");
    author.textContent = book.author;
    bookDiv.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = "Number of pages: " + book.pages;
    bookDiv.appendChild(pages);

    container.appendChild(bookDiv);
}

function displayLibrary() {
    library.forEach((book) => {
        displayBook(book);
    });
};

addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 214, false);
addBookToLibrary("Brave New World", "Aldous Huxley", 268, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);

displayLibrary();