# Bookstore API

A RESTful API for managing books, categories, and keywords built with Node.js, Express, Sequelize, and SQLite.

## Features

- CRUD operations for Books, Categories, and Keywords
- Many-to-many relationships between Books & Categories and Books & Keywords
- Nested categories with parent-child relationships
- Bulk delete for books

## Requirements

- Node.js
- npm

## Installation

- Install dependencies
  - `npm install`
- Create your database
  - `touch database.sqlite`
- Run migrations and seed the database
  - `npx sequelize-cli db:migrate`
  - `npx sequelize-cli db:seed:all`
- If you want to remove the database, you can remove the `.sqlite` file
  - `rm database.sqlite`
- Set your .env with
 ```
  DB_DIALECT=sqlite
  DB_STORAGE=./database.sqlite
```

## Running the App

- Start the server
  - `npm start`
- The API will be running at http://localhost:3000

## API Endpoints

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| GET    | /books             | List all books           |
| POST   | /books             | Create a new book        |
| GET    | /books/\:id        | Get book by ID           |
| PUT    | /books/\:id        | Update book by ID        |
| DELETE | /books/\:id        | Delete book by ID        |
| POST   | /books/bulk-delete | Bulk delete books by IDs |
| GET    | /categories        | List all categories      |
| POST   | /categories        | Create a new category    |
| GET    | /categories/\:id   | Get category by ID       |
| PUT    | /categories/\:id   | Update category by ID    |
| DELETE | /categories/\:id   | Delete category by ID    |
| GET    | /keywords          | List all keywords        |
| POST   | /keywords          | Create a new keyword     |
| GET    | /keywords/\:id     | Get keyword by ID        |
| PUT    | /keywords/\:id     | Update keyword by ID     |
| DELETE | /keywords/\:id     | Delete keyword by ID     |


## Testing

- Testing was done using Postman. A Postman collection is provided in `Book Management API.postman_collection.json`


## Notes

- Bulk delete expects a JSON body: `{ "ids": [1, 2, 3] }`