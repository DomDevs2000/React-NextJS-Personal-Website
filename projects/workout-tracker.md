---
title: 'Workout Tracker'
date: 'March 28, 2023'
description: 'Track strength and cardio workouts and save data such as reps, sets and weight.'
cover_image: '/images/projects/workout-tracker/workout-tracker.png'
tags: 'React,PostgreSQL,Terraform,AWS'
---

View This Project [Live](https://d8rrjwp3y8cru.cloudfront.net/)

View This Project In [GitHub](https://www.github.com/DomDevs2000/react-supabase-workout-tracker)

# What is this project about?

Created a web application that allows users to track workouts that can be viewed, edited and deleted.
Functionality includes account and workout creation for strength and cardio training with data such as sets, reps,
weight, distance and time.
Current roadmap includes converting the project to React Native,so it can be used as a native mobile application
available on the Apple and Android app stores.
Deployed to an AWS S3 bucket created with Terraform and Docker, efficient CI/CD pipeline achieved via CircleCI.

## Why did I decide to create this project?

My initial idea was to create a modern responsive website that allows users to track their workouts as well as edit and
delete previous ones.

## Why did I decide to use the technologies/languages that I did?

I decided to use [React](https://www.reactjs.org) for this project as I initially designed a modular website with a need
for multiple components being implemented and interchanged based on the page content. Using React Hooks such as useState
and useEffect, I could save data and edit previously stored data in a PostgreSQL database when the page component needs
it.

I decided to use [TailwindCSS](https://tailwindcss.com/) due to it being easy to implement into and use in any
application. By
using Tailwind I learnt about mobile first design principles and adapting responsiveness to different screen sizes.

I chose [Terraform](https://www.terraform.io/) to learn Infrastructure as Code (IaC) as it offers a user-friendly Domain Specific Language (DSL)
called HCL (HashiCorp Configuration Language) for creating cloud infrastructure. This makes it accessible for
non-development teams such as operations who can use it without knowing a programming language. With the Terraform CLI,
pushing infrastructure changes to AWS was simple and straightforward. As this was a React application, I decided to
create an S3 bucket to store the app files as it is secure, scalable and low cost. I used CloudFront as the CDN to
deliver the website securely, by design, delivering data out of CloudFront can be more cost-effective than delivering it
from S3.
