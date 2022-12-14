---
title: 'Personal Blog'
date: 'October 20, 2022'
description: 'Full-stack static site to showcase personal projects & blog posts.'
cover_image: '/images/projects/personal-blog/personal-blog.jpg'
tags: 'React,Next.js,Typescript,Tailwind'
---
View This Project In [GitHub](https://github.com/DomDevs2000/React-NextJS-Personal-Website)
# What is this project about?

I created this project for two purposes, to be able to showcase my most recent projects as well as a dedicated space to
post my blogs.

## Why did I decide to create this project?

My initial idea was to create a modern responsive website that showcases my projects & blog posts all in one
place.

## Why did i decide to use the technologies/languages that i did?

I decided to use [React](https://www.reactjs.org) for this project as I initially designed a modular website with a need
for multiple components being implemented and interchanged based on the page content. Using React Hooks such as useState, I could implement a dark mode theme toggle and search
functionality. Using, the useEffect hook I decided to use local storage to store the theme variable, so that users can return to the site or refresh the page and the theme will what the user has previously set.

Since I started learning [Typescript](https://www.typescriptlang.org/) I have implemented it into every project I have made, so
it was a no-brainer to include it in this one. Typescript allows for a better development experience.

[NextJS](https://nextjs.org) is a great tool to create static sites and was easy to implement with react and
typescript Creating a NextJs app with Typescript is simple. Running this command:
```npx create-next-app@latest --ts```
will create a
Next app with typescript included out of the box.

I decided to use [TailwindCSS](https://tailwindcss.com/) due to it being easy to implement into a NextJS application. By
using Tailwind I
learnt about mobile first design principles and adapting responsiveness to different screen sizes.
