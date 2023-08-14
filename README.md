
<div align="center">
  <h1 align="center">Mid Term Project</h1>

  <p align="center">
     Tokopedia Play Clone Project (Backend Only) with Node.JS and MongoDB
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#database-collection">Database Collection</a>
    </li>
        <li>
      <a href="#api-structures">API Structures</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
  </ol>
</details>

## Database Collection
### video
```
{
  _id: ObjectId
  title: string
  channel: string
  imgUrl: string
  videoUrl: string
  category: array
  likeCounter: integer
}
```

### product
```
{
  _id: ObjectId
  title: string
  price: integer
  productImage: string
  productUrl: string
  stock: integer
  videoId: string
}
```

### comments
```
{
  _id: ObjectId
  username: string
  profilePicture: string
  comment: string
  timeStamp: string
  videoId: string
}
```

## API Structures

| Methods |Command |Description |
| --- | --- | --- |
| GET | /api/video | Show all video in db |
| GET | /api/product | Show all product in db  |
| GET | /api/product/:id | Show all product based on videoId  |
| GET | /api/comment/:id | Show all comment based on videoId |
| POST | /api/comment | Insert comment to video based on videoId |
| POST | /api/video | Insert video to db (ADMIN)|
| POST | /api/product  | Insert product to db of videoId (ADMIN) |

**GET /api/video**
----
  Returns all video in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  ```
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  ```
* **Success Response:**  
  *Content: (*Example)**  
  ```
  {
    "video": [
      {
          "_id": "64c1496dbf89c9d5953c8c47",
          "title": "THE WEAKEST LINK 2: BETA SQUAD EDITION",
          "channel": "Beta Squad",
          "imgUrl": "https://i3.ytimg.com/vi/mF3XdQ6ttQY/maxresdefault.jpg",
          "videoUrl": "https://youtu.be/mF3XdQ6ttQY",
          "category": [
              "vlog",
              "show",
              "gaming"
          ],
          "likeCounter": 0,
          "__v": 0
      },
    ]
  }
  ```

**GET /api/product/:id**
----
  Returns all product based on videoId.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  ```
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  ```
* **Success Response:**  
  *Content: (*Example)**  
  ```
  {
    "ListProduct": [
        {
            "_id": "64c286daba44c98217cce468",
            "title": "Air Jordan 1",
            "price": 5400000,
            "productImage": "https://static.nike.com/a/images",
            "productUrl": "https://www.tokopedia.com/807garage/air-jordan-1",
            "stock": 2,
            "videoId": "64c1496dbf89c9d5953c8c47",
            "__v": 0
        },
    ]
  }
  ```

**GET /api/comment/:id**
----
  Returns all comment based on videoId.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Headers**  
  ```
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  ```
* **Success Response:**  
  *Content: (*Example)**  
  ```
  {
    "comment": [
        {
            "_id": "64c28e11516594c0917dcef6",
            "username": "31231232",
            "profilePictue": "default",
            "comment": "100 lepas bang?",
            "timeStamp": "7/27/2023, 10:32:33 PM",
            "videoId": "64c1496dbf89c9d5953c8c47",
            "__v": 0
        }
    ]
  }
  ```

**POST /api/comment/**
----
  Insert comment to video based in videoId
* **URL Params**  
  None
* **Data Params**  
  ```
    {
      username: string,
      comment: string,
      videoId: string
    }
  ```
* **Headers**  
  ```
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  ```
* **Success Response:**  
  *Content: (*Example)**  
  ```
  {
      "status": "Success",
      "comment": {
          "username": "31231232",
          "profilePictue": "default",
          "comment": "100 lepas bang?",
          "timeStamp": "7/27/2023, 11:51:26 PM",
          "videoId": "64c1496dbf89c9d5953c8c47",
          "_id": "64c2a08e5b5399bb7b63ca10",
          "__v": 0
      }
  }
  ```
* **Failed Response:**  
  *Content: (*Example)**  
  ```
  {
      "status": "Failed",
      "message": <error.message>
  }
  ```
  
<!-- GETTING STARTED -->

## Getting Started

To start project, just clone this repo or [Use this template](https://github.com/migellamp/midterm-gigih/generate)

### Prerequisites

Before installation, make sure you have the following prerequisites

-   NPM
    ```sh
    npm install npm@latest -g
    ```
-   Postgresql server

### Installation

1. Clone the repo or simply select [Use this template](https://github.com/migellamp/midterm-gigih/generate)
    ```sh
    git clone https://github.com/migellamp/midterm-gigih.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Create `.env` file in main directory
4. Insert database mongodb url and PORT to `.env` file
   ```
   DATABASE_URL=mongodb://127.0.0.1:27017/tokopediaplay
   PORT=3005
   ```
5. Run the server
    ```sh
    npm run start
    ```
6. Insert data first to database, before testing it!

<p align="right">(<a href="#top">back to top</a>)</p>
