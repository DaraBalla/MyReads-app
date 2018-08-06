# MyReads Project

The goal of this project is to write a React code to make an application that gives me an overview about books:

* I have read, 
* actually reading and 
* want to read. 

It seems like a library with three shelves. In this application I also can look for books which are not in my library and add them to the three mentioned shelves. Each book has a select button which can move with the book between three shelves or remove it from the library (value "none"). The same select button is provided in the search page next each book to know, if the selected book is already in the library and in wich shelf or if I can add it there.

I was provided it the starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to save me time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. My job was to add interactivity to the app by refactoring the static code in the provided template.

## Installing the project

To install the project you should:

* download the zip repository from https://github.com/DaraBalla/MyReads-app.git or
   clone the project to your local computer with `git clone https://github.com/DaraBalla/MyReads-app.git`
* change the working directory to MyReads-app with `cd MyReads-app`
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
