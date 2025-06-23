 Simple Express.js REST API (my 3mtt project)

This is a simple RESTful API built with Express.js to demonstrate CRUD operations using an in-memory datastore. It includes routes for managing a list of items, each with an `id`, `name`, and `description`.

Features

Built with Node.js & Express.js
Full CRUD functionality
In-memory data store
Input validation
Error handling (400, 404, 500)
Modular route structure

Setup Instructions

1. Clone the Repository

```bash
git clone https://github.com/your-username/express-rest-api.git
cd express-rest-api
2. Install Dependencies
bash
Copy code
npm install
3. Start the Server
bash
Copy code
node app.js
4. Open in Browser or API Tool
Visit: http://localhost:3000/

 API Documentation
  Base URL

http://localhost:3000
🔄 Endpoints
1. GET /
Description: Returns a greeting message.

Response:

json
Copy code
"Hello, World!"
2. GET /items
Description: Get all items.

Response:

[
  {
    "id": 1,
    "name": "Item One",
    "description": "This is item one"
  },
  ...
]
3. GET /items/:id
Description: Get a single item by ID.

Response:

{
  "id": 1,
  "name": "Item One",
  "description": "This is item one"
}
Errors:

404 Not Found: If item does not exist.

4. POST /items
Description: Create a new item.

Request Body:

{
  "name": "New Item",
  "description": "A short description"
}
Response:

{
  "id": 3,
  "name": "New Item",
  "description": "A short description"
}
Errors:

400 Bad Request: If name or description is missing.

5. PUT /items/:id
Description: Update an item by ID.

Request Body:

{
  "name": "Updated Name",
  "description": "Updated Description"
}
Response:

{
  "id": 1,
  "name": "Updated Name",
  "description": "Updated Description"
}
Errors:

404 Not Found: If item does not exist.

400 Bad Request: If input is invalid.

6. DELETE /items/:id
Description: Delete an item by ID.

Response:

{
  "message": "Item deleted",
  "item": {
    "id": 1,
    "name": "Item One",
    "description": "This is item one"
  }
}
Errors:

404 Not Found: If item does not exist.

Error Handling
Code	Meaning	Reason
400	Bad Request	Missing or invalid input data
404	Not Found	Item or route not found
500	Internal Server Error	Unexpected server error

Example Test Using curl

curl -X POST http://localhost:3000/items \
-H "Content-Type: application/json" \
-d '{"name": "Book", "description": "A mystery novel"}'

Project Structure

express-rest-api/
├── app.js
├── routes/
│   └── items.js
├── package.json
└── README.md

```
