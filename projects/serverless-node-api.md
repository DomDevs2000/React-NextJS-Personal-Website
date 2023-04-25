---
title: 'Serverless Node.js REST API'
date: 'October 13, 2022'
description: 'A REST API built to create notes, with full CRUD functionality.'
cover_image: '/images/projects/crud-api/nodejs-logo.png'
tags: 'Typescript,Node.js,MongoDB,Express,AWS'
---

View This Project [Live](https://dom-devs-node-api.com/notes)

View This Project In [GitHub](https://github.com/DomDevs2000/REST-API)

# What is this project about?

I created this API to allow users to create, select or delete specific lorem ipsum notes to be used on any website where
they may want random lorem impsum text by using a 3rd-party API. I used NodeJS with ExpressJS for the API endpoints and
MongoDB for the database. For unit testing I used Jest and Supertest to test the API endpoints.

## Why did I decide to create this project?

I wanted to create a back-end only project to experiment, learn and develop my skills in dealing with databases and
RESTful API design.

## Why did I decide to use the technologies/languages that I did?

Using [NodeJs](https://nodejs.org/en/) with [ExpressJS](https://expressjs.com) is a great framework for developing
server-side code. Creating an express server is much simpler and easier to create and read than creating a NodeJs HTTP
server.

I decided to use [MongoDB](https://www.mongodb.com/) for this project, using Atlas to create a cluster, and Compass as
the GUI, it was simple to create a database and collection to store my data.

Since I started learning [Typescript](https://www.typescriptlang.org/) I have implemented it into every project I have
made, so
it was a no-brainer to include it in this one. Typescript allows for a better development experience.

I decided to deploy this app to AWS API gateway, using a Lambda function written in the application. Using API gateway
has many benefits:

1.Scalability: AWS API Gateway is a fully managed service that automatically scales to handle a large
number of requests, ensuring that your API remains responsive even under heavy loads.

2.Security: AWS API Gateway provides robust security features such as authentication, authorization, and encryption,
allowing you to protect your API from unauthorized access and data breaches.

3.Customisation: AWS API Gateway allows you to customize your API by defining RESTful APIs, creating custom domains, and
integrating with other AWS services like AWS Lambda or Amazon EC2.

4.Cost-effectiveness: With AWS API Gateway, you pay only for the API calls that you receive and the amount of data
transferred, making it a cost-effective solution for deploying and managing your API.

5.Monitoring and analytics: AWS API Gateway provides comprehensive monitoring and analytics tools, allowing you to track
the performance of your API, detect issues, and optimize your API to improve its performance and user experience.

### How to use the API endpoints

**Use Postman/Insomnia to create GET/POST/PUT/DELETE requests**

To get all notes use a GET requests to the URL: /notes
To get a single note by id use the URL: /notes/id/`id`
To create a new note, use a POST request to /notes ensuring "content-type: application/JSON" is set. JSON body should
be as follows:

```
{
"title": "new note",
"body": "new note"
}
```

To update a note, use a PUT request to /notes/`id` ensuring "content-type: application/JSON" is set. JSON body should
be as follows:

```
{
"title": "updated note",
"body": "updated note"
}
```

To delete a note, use a DELETE request to /notes/`id` and the API will delete the note by the id.
