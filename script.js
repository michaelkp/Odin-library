'use strict'

let myLibrary = [];
let cardIdNumber = 0

// let cardArray = [];

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
        removeSampleBooks(myLibrary)
        let cards = document.getElementsByClassName('card')
        console.log('GGGG -- ' + cards.length);
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
                title.value,
                author.value,
                pages.value,
                cardId++,
                'newBook',
            )
            // newBook.description = description.value
            console.log(newBook instanceof Book);
        addBookToLibrary(newBook)
    }
}
// end of dialog box

// change the example cards id to "sample"
const sampleCardId = (newBook) => {

    if(newBook.cardId === undefined) {
        newBook.cardId = 'sample'
    }
} 

function Book(title, author, pages, cardId, tag) {
    this.title = title
    this.author = author
    this.pages = pages
    this.cardId = cardId
    this.tag = tag
    // this.description = description
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages.  ID = ${cardId} tag ${tag}`
    }
    // sampleCardId(newBook)

}
// sample books
const theHobbit = new Book( 'The Hobbit', 'J.R.R. Tolkien', 250, cardId, 'sample')
const theSandman = new Book('The Sandman', 'Niel Gaiman', 1200, cardId, 'sample')
const hamlet = new Book('Hamlet', 'William Shakespeare', 150, cardId, 'sample')


addBookToLibrary(theHobbit)
addBookToLibrary(theSandman)
addBookToLibrary(hamlet)
// end samples


function addBookToLibrary(newBook) {
    console.log(newBook.info());
    myLibrary.push(newBook)
    makeCard(newBook)
    // console.log(cardArray);
    // cardArray.push(card)
    
}

function makeCard(myLibrary) {
    sampleCardId(myLibrary)

    // display new book 
    const newestBook = myLibrary
    const cardContainer = document.querySelector('.card-container')
    const card = document.createElement('div')
        card.className = 'card'
        
    const cardHeader = document.createElement('header')
    const cardList = document.createElement('ul')
    const cardLiAuthor = document.createElement('li')
    const cardLiPages = document.createElement('li')

    let cardNumber = document.createElement('data-card-id')
        cardNumber.dataset.cardId = cardIdNumber++
        card.textContent = cardIdNumber
        console.log(cardIdNumber + ' --cardid number');
        console.log('NEW TAG TEST -- ' + newestBook.tag);
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

        deleteCardBtn(card, cardContainer)
        readBtn(card, cardContainer)
    
        if(Book.tag !== 'sample') {
            return
        } else {
            removeSampleBooks(myLibrary)
        }
}

function readBtn(card, cardContainer) {
    const readBtn = document.createElement('button')
        readBtn.textContent = 'Read'
        card.appendChild(readBtn)
    const readCheckmark = document.createElement('content')
        readCheckmark.classList.add('readCheckmark')
        readCheckmark.style.visibility = 'hidden'
        card.appendChild(readCheckmark)
    readBtn.addEventListener('pointerup', () => {
        console.log('iooiiooi');
        if(readCheckmark.style.visibility === 'visible'
        ) {
            readCheckmark.style.visibility = 'hidden'
        } else {
            readCheckmark.style.visibility = 'visible'
        }
    })
}

function deleteCardBtn(card, cardContainer) {

    const deleteCardBtn = document.createElement('button')
        card.appendChild(deleteCardBtn)
        deleteCardBtn.textContent = 'Delete'
        deleteCardBtn.addEventListener('pointerup', (e) => {
            cardContainer.removeChild(card)
        })
}     

function removeSampleBooks(myLibrary) {
 
    let tag = Book.tag

    myLibrary.forEach(Book => {
        if(myLibrary.length === 0) {
            return
        } else if(Book.tag === 'sample'){
            removeSampleCardDiv(myLibrary)
            myLibrary.splice(0, 3)
        }
    });
}

function removeSampleCardDiv(myLibrary) {
 
    const removeSampleCards = document.getElementsByClassName('.card')
    console.log(removeSampleCards.length);
    console.log(removeSampleCards.cardList);
    if (removeSampleCards.length === 0) {
        return
    }
    myLibrary.forEach(Book => {
        if(Book.tag === 'sample') { 
            console.log(removeSampleCards.length);
            let sampleContainer = document.querySelector('.card-container')
            let sampleCard = document.querySelector('.card')
            let removeSampleCardDiv = sampleContainer.removeChild(sampleCard)
        }
    }) 
}
