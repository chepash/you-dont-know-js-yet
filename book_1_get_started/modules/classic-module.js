function Publication_module_factory(title, author, pubDate) {
  var publicAPI = {
    print() {
      console.log(`
        Title: ${title}
        By: ${author}
        ${pubDate}
        `);
    },
  };
  return publicAPI;
}

function Book_module_factory(bookDetails) {
  var pub = Publication_module_factory(
    bookDetails.title,
    bookDetails.author,
    bookDetails.publishedOn
  );
  var publicAPI = {
    print() {
      pub.print();
      console.log(`
        Publisher: ${bookDetails.publisher}
        ISBN: ${bookDetails.ISBN}
        `);
    },
  };
  return publicAPI;
}

function BlogPost_module_factory(title, author, pubDate, URL) {
  var pub = Publication_module_factory(title, author, pubDate);
  var publicAPI = {
    print() {
      pub.print();
      console.log(URL);
    },
  };
  return publicAPI;
}

var YDKJS_module_instance = Book_module_factory({
  title: "You Don't Know JS",
  author: 'Kyle Simpson',
  publishedOn: 'June 2014',
  publisher: "O'Reilly",
  ISBN: '123456-789',
});

YDKJS_module_instance.print();

// var forAgainstLet_module = BlogPostFn(
//   'For and against let',
//   'Kyle Simpson',
//   'October 27, 2014',
//   'https://davidwalsh.name/for-and-against-let'
// );

// forAgainstLet_module.print();
