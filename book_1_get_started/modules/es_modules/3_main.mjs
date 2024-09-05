import { create as newBlogPost } from './2_blogpost.mjs';

var forAgainstLet = newBlogPost(
  'For and against let',
  'Kyle Simpson',
  'October 27, 2014',
  'https://davidwalsh.name/for-and-against-let'
);

forAgainstLet.print();
