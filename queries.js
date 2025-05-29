db.books.insertMany([
   {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: 'Charles Scribner\'s Sons'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.50,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: 'George Allen & Unwin'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.50,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    published_year: 1851,
    price: 12.50,
    in_stock: false,
    pages: 635,
    publisher: 'Harper & Brothers'
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Gothic Fiction',
    published_year: 1847,
    price: 9.99,
    in_stock: true,
    pages: 342,
    publisher: 'Thomas Cautley Newby'
  }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('68388c86b1c08255a8579a19'),
    '1': ObjectId('68388c86b1c08255a8579a1a'),
    '2': ObjectId('68388c86b1c08255a8579a1b'),
    '3': ObjectId('68388c86b1c08255a8579a1c'),
    '4': ObjectId('68388c86b1c08255a8579a1d'),
    '5': ObjectId('68388c86b1c08255a8579a1e'),
    '6': ObjectId('68388c86b1c08255a8579a1f'),
    '7': ObjectId('68388c86b1c08255a8579a20'),
    '8': ObjectId('68388c86b1c08255a8579a21'),
    '9': ObjectId('68388c86b1c08255a8579a22'),
    '10': ObjectId('68388c86b1c08255a8579a23'),
    '11': ObjectId('68388c86b1c08255a8579a24')
  }
}
db.books.find({ genre: "Programming" })
db.books.find({ genre: "Adventure" })
{
  _id: ObjectId('68388c86b1c08255a8579a23'),
  title: 'Moby Dick',
  author: 'Herman Melville',
  genre: 'Adventure',
  published_year: 1851,
  price: 12.5,
  in_stock: false,
  pages: 635,
  publisher: 'Harper & Brothers'
}
db.books.find({ published_year: { $gt: 2001 } })
db.books.find({ published_year: { $gt: 1980 } })
{
  _id: ObjectId('68388c86b1c08255a8579a22'),
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  genre: 'Fiction',
  published_year: 1988,
  price: 10.99,
  in_stock: true,
  pages: 197,
  publisher: 'HarperOne'
}
db.books.find({ author: "Paulo Coelho" })
{
  _id: ObjectId('68388c86b1c08255a8579a22'),
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  genre: 'Fiction',
  published_year: 1988,
  price: 10.99,
  in_stock: true,
  pages: 197,
  publisher: 'HarperOne'
}
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 12.5 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.books.find({
  $and: [
    { in_stock: true },
    { published_year: { $gt: 2010 } }
  ]
})
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })
{
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  price: 12.99
}
{
  title: '1984',
  author: 'George Orwell',
  price: 12.5
}
{
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  price: 9.99
}
{
  title: 'Brave New World',
  author: 'Aldous Huxley',
  price: 11.5
}
{
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  price: 14.99
}
{
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  price: 8.99
}
{
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  price: 7.99
}
{
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  price: 19.99
}
{
  title: 'Animal Farm',
  author: 'George Orwell',
  price: 8.5
}
{
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  price: 10.99
}
{
  title: 'Moby Dick',
  author: 'Herman Melville',
  price: 12.5
}
{
  title: 'Wuthering Heights',
  author: 'Emily Brontë',
  price: 9.99
}
db.books.find().sort({ price: 1 })
{
  _id: ObjectId('68388c86b1c08255a8579a1f'),
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  genre: 'Romance',
  published_year: 1813,
  price: 7.99,
  in_stock: true,
  pages: 432,
  publisher: 'T. Egerton, Whitehall'
}
{
  _id: ObjectId('68388c86b1c08255a8579a21'),
  title: 'Animal Farm',
  author: 'George Orwell',
  genre: 'Political Satire',
  published_year: 1945,
  price: 8.5,
  in_stock: false,
  pages: 112,
  publisher: 'Secker & Warburg'
}
{
  _id: ObjectId('68388c86b1c08255a8579a1e'),
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  genre: 'Fiction',
  published_year: 1951,
  price: 8.99,
  in_stock: true,
  pages: 224,
  publisher: 'Little, Brown and Company'
}
{
  _id: ObjectId('68388c86b1c08255a8579a1b'),
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  genre: 'Fiction',
  published_year: 1925,
  price: 9.99,
  in_stock: true,
  pages: 180,
  publisher: "Charles Scribner's Sons"
}
{
  _id: ObjectId('68388c86b1c08255a8579a24'),
  title: 'Wuthering Heights',
  author: 'Emily Brontë',
  genre: 'Gothic Fiction',
  published_year: 1847,
  price: 9.99,
  in_stock: true,
  pages: 342,
  publisher: 'Thomas Cautley Newby'
}
{
  _id: ObjectId('68388c86b1c08255a8579a22'),
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  genre: 'Fiction',
  published_year: 1988,
  price: 10.99,
  in_stock: true,
  pages: 197,
  publisher: 'HarperOne'
}
{
  _id: ObjectId('68388c86b1c08255a8579a1c'),
  title: 'Brave New World',
  author: 'Aldous Huxley',
  genre: 'Dystopian',
  published_year: 1932,
  price: 11.5,
  in_stock: false,
  pages: 311,
  publisher: 'Chatto & Windus'
}
{
  _id: ObjectId('68388c86b1c08255a8579a1a'),
  title: '1984',
  author: 'George Orwell',
  genre: 'Dystopian',
  published_year: 1949,
  price: 12.5,
  in_stock: true,
  pages: 328,
  publisher: 'Secker & Warburg'
}
{
  _id: ObjectId('68388c86b1c08255a8579a23'),
  title: 'Moby Dick',
  author: 'Herman Melville',
  genre: 'Adventure',
  published_year: 1851,
  price: 12.5,
  in_stock: false,
  pages: 635,
  publisher: 'Harper & Brothers'
}
{
  _id: ObjectId('68388c86b1c08255a8579a19'),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Fiction',
  published_year: 1960,
  price: 12.99,
  in_stock: true,
  pages: 336,
  publisher: 'J. B. Lippincott & Co.'
}
{
  _id: ObjectId('68388c86b1c08255a8579a1d'),
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1937,
  price: 14.99,
  in_stock: true,
  pages: 310,
  publisher: 'George Allen & Unwin'
}
{
  _id: ObjectId('68388c86b1c08255a8579a20'),
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1954,
  price: 19.99,
  in_stock: true,
  pages: 1178,
  publisher: 'Allen & Unwin'
}
db.books.find().sort({ price: -1 })
{
  _id: ObjectId('68388c86b1c08255a8579a20'),
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1954,
  price: 19.99,
  in_stock: true,
  pages: 1178,
  publisher: 'Allen & Unwin'
}
{
  _id: ObjectId('68388c86b1c08255a8579a1d'),
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1937,
  price: 14.99,
  in_stock: true,
  pages: 310,
  publisher: 'George Allen & Unwin'
}
{
  _id: ObjectId('68388c86b1c08255a8579a19'),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Fiction',
  published_year: 1960,
  price: 12.99,
  in_stock: true,
  pages: 336,
  publisher: 'J. B. Lippincott & Co.'
}
{
  _id: ObjectId('68388c86b1c08255a8579a1a'),
  title: '1984',
  author: 'George Orwell',
  genre: 'Dystopian',
  published_year: 1949,
  price: 12.5,
  in_stock: true,
  pages: 328,
  publisher: 'Secker & Warburg'
}
{
  _id: ObjectId('68388c86b1c08255a8579a23'),
  title: 'Moby Dick',
  author: 'Herman Melville',
  genre: 'Adventure',
  published_year: 1851,
  price: 12.5,
  in_stock: false,
  pages: 635,
  publisher: 'Harper & Brothers'
}
{
  _id: ObjectId('68388c86b1c08255a8579a1c'),
  title: 'Brave New World',
  author: 'Aldous Huxley',
  genre: 'Dystopian',
  published_year: 1932,
  price: 11.5,
  in_stock: false,
  pages: 311,
  publisher: 'Chatto & Windus'
}
{
  _id: ObjectId('68388c86b1c08255a8579a22'),
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  genre: 'Fiction',
  published_year: 1988,
  price: 10.99,
  in_stock: true,
  pages: 197,
  publisher: 'HarperOne'
}
{
  _id: ObjectId('68388c86b1c08255a8579a1b'),
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  genre: 'Fiction',
  published_year: 1925,
  price: 9.99,
  in_stock: true,
  pages: 180,
  publisher: "Charles Scribner's Sons"
}
{
  _id: ObjectId('68388c86b1c08255a8579a24'),
  title: 'Wuthering Heights',
  author: 'Emily Brontë',
  genre: 'Gothic Fiction',
  published_year: 1847,
  price: 9.99,
  in_stock: true,
  pages: 342,
  publisher: 'Thomas Cautley Newby'
}
{
  _id: ObjectId('68388c86b1c08255a8579a1e'),
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  genre: 'Fiction',
  published_year: 1951,
  price: 8.99,
  in_stock: true,
  pages: 224,
  publisher: 'Little, Brown and Company'
}
{
  _id: ObjectId('68388c86b1c08255a8579a21'),
  title: 'Animal Farm',
  author: 'George Orwell',
  genre: 'Political Satire',
  published_year: 1945,
  price: 8.5,
  in_stock: false,
  pages: 112,
  publisher: 'Secker & Warburg'
}
{
  _id: ObjectId('68388c86b1c08255a8579a1f'),
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  genre: 'Romance',
  published_year: 1813,
  price: 7.99,
  in_stock: true,
  pages: 432,
  publisher: 'T. Egerton, Whitehall'
}
db.books.find().skip(0).limit(5)
{
  _id: ObjectId('68388c86b1c08255a8579a19'),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Fiction',
  published_year: 1960,
  price: 12.99,
  in_stock: true,
  pages: 336,
  publisher: 'J. B. Lippincott & Co.'
}
{
  _id: ObjectId('68388c86b1c08255a8579a1a'),
  title: '1984',
  author: 'George Orwell',
  genre: 'Dystopian',
  published_year: 1949,
  price: 12.5,
  in_stock: true,
  pages: 328,
  publisher: 'Secker & Warburg'
}
{
  _id: ObjectId('68388c86b1c08255a8579a1b'),
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  genre: 'Fiction',
  published_year: 1925,
  price: 9.99,
  in_stock: true,
  pages: 180,
  publisher: "Charles Scribner's Sons"
}
{
  _id: ObjectId('68388c86b1c08255a8579a1c'),
  title: 'Brave New World',
  author: 'Aldous Huxley',
  genre: 'Dystopian',
  published_year: 1932,
  price: 11.5,
  in_stock: false,
  pages: 311,
  publisher: 'Chatto & Windus'
}
{
  _id: ObjectId('68388c86b1c08255a8579a1d'),
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1937,
  price: 14.99,
  in_stock: true,
  pages: 310,
  publisher: 'George Allen & Unwin'
}
db.books.find().skip(5).limit(5)
{
  _id: ObjectId('68388c86b1c08255a8579a1e'),
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  genre: 'Fiction',
  published_year: 1951,
  price: 8.99,
  in_stock: true,
  pages: 224,
  publisher: 'Little, Brown and Company'
}
{
  _id: ObjectId('68388c86b1c08255a8579a1f'),
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  genre: 'Romance',
  published_year: 1813,
  price: 7.99,
  in_stock: true,
  pages: 432,
  publisher: 'T. Egerton, Whitehall'
}
{
  _id: ObjectId('68388c86b1c08255a8579a20'),
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1954,
  price: 19.99,
  in_stock: true,
  pages: 1178,
  publisher: 'Allen & Unwin'
}
{
  _id: ObjectId('68388c86b1c08255a8579a21'),
  title: 'Animal Farm',
  author: 'George Orwell',
  genre: 'Political Satire',
  published_year: 1945,
  price: 8.5,
  in_stock: false,
  pages: 112,
  publisher: 'Secker & Warburg'
}
{
  _id: ObjectId('68388c86b1c08255a8579a22'),
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  genre: 'Fiction',
  published_year: 1988,
  price: 10.99,
  in_stock: true,
  pages: 197,
  publisher: 'HarperOne'
}
db.books.aggregate([
  { $group: { _id: "$genre", avg_price: { $avg: "$price" } } }
])
{
  _id: 'Fiction',
  avg_price: 10.74
}
{
  _id: 'Romance',
  avg_price: 7.99
}
{
  _id: 'Dystopian',
  avg_price: 12
}
{
  _id: 'Adventure',
  avg_price: 12.5
}
{
  _id: 'Fantasy',
  avg_price: 17.49
}
{
  _id: 'Gothic Fiction',
  avg_price: 9.99
}
{
  _id: 'Political Satire',
  avg_price: 8.5
}
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])
{
  _id: 'George Orwell',
  count: 2
}
db.books.aggregate([
  {
    $group: {
      _id: { $concat: [{ $substr: ["$published_year", 0, 3] }, "0s"] },
      count: { $sum: 1 }
    }
  }
])
{
  _id: '1810s',
  count: 1
}
{
  _id: '1940s',
  count: 2
}
{
  _id: '1950s',
  count: 2
}
{
  _id: '1960s',
  count: 1
}
{
  _id: '1980s',
  count: 1
}
{
  _id: '1850s',
  count: 1
}
{
  _id: '1840s',
  count: 1
}
{
  _id: '1930s',
  count: 2
}
{
  _id: '1920s',
  count: 1
}
db.books.createIndex({ title: 1 })
title_1
db.books.createIndex({ author: 1, published_year: -1 })
author_1_published_year_-1
db.books.find({ title: "1984" }).explain("executionStats")
