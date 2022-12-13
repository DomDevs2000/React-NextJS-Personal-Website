---
title: 'React Shopping Cart'
date: 'November 29, 2022'
description: 'Shopping Cart to learn/showcase state management using React'
cover_image: '/images/projects/react-shopping-cart/react-shopping-cart.png'
tags: 'Javascript,React, CSS'
---

View this project in [GitHub](https://github.com/DomDevs2000/react-shopping-cart)

View this project [Live](https://react-shopping-cart-steel-mu.vercel.app/)

# What is this project about?

This site is a shopping cart where users can add and remove games from a cart and access the cart on its own separate page.
Once an item is added to the cart it cannot be added again until it is removed. If an item in the cart is removed from the
cart page, it is also removed from the cart on the store page. The total price of all items in the cart is updated accordingly.

## Why did I decide to create this project?

I wanted to create a project which can showcase my React skills, specifically state management and the use of several React hooks.

## What technologies did I use?

The choice to use React was an obvious one, as the cart itself would have various data and state changes, using the [useState](https://reactjs.org/docs/hooks-state.html) hook,
React allows me to update and re-render the cart component once the state has changed. I decided to use
[createContext](https://reactjs.org/docs/context.html) as the context provider, combined with React Router to allow the cart data to be
passed through each component on each page. As the site has 2 pages, one for the store and one for the final cart,
I decided to use the [useEffect](https://reactjs.org/docs/hooks-effect.html) hook in order to save the current cart to local storage, so that the data
can be accessed immediately in the cart page, without the need to re-render the entire application.

### To do for the future/work in progress

In the future, I will make this website fully responsive, so that it can be displayed on mobile.
