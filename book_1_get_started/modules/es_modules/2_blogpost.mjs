import { create as createPub } from './1_publication.mjs';

function printDetails(pub, URL) {
  pub.print();
  console.log(URL);
}

export function create(title, author, pubDate, URL) {
  var pub = createPub(title, author, pubDate);
  var publicAPI = {
    print() {
      printDetails(pub, URL);
    },
  };

  return publicAPI;
}
