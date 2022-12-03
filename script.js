'use strict'

let myLibrary = [
    // {
    //     bookId: '001',
    //     title: 'hobbit',
    //     author: 'tolkien',
    //     pages: 231,
    //     hasRead: 'read'
    // },
    // {   
    //     bookId: '002',
    //     title: 'frogger',
    //     author: 'sega',
    //     pages: 23,
    //     hasRead: 'read'
    // },
    // {
    //     bookId: '003',
    //     title: 'sandman',
    //     author: 'gaiman',
    //     pages: 1003,
    //     notRead: 'read'
    // }
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
        
        const newBook = new Book(
                0,
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

function Book(bookId, title, author, pages, read, description) {
    this.bookId = () => {
        return bookId++
    }
    console.log(this.bookId() + ' -- BOOKID')
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // this.description = description
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
    }
}

// sample books
const theHobbit = new Book(1, 'The Hobbit', 'Tolkien', 250,)
const theSandman = new Book(2, 'The Sandman', 'Niel Gaiman', 1200)
const hamlet = new Book(3, 'William Shakespeare', 150)

addBookToLibrary(theHobbit)
addBookToLibrary(theSandman)
addBookToLibrary(hamlet)

function addBookToLibrary(newBook) {
    console.log(newBook.title + ' --title in addBook')
console.log(newBook.info());
    myLibrary.push(newBook)
    console.log(myLibrary + ' --push myLibrary ')
    makeCard(newBook)
}


function makeCard(myLibrary) {
    // display new book 
    const newestBook = myLibrary
    console.log(newestBook)
    const cardContainer = document.querySelector('.card-container')
    const card = document.createElement('div')
        card.className = 'card'
        card.id = 0

        // let cardArray = []
        // cardArray.push(card)
        // let cardId = card.dataset.cardId
        // cardArray.forEach(cardId => {
        //     cardId++
        //     console.log(cardArray + ' --card array');
        //     console.log(cardId + ' -- id test');
        //     console.log(card.dataset.cardId );
        // })
    const cardHeader = document.createElement('header')
    const cardList = document.createElement('ul')
    const cardLiAuthor = document.createElement('li')
    const cardLiPages = document.createElement('li')
    console.log(card.id + ' -- cardId')

        card.appendChild(cardHeader)
            cardHeader.textContent = newestBook.title
            console.log(newestBook.title)
        card.appendChild(cardList)
        cardList.appendChild(cardLiAuthor)
            cardLiAuthor.textContent = newestBook.author
        cardList.appendChild(cardLiPages)
            cardLiPages.textContent = newestBook.pages
        cardContainer.appendChild(card)
        // const addCardIdCounter = (card) => {
        //     const cardCounter = document.getElementsByClassName('card')
        //     console.log(cardCounter + ' -- card counter');
        //     // let cardArray = []
        //         // cardArray.push(cardCounter)
        //         // console.log(cardArray[0] + ' -- card array');
        //         let cardId = card.id
        //         console.log(cardId + ' --id');
        //         for(cardId in cardCounter) {
        //             cardId++
        //             console.log(cardId + ' --card id');
        //         }
        //         // cardCounter.forEach(cardId => {
        //         //     cardId + 1
        //         //     // console.log(cardArray + ' --card array');
        //         //     console.log(cardId + ' -- id test');
        //         //     // console.log(card.dataset.cardId );
        //         // })
        //         return cardId
        // }  
        // addCardIdCounter(card)      
    return card
}

// function addCardIdCounter(card) {
//     const cardCounter = document.getElementsByClassName('card')
//     console.log(cardCounter + ' -- card counter');
//     // let cardArray = []
//         // cardArray.push(cardCounter)
//         // console.log(cardArray[0] + ' -- card array');
//         let cardId = card.id
//         console.log(cardId + ' --id');
//         for(cardId in cardCounter) {
//             cardId++
//             console.log(cardId + ' --card id');
//         }
//         // cardCounter.forEach(cardId => {
//         //     cardId + 1
//         //     // console.log(cardArray + ' --card array');
//         //     console.log(cardId + ' -- id test');
//         //     // console.log(card.dataset.cardId );
//         // })
// }
