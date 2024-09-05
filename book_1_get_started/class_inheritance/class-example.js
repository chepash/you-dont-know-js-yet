class Publication {
  constructor(title, author, pubDate) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
  }

  print() {
    console.log(`
          Title: ${this.title}
          By: ${this.author}
          ${this.pubDate}
          `);
  }
}

class Book extends Publication {
  constructor(bookDetails) {
    super(bookDetails.title, bookDetails.author, bookDetails.publishedOn);
    this.publisher = bookDetails.publisher;
    this.ISBN = bookDetails.ISBN;
  }

  print() {
    super.print();
    console.log(`
          Publisher: ${this.publisher}
          ISBN: ${this.ISBN}
      `);
  }
}

class BlogPost extends Publication {
  constructor(title, author, pubDate, URL) {
    super(title, author, pubDate);
    this.URL = URL;
  }

  print() {
    super.print();
    console.log(this.URL);
  }
}

var YDKJS_class_instance = new Book({
  title: "You Don't Know JS as class",
  author: 'Kyle Simpson',
  publishedOn: 'June 2014',
  publisher: "O'Reilly",
  ISBN: '123456-789',
});

YDKJS_class_instance.print();

// var forAgainstLet_class_instance = new BlogPost(
//   'For and against let',
//   'Kyle Simpson',
//   'October 27, 2014',
//   'https://davidwalsh.name/for-and-against-let'
// );

// forAgainstLet_class_instance.print();
