'use strict'

let myLibrary = [];
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
        removeSampleCards(myLibrary)

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
    console.log(newBook.cardId + ' --newbook id');
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
        // cardArray.push(card)
        
    const cardHeader = document.createElement('header')
    const cardList = document.createElement('ul')
    const cardLiAuthor = document.createElement('li')
    const cardLiPages = document.createElement('li')

    let cardIdNumber = document.createElement('data-card-id')
        cardIdNumber = newestBook.cardId
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
        deleteCardBtn(card)
        if(Book.tag !== 'sample') {
            console.log('MMMMM -- ' + Book.tag)
            return
        } else {
            removeSampleCards(myLibrary)
        }
}

function deleteCardBtn(card) {
    console.log('ijpokpokokpk');
    const deleteCardBtn = document.createElement('button')
        card.appendChild(deleteCardBtn)

        deleteCardBtn.addEventListener('pointerup', () => {
            removeCardDiv()
        })
}

function removeCardDiv() {
    let tempContainer = document.querySelector('.card-container')
    let tempCard = document.querySelector('.card')
    let removeCardDiv = tempContainer.removeChild(tempCard)
}

function removeSampleCards(myLibrary) {
    // let filteredLibrary = myLibrary.filter(Book => Book.tag === 'sample').splice(Book)
    // console.log('DDDD -- ' + filteredLibrary.length);
    // console.log('TAG -- ' + Book.tag);
    console.log(' book tag -- ' + Book.tag);
    let tag = Book.tag
    console.log('TAG -- ' + tag);
    console.log(myLibrary.length);

    myLibrary.forEach(Book => {
        console.log('kkkmkmkkm');
        if(Book.tag === 'sample'){
            console.log('kpkpkpl');
            removeSampleCardDiv(myLibrary)

            myLibrary.splice(0, 3)
            console.log('jffba');
            console.log(myLibrary.length);
        }
    });
}

function removeSampleCardDiv(myLibrary) {
    console.log('HHHHH')
    console.log(Book.tag);
    // if(Book.tag === 'sample')  {
    // let tempContainer = document.querySelector('.card-container')
    // let tempCard = document.querySelector('.card')
    // let removeCardDiv = tempContainer.removeChild(tempCard)}

    myLibrary.forEach(Book => {
        console.log('kkkmkmkkm');
        if(Book.tag === 'sample'){
            let tempContainer = document.querySelector('.card-container')
            let tempCard = document.querySelector('.card')
            let removeCardDiv = tempContainer.removeChild(tempCard)
        }

    })
    
}

