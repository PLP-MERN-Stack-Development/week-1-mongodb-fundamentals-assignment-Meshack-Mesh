# PLP Bookstore MongoDB Project

This project demonstrates how to use MongoDB with Node.js to manage a simple bookstore database. It includes scripts to insert sample books into a MongoDB collection and run various queries.

## 📁 Project Structure

- `insert_books.js` – Inserts a list of sample books into the `books` collection.
- `queries.js` – Runs sample queries against the `books` collection.

## 📦 Requirements

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) running locally on default port
- MongoDB Node.js Driver

## 🛠️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/plp-bookstore.git
   cd plp-bookstore
````

2. **Install Dependencies**

   ```bash
   npm install mongodb
   ```

3. **Ensure MongoDB is Running**
   Make sure your MongoDB server is running locally on `mongodb://localhost:27017`.

## 🚀 How to Run the Scripts

### Insert Sample Books

Inserts 10 sample book documents into the `books` collection:

```bash
node insert_books.js
```

### Run Sample Queries

Performs a variety of useful queries (find by author, genre, year, etc.):

```bash
node queries.js
```

### Drop the Books Collection

Deletes the `books` collection from the database:

```bash
node drop_books.js
```

## 📚 Book Document Structure

Each book in the collection contains the following fields:

```json
{
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Genre",
  "published_year": 2000,
  "price": 10.99,
  "in_stock": true,
  "pages": 300,
  "publisher": "Publisher Name"
}
```

## 🧪 Example Queries

* Find all books:
  `db.books.find()`

* Find by author:
  `db.books.find({ author: "George Orwell" })`

* Books published after 1950:
  `db.books.find({ published_year: { $gt: 1950 } })`

* Books in stock:
  `db.books.find({ in_stock: true })`

## 👨‍💻 Author

PLP Student Project – MongoDB Fundamentals
