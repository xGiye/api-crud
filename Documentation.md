# Person API Documentation

This REST API allows you to perform CRUD (Create, Read, Update, Delete) operations on a "person" resource. It is built using Node.js, Express.js, and Mongoose for MongoDB.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Request/Response Formats](#requestresponse-formats)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (>=12.x)
- MongoDB (>=3.x)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```git clone https://github.com/xGiye/api-crud.git```

   ```cd person-api```


3. Install dependencies:

   `npm install`

4. Start the server:

   ```node app.js

   ```

## Usage

### Endpoints

The API provides the following endpoints:

- GET /api: Retrieve a list of all people or filter by name.
- GET /api/:idOrName: Retrieve a person by ID or name.
- POST /api: Create a new person.
- PATCH /people/:idorName: Update a person by ID.
- DELETE /people/:idorName: Delete a person by ID.

### Request/Response Formats

    Creating a New Person (POST /people)

#### Request:

```{
  "name": "John",
  "position": "Boss",
  "id": 2,
}
```

#### Response (201 Created):

```{
  "_id": "5fbb5f0f4f93272b54d62e65",
  "name": "John",
  "id": 2,
}
}
```
