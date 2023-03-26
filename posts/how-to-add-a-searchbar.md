---
title: 'How To Create A Search Bar'
date: 'February 7, 2023'
description: 'A short and sweet tutorial on how to create and implement a search bar in React'
cover_image: '/images/posts/search-bar.jpg'
tags: 'React'
read_length: '3 min'
---

### Step 1 - Initial React Setup

If you want to create a new react project, run the command:

```
npx create-react-app search-app
```

Refer to [React](https://reactjs.org/docs/create-a-new-react-app.html) on how to get started with your specific project.

### Step 2 - File Setup

Create a component folder inside the **./src** folder. Inside this folder, create a new file called searchBar.jsx and be
sure to import react and useState by including this line at the top of your file:

```javascript
import React, { useState } from 'react';
```

### Step 3 - Creating The Component

Now we need to create a functional component:

```javascript
const searchBar = () => {};
```

### Step 4 - useState Hook

Inside this component, we want to include the React [useState](https://reactjs.org/docs/hooks-state.html) hook.

```javascript
const searchBar = () => {
    const [searchInput, setSearchInput] = useState('');
};
```

### Step 5 - Data!

Next, we need some data that we want to search against. In this example, we will be using an array of countries. To do
this we will create a variable inside the component:

```javascript
const countries = [

    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent"Asia" },

];

```

### Step 6 - Handler Function

We will now create a handler function that will set the state of **setSearchInput** to the value that is being entered
by the user.

```javascript
const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
};
```

The **e.preventDefault()** prevents the default form behaviour, which would reload the page.

### Step 7 - Validation and filtering of the data

```javascript
const search = countries.filter((country) => {
    if (searchInput == '') {
        return;
    } else if (country.name.toLowerCase().includes(searchInput.toLowerCase())) {
        return country;
    }
});
```

This is a simple filter method, that goes over the **countries** array and checks if the searchInput (in lowercase) is
included in the country's name(in lowercase).

These validations are so important, sometimes users type in lowercase,
uppercase or even camelcase. If our data has multiple case types we want to check that it matches our search input.
This is done by converting both the data and the user input to lowercase and then seeing if the search input is
included. If we did not have these validations, a search input of "japan" will return no matching results even though
there is one "Japan" in the array.

Now we need to add a map method on this so that for each matching result, we can return a list inside a div. Here's what
the full code should look like:

```javascript
const searchResults = countries
    .filter((country) => {
        if (searchInput == '') {
            return;
        } else if (
            country.name.toLowerCase().includes(searchInput.toLowerCase())
        ) {
            return country;
        }
    })
    .map((country, key) => {
        if (searchInput)
            return (
                <div>
                    {country.name}
                    {country.continent}
                </div>
            );
    });
```

### Step 8 - Form

Now we want to create a search input inside this component using jsx:

```javascript
return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
        />
        <button type="submit">Search</button>
    </form>
);
```

This code creates a simple form, on submission of the form, it calls the handleSubmit function we created earlier.
When the input inside the search bar changes, an onChange event is omitted, setting the current state of **setSearchTerm
**
to the current value of the input.

### Step 9 - Outputting The Data

Now, we want to output the filtered results. We can do this by using a simple div and placing the variable \*
\*search\*\* inside.

```javascript
<div>{search}</div>
```

### Final Code

Your code for the SearchBar.jsx should look like this:

```javascript
import React, { useState } from 'react';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');

    const countries = [
        { name: 'Belgium', continent: 'Europe' },
        { name: 'India', continent: 'Asia' },
        { name: 'Bolivia', continent: 'South America' },
        { name: 'Ghana', continent: 'Africa' },
        { name: 'Japan', continent: 'Asia' },
        { name: 'Canada', continent: 'North America' },
        { name: 'New Zealand', continent: 'Australasia' },
        { name: 'Italy', continent: 'Europe' },
        { name: 'South Africa', continent: 'Africa' },
        { name: 'China', continent: 'Asia' },
        { name: 'Paraguay', continent: 'South America' },
        { name: 'Usa', continent: 'North America' },
        { name: 'France', continent: 'Europe' },
        { name: 'Botswana', continent: 'Africa' },
        { name: 'Spain', continent: 'Europe' },
        { name: 'Senegal', continent: 'Africa' },
        { name: 'Brazil', continent: 'South America' },
        { name: 'Denmark', continent: 'Europe' },
        { name: 'Mexico', continent: 'South America' },
        { name: 'Australia', continent: 'Australasia' },
        { name: 'Tanzania', continent: 'Africa' },
        { name: 'Bangladesh', continent: 'Asia' },
        { name: 'Portugal', continent: 'Europe' },
        { name: 'Pakistan', continent: 'Asia' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const search = countries
        .filter((country) => {
            if (searchInput == '') {
                return;
            } else if (
                country.name.toLowerCase().includes(searchInput.toLowerCase())
            ) {
                return country;
            }
        })
        .map((country, key) => {
            if (searchInput)
                return (
                    <div>
                        {country.name}
                        {country.continent}
                    </div>
                );
        });

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div>{search}</div>;
        </>
    );
};

export default SearchBar;
```

### Step 10 - Adding the component to the app

Import the searchBar component into the app.js file and add it to the return statement JSX as follows.

```javascript
import React from 'react';
import './App.css';
import SearchBar from '../src/components/SearchBar';

function App() {
    return (
        <div classname="App">
            <SearchBar />
        </div>
    );
}

export default App;
```

# Conclusion

And there it is, you now know how to implement a search bar into react, using the useState hook.

For the full code, please refer to the GitHub [Repo](https://github.com/DomDevs2000/Search-Bar-Blog-Code)
