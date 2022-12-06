'use strict'

let myLibrary = [];
let cardIdNumber = 0

// button to open dialog box with form
const newBookBtn = document.getElementById('newBookBtn')
    newBookBtn.addEventListener('pointerup', () => {
        dialog.showModal()
        document.getElementById('newBook').reset()
    })

// code for the dialog box and form to get user input
const dialog = document.getElementById('newBookDialog')
    dialog.returnValue = 'newBook'

const cancelBtn = document.getElementById('cancelBtn')
    cancelBtn.addEventListener('pointerup', () => {
        dialog.close('Cancel')
        document.getElementById('newBook').reset()
    })

const saveBtn = document.getElementById('saveBtn')
    saveBtn.addEventListener('pointerup', () => {
        dialog.close('Save')
        userInput(dialog.returnValue)
    })

function userInput(returnValue) {
    if(!returnValue || returnValue === 'Cancel') {
        return
    } else if(returnValue === 'Save') {
        const newBook = new Book(
                title.value,
                author.value,
                pages.value,
                false
            )
        addBookToLibrary(newBook)
    }
}
// end of dialog box

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages.  READ: ${isRead}`
    }
}

// sample books
const theHobbit = new Book( 'The Hobbit', 'J.R.R. Tolkien', 250, false)
const theSandman = new Book('The Sandman', 'Neil Gaiman', 1200, true)
const hamlet = new Book('Hamlet', 'William Shakespeare', 150, false)

addBookToLibrary(theHobbit)
addBookToLibrary(theSandman)
addBookToLibrary(hamlet)
// end samples


function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
    makeCard(newBook)  
}

function makeCard(newBook) {

    const cardContainer = document.querySelector('.card-container')
    const card = document.createElement('div')
        card.className = 'card'
        
    const cardHeader = document.createElement('header')
    const cardList = document.createElement('ul')
    const cardLiAuthor = document.createElement('li')
    const cardLiPages = document.createElement('li')

        card.appendChild(cardHeader)
            cardHeader.textContent = newBook.title

        card.appendChild(cardList)
        cardList.appendChild(cardLiAuthor)
            cardLiAuthor.textContent = newBook.author
        cardList.appendChild(cardLiPages)
            cardLiPages.textContent = newBook.pages
        cardContainer.appendChild(card)

        deleteCardBtn(card, cardContainer)
        readBtn(card, newBook)
}

function readBtn(card, newBook) {
    const readBtn = document.createElement('button')
        readBtn.textContent = 'Read'
        card.appendChild(readBtn)

    const readCheckmark = document.createElement('content')
        readCheckmark.classList.add('readCheckmark')
        readCheckmark.style.visibility = 'hidden'
        card.appendChild(readCheckmark)

    readBtn.addEventListener('pointerup', () => {
        if(readCheckmark.style.visibility === 'visible'
        ) {
            readCheckmark.style.visibility = 'hidden'
            newBook.isRead = false
        } else {
            readCheckmark.style.visibility = 'visible'
            newBook.isRead = true
        }
    })
}

function deleteCardBtn(card, cardContainer) {

    const deleteCardBtn = document.createElement('button')
        card.appendChild(deleteCardBtn)
        deleteCardBtn.textContent = 'Delete'
    deleteCardBtn.addEventListener('pointerup', () => {
            cardContainer.removeChild(card)
        })
}     


