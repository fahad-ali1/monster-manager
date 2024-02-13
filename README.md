# Monster Manager

A Node.js CRUD application for managing monsters. This application allows users to create, read, update, and delete monster entries using Express.js and MongoDB.

## View it live on render
Live on render: [Monster Manager](https://monster-manager.onrender.com)

## Features

- **Create**: Add new monsters to the database.
- **Read**: View a list of all monsters or retrieve details about a specific monster by its ID.
- **Update**: Modify the details of an existing monster.
- **Delete**: Remove a monster from the database.

## Technologies Used

- **Node.js**: The backend server is built using Node.
- **Express.js**: Express is used as the web application framework for Node.
- **MongoDB**: MongoDB is used as the database to store monster data.
- **Mongoose**: Library for MongoDB and Node.
- **Postman**: Postman is used for testing the API endpoints.

## Getting Started

To run the Monster Management App locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/fahad-ali1/monster-manager
    ```

2. Navigate to the project directory:

    ```bash
    cd monster-manager
    ```

3. Install dependencies:

    ```bash
    npm i
    ```

4. Set up the MongoDB database:

   ```bash
   ```

    a. OPTIONAL if connecting to external database - Create and set up your environment variables for a database in process.env
       ```bash
       {
        NAME='',
        PASSWORD=''
       }
       ```

6. Start the server:

    ```bash
    nodemon index.js
    ```

7. You can now access the application at `http://localhost:8000`.

## API Endpoints

- **GET /**: Get a list of all monsters.
- **GET /:id**: Get details about a monster by its ID.
- **POST /**: Create a new monster.
- **PUT /:id**: Update an existing monster.
- **DELETE /:id**: Delete a monster by its ID.
