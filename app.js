'use strict';

class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}

	info() {
		console.log(`${this.title} - ${this.author}`);
	}
}

const book1 = new Book('Lord Of The Rings', 'Talkien');
book1.info();

class EBook extends Book {
	constructor(title, author, pages) {
		super(title, author);
		this.pages = pages;
	}

	info() {
		console.log(`${this.title} - ${this.author} - ${this.pages}`);
	}
}

const book2 = new EBook('Lord Of The Rings', 'Talkien', 100);
book2.info();
