'use strict'

let myLibrary = [];

const newBookBtn = document.getElementById('newBookBtn')
newBookBtn.addEventListener('pointerup', () => {
    console.log('button test')
    dialog.showModal()
    openCheck(dialog)
})
const dialog = document.getElementById('newBookDialog')
const cancelBtn = document.getElementById('cancelBtn')
cancelBtn.addEventListener('pointerup', () => {
    console.log('Cancel pressed')
    dialog.close('Cancel')
    openCheck(dialog)
})
const saveBtn = document.getElementById('saveBtn')

function openCheck(dialog) {
    if(dialog.open) {
        console.log('Dialog open!')
    } else {
        console.log('Dialog closed.')
    }
}


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
    }
    addBookToLibrary(this)
}

// const theHobbit = new Book('Hobbit', 'Tolkien', 250, 'not read yet')
// console.log(theHobbit.info())

function addBookToLibrary() {


    myLibrary.push()
    console.log(myLibrary + ' --push myLibrary ')
}