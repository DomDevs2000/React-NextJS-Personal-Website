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

I created a paginated REST API with CRUD functionality, using Spring Boot, JPA, MySQL and Maven. The API allows users to
create,update,read or delete a plethora of random users with data such as first and last names as well as age.
This API also includes custom exception handling and validation. This project is unit tested using JUnit5 and MockMVC.


## Why did I decide to create this project?

I had previously made a [CRUD REST API](https://www.dom-devs.tech/projects/crud-rest-api) using Typescript and Node.js but as I am currently learning Java, I decided
replicate a similar project, to further enhance my skill set and to step out of my comfort zone. While learning Java I
wanted to create a backend project to familiarise myself with how a full project is written and structured, and 
understand its differences and nuances compared to my Typescript and Node.js API project.


### How to use the API endpoints

To get all users submit a GET request to  /users.

To create a new user, submit a POST request to /users ensuring "content-type: application/JSON" is set. JSON body should
be as follows:

```
{
"firstname": "John",
"lastname": "Doe",
"age": 18
}
```

To update a user, submit a PUT request to /users/```id``` ensuring "content-type: application/JSON" is set. JSON body should
be as follows:

```
{
"firstname": "Jane",
"lastname": "Doe",
"age": 25
}
```

To delete a user, submit a DELETE request to /users/```id``` and the API will delete the user by the id.


To get a single user by id, submit a GET request to  /users/```id```

To get a user by age, submit a GET request to /users/age/```age```.

To get a user by first name, submit a GET request to /users/firstname/```firstname```.

To get a user by first name, submit a GET request to /users/lastname/```lastname```.