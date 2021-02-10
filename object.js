// Object constructor exercise

class books {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.info = function () {
            return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
        }
    }
}

const foundation = new books('Foundation', 'Issac Asimov', '296 pages', 'have read');

console.log(foundation);
console.log(foundation.info());