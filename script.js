let a = ''
let b = ''
let c = ''
function resetInput() {
    a = ''
    b = ''
    c = ''
}
let myLibrary = [
    {name: 'harry', author: 'jkn', year: 2002},
    {name: 'barry', author: 'jks', year: 2102},
    {name: 'terry', author: 'jkb', year: 2002},
    {name: 'lerry', author: 'jkf', year: 2005},
    {name: 'perry', author: 'jkg', year: 2006},
    {name: 'jerry', author: 'jko', year: 2007},
]

function Book(name, author, year) {
    this.name = name
    this.author = author
    this.year = year

}
function addBookToLibrary() {
   
    a = document.querySelector('.Name').value
    b = document.querySelector('.Author').value
    b = document.querySelector('.Year').value

        console.log('added')
        let book = new Book(a, b, c)
        myLibrary.push(book)
        resetInput()
        displayBooks()
        attachEvent()
   
}

function displayBooks() {
    let bookDiv = document.querySelector('.books')
    bookDiv.innerHTML = ''
    for(let i = 0; i < myLibrary.length; i++) {
        
        bookDiv.innerHTML += `<div class="bookItem"><p class="name">${myLibrary[i].name}</p><p class="written">Written by</p><p class="author">${myLibrary[i].author}</p><p class="year">in ${myLibrary[i].year}</p><button class="${i}" id="delete">Delete book</button></div>`
    
    }
}

document.querySelector('button').addEventListener('click', addBookToLibrary)


function attachEvent() {
const del = document.querySelectorAll('#delete')
del.forEach(function(element) {
    element.addEventListener('click', deleteBook)
}); 
}

function deleteBook(e) {
    let num = e.srcElement.className
    myLibrary.splice(num, 1)
    displayBooks()
    attachEvent()
}



displayBooks()
attachEvent()