const books = [
  {
    bookName: "The Great Gatsby",
    publishDate: "1925",
    edition: "First Edition",
    genre: "Fiction",
  },
  {
    bookName: "To Kill a Mockingbird",
    publishDate: "1960",
    edition: "50th Anniversary Edition",
    genre: "Fiction",
  },
  {
    bookName: "1984",
    publishDate: "1949",
    edition: "Signet Classics Edition",
    genre: "Dystopian",
  },
  {
    bookName: "Pride and Prejudice",
    publishDate: "1813",
    edition: "Penguin Classics Edition",
    genre: "Romance",
  },
  {
    bookName: "The Catcher in the Rye",
    publishDate: "1951",
    edition: "Little, Brown and Company Edition",
    genre: "Fiction",
  },
  {
    bookName: "Moby-Dick",
    publishDate: "1851",
    edition: "Harper & Brothers First Edition",
    genre: "Adventure",
  },
  {
    bookName: "War and Peace",
    publishDate: "1869",
    edition: "Vintage Classics Edition",
    genre: "Historical",
  },
  {
    bookName: "The Hobbit",
    publishDate: "1937",
    edition: "HarperCollins Anniversary Edition",
    genre: "Fantasy",
  },
  {
    bookName: "Brave New World",
    publishDate: "1932",
    edition: "Vintage Books Reissue ",
    genre: "Science ",
  },
  {
    bookName: "The Alchemist",
    publishDate: "1988",
    edition: "HarperOne Special Illustrated Anniversary Edition ",
    genre: "Adventure",
  },
];

//console.log(books);

//let res1 = books.filter((bk) =>  bk.bookName === 'The Great Gatsby' )
//console.log(res1);

//let res2 = books.filter((bk)=> bk.genre === 'Fantasy')
//console.log(res2);

//let res3 = books.filter((bk)=> bk.publishDate >1930)
//console.log(res3);

let res4 = books.filter((bk)=> bk.publishDate >1930 && bk.genre === "Fantasy")
console.log(res4);


