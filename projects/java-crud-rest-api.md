---
title: 'Java CRUD REST API'
date: 'December 28, 2022'
description: 'A paginated REST API full of random users, built with CRUD functionality.'
cover_image: '/images/projects/java-api/java-logo1.png'
tags: 'Java,Spring Boot,JPA,MySQL,Maven'
---

**Use Postman/Insomnia to create GET/POST/PUT/DELETE requests**

View This Project In [GitHub](https://github.com/DomDevs2000/SpringBoot-CRUD-REST-API)

# What is this project about?

I created a paginated REST API with CRUD functionality, using Spring Boot, JPA, MySQL and Maven. The api allows users to
create,update,read or delete a plethora of random users with data such as first and last names as well as age.
This api also includes custom exception handling and validation. This project is unit tested using JUnit5.


## Why did I decide to create this project?

I had previously made a crud rest api using Typescript and Node.js but as I am currently learning Java I decided
replicate a similar project, to further enhance my skill set and to step out of my comfort zone.


### How to use the API endpoints

To get all users use a GET requests to the URL: /users
To get a single user by id use the URL: /users/id/```id```
To create a new note, use a POST request to /users/create ensuring "content-type: application/JSON" is set. JSON body should
be as follows:

```
{
"firstname": "John",
"lastname": "Doe",
"age": 18
}
```

To update a note, use a PUT request to /users/update/```id``` ensuring "content-type: application/JSON" is set. JSON body should
be as follows:

```
{
"firstname": "Jane",
"lastname": "Doe",
"age": 25
}
```

To delete a note, use a DELETE request to /users/delete```id``` and the API will delete the note by the id.
