'use strict'

let myLibrary = []

// button to open dialog box with form
const newBookBtn = document.getElementById('newBookBtn')
    newBookBtn.addEventListener('pointerup', () => {
        console.log('button test')
        dialog.showModal()
        openCheck(dialog)
        document.getElementById('newBook').reset()
    })

// code for the dialog box and form to get user input
const dialog = document.getElementById('newBookDialog')
    dialog.returnValue = 'newBook'

const cancelBtn = document.getElementById('cancelBtn')
    cancelBtn.addEventListener('pointerup', () => {
        console.log('Cancel pressed')
        dialog.close('Cancel')
        document.getElementById('newBook').reset()
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
let cardId = 1
function userInput(returnValue) {
    if(!returnValue || returnValue === 'Cancel') {
        return
    } else if(returnValue === 'Save') {
        // let bookId = 0
        const newBook = new Book(
                cardId++,
                title.value,
                author.value,
                pages.value,
                hasRead.value,
            )
            // newBook.description = description.value
            console.log(newBook instanceof Book);
        addBookToLibrary(newBook)
    }
}
// end of dialog box



function Book(cardId,title, author, pages, read) {
    this.cardId = cardId
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // this.description = description
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}. ID = ${cardId}`
    }
}

// Book.prototype.cardId = function() {
//     this.cardId = 0
//     console.log('cardid test');
// }

// sample books
const theHobbit = new Book(1,'The Hobbit', 'J.R.R. Tolkien', 250,)
const theSandman = new Book(2,'The Sandman', 'Niel Gaiman', 1200)
const hamlet = new Book(3, 'Hamlet', 'William Shakespeare', 150)

addBookToLibrary(theHobbit)
addBookToLibrary(theSandman)
addBookToLibrary(hamlet)
// end samples


function addBookToLibrary(newBook) {
    console.log(newBook.info());
    // console.log(newBook.id + " --ID");
    myLibrary.push(newBook)
    // let id = newBook[id]
    // for(newBook in myLibrary) {
    //     newBook[id++]
    //     console.log(id + ' --ID test');
    // }
    makeCard(newBook)
}

// const incrementCardIdBy1 = (card) => {
//     cardId++
// }
function makeCard(myLibrary) {
    // display new book 
    const newestBook = myLibrary
    const cardContainer = document.querySelector('.card-container')
    const card = document.createElement('div')
        card.className = 'card'
        // card.id = 0
        // let cardId = card.id
        // incrementCardIdBy1(cardId)
    const cardHeader = document.createElement('header')
    const cardList = document.createElement('ul')
    const cardLiAuthor = document.createElement('li')
    const cardLiPages = document.createElement('li')

        card.appendChild(cardHeader)
            cardHeader.textContent = newestBook.title
            console.log(newestBook.title)
            console.log(newestBook.cardId + ' --ID in makecard');
        card.appendChild(cardList)
        cardList.appendChild(cardLiAuthor)
            cardLiAuthor.textContent = newestBook.author
        cardList.appendChild(cardLiPages)
            cardLiPages.textContent = newestBook.pages
        cardContainer.appendChild(card)
        // console.log(cardId + ' --CARDID test'); 
    return card
}

// function incrementCardIdBy1(cardId) {
    
//     cardId++
//     console.log(cardId + ' --CardId TEST');
// }


