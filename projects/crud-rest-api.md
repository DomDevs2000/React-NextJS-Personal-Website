---
title: 'Notes CRUD API'
date: 'October 13, 2022'
description: 'A REST API built to create notes, with full CRUD functionality.'
cover_image: '/images/projects/crud-api/nodejs-logo.png'
tags: 'Javascript,NodeJS,MongoDB,Express'
---
View This Project [Live](https://crud-rest-api.onrender.com/notes)
(Use postman/insomnia in order to create GET/POST/PUT/DELETE requests)
View This Project In [GitHub](https://github.com/DomDevs2000/REST-API)

# What is this project about?

I created this API to allow users to create, select or delete specfic lorem ipsum notes to be used in any website where
they may want random lorem impsum text by using a 3rd-party API. I used NodeJS with ExpressJS for the API endpoints and
MongoDB for the database. For unit-testing I used Jest and Supertest to test the API endpoints.

## Why did I decide to create this project?

I wanted to create back-end only project to experiment and increase my skills dealing with databases and API design.

## Why did I decide to use the technologies/languages that I did?

Using [NodeJs](https://nodejs.org/en/) with [ExpressJS](https://expressjs.com) is a great framework for developing
server-side code. Creating an express server is much simpler and easier to create and read than creating a NodeJs http server.

I decided to use [MongoDB](https://www.mongodb.com/) for this project, using Atlas to create a cluster, and Compass as
the GUI, it was simple to create a database and collection to store my data.

Since I started learning [Typescript](https://www.typescriptlang.org/) I have implemented it into every project I have
made, so
it was a no-brainer to include it in this one. Typescript allows for a better development experience.

### How to use the API endpoints

To get all notes use a GET requests to the url: /notes
To get a single note by id use the url: /notes/id/```id```
To create a new note, use a POST requests to /notes ensuring "content-type: application/JSON" is set. JSON body should
be as follows:

```
{
"title": "new note",
"body": "new note"
}
```

To update a note, use a PUT request to /notes/```id``` ensuring "content-type: application/JSON" is set. JSON body should
be as follows:

```
{
"title": "updated note",
"body": "updated note"
}
```

To delete a note, use a DELETE request to /notes/```id``` and the API will delete the note by the id.