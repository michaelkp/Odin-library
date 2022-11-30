'use strict'

let myLibrary = [
    {
        title: 'hobbit',
        author: 'tolkien',
        pages: 231,
        hasRead: 'read'
    },
    {
        title: 'frogger',
        author: 'sega',
        pages: 23,
        hasRead: 'read'
    },
    {
        title: 'sandman',
        author: 'gaiman',
        pages: 1003,
        notRead: 'read'
    }
];

// button to open dialog box with form
const newBookBtn = document.getElementById('newBookBtn')
    newBookBtn.addEventListener('pointerup', () => {
        console.log('button test')
        dialog.showModal()
        openCheck(dialog)
    })

// code for the dialog box and form to get user input
const dialog = document.getElementById('newBookDialog')
    dialog.returnValue = 'newBook'

const cancelBtn = document.getElementById('cancelBtn')
    cancelBtn.addEventListener('pointerup', () => {
        console.log('Cancel pressed')
        dialog.close('Cancel')
        openCheck(dialog)
    })

const saveBtn = document.getElementById('saveBtn')
    saveBtn.addEventListener('pointerup', () => {
        dialog.close('Save')
        openCheck(dialog)
        userInput(dialog.returnValue)
    })
function openCheck(dialog) {
    if(dialog.open) {
        console.log('Dialog open!')
    } else {
        console.log('Dialog closed.')
    }
}

function userInput(returnValue) {
    if(!returnValue || returnValue === 'Cancel') {
        return
    } else if(returnValue === 'Save') {
        
        console.log(title.value + ' --TITLE'
                      + author.value +  ' --AUTHOR'
                      + pages.value + ' --PAGES'
                      + hasRead.value + ' --READ')

        const newBook = new Book
            newBook.title = title.value
            newBook.author = author.value
            newBook.pages = pages.value
            newBook.hasRead = hasRead.value
            
        addBookToLibrary(newBook)
    }
}
// end of dialog box

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
    }
}

// const theHobbit = new Book('Hobbit', 'Tolkien', 250, 'not read yet')
// console.log(theHobbit.info())

function addBookToLibrary(newBook) {
    console.log(newBook.title + ' --title in addBook')

    myLibrary.push(newBook)
    console.log(myLibrary + ' --push myLibrary ')

    // add card with book data to document
    makeCard(myLibrary)
}

function makeCard(myLibrary) {

    const newestBook = myLibrary[myLibrary.length - 1]
    console.log(newestBook)
    const cardContainer = document.querySelector('.card-container')
    const card = document.createElement('div')
        card.className = 'card'
    const cardHeader = document.createElement('header')
    const cardList = document.createElement('ul')
    const cardLiAuthor = document.createElement('li')
    const cardLiPages = document.createElement('li')

        card.appendChild(cardHeader)
            cardHeader.textContent = newestBook.title
            console.log(newestBook.title)
        card.appendChild(cardList)
        cardList.appendChild(cardLiAuthor)
            cardLiAuthor.textContent = newestBook.author
        cardList.appendChild(cardLiPages)
            cardLiPages.textContent = newestBook.pages
        cardContainer.appendChild(card)
}

