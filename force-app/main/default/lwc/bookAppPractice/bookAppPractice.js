import { LightningElement } from 'lwc';
const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q='
export default class BookAppPractice extends LightningElement {
    query='Man'
    books
    timer
    src= book.volumeInfo.imageLinks === undefined
    ? ""
    : `${book.volumeInfo.imageLinks.thumbnail}
    connectedCallback(){
        this.fetchBookData()
    }

    fetchBookData(){
        fetch(BOOK_URL+this.query)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            this.books = data
            // console.log(this.books.imageLinks.smallThumbnail)
        })
        .catch(error=>console.error(error))
    }
    fetchBooksHandler(event){
        this.query = event.target.value
        window.clearTimeout(this.timer)
        this.timer= setTimeout(()=>{
            this.fetchBookData()
        }, 1000)
    }
}