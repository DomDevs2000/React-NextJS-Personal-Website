---
title: 'User Authentication'
date: 'October 14, 2022'
description: 'Allows users to sign up and login, using PassportJS for authentication.'
cover_image: '/images/projects/user-auth/login.png'
tags: 'Typescript,Node.js,Express,SQLite'
---
View this project in [GitHub](https://github.com/DomDevs2000/user-auth)
View this project [Live](https://user-auth-fn0e.onrender.com)

# Full-Stack User Authentication

# What is this project?

This is a user account creation and login page where users can create an account and login. Users are authorised and
then logged in, with their username being displayed as logged in if successful.

## What technologies did I use?

The front end was created with EJS as the template engine and standard CSS to style the pages. The back end was created
using Typescript, Node.js and Express. THe users are stored ina SQLite database. For the user authentication I used a
package
called Passport.js, which is a flexible and modular authentication middleware for Node.js. For password security,
I used Bcrpyt.js to hash the passwords.
