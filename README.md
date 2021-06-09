# Marvelish, React Marvel Comic Catalog

<p align="center">
  <img src="https://i.ibb.co/t4XMP8T/dashboard-logo.png">
</p>

## Table of Contents

* [Summary](#Summary)

* [Technologies](#Technologies)

* [Features](#Features)

* [Limitations](#Limitations)

* [Testing](#Testing)

* [Structure](#Structure)

* [Usage and Installation](#usage-and-installation)

## Summary

Marvelish is a React Marvel Comic Catalog made with React that I built as a programming task for a job interview.

I am using both Class components and Functional components with hooks to show my ability to use both typical and new approaches.

For the scope of this task I was asked not to use Redux thus, while the approach for loading the comics may not be the most performant, it's the easiest and most straight-forward to review.

It demonstrates my understanding of React and its components,components life cycle, and state, it also shows my ability to consume and understand APIs, in this case Marvel API, as well as my ability to dockerize my app.

## Technologies

React was used for the front end.  
Marvel API was used in getting the comics.  
Vanila CSS/HTML was used for the UI.  


## Features

A. Get all the comics of your favorite Marvel hero

B. Get a detailed view of each comic's :

1. Price.

2. ISBN.

3. Summary.

4. Larger Cover.

5. Purchase Link

6. Characters List

7. Publication Date.

C. Routing Error handled correctly using a custom 404 page.

## Limitations

1. Limited the number of heroes yet kept the functionality for getting ALL heroes in the API wrapper.

2. Basic pagination that requests new data on each page switch instead of getting a lot of data (Marvel's limit is 100) and flipping through it as a demonstration of my manual pagination approach

## Testing

You can use
```
npm run test
```
To start the unit testing

## Structure 
```
+---public
|   |   favicon.ico
|   |   index.html
|   |   manifest.json
|   |   robots.txt
|   |
|   +---buttons
|   |       arrow-back-black.svg
|   |
|   \---images
|           404.gif
|           dashboard-logo.png
|           github.png
|           linkedin.png
|           loader.gif
|           logo.png
|
\---src
    |   index.css
    |   index.js
    |
    +---assets
    |   \---images
    |           1009187.png
    |           1009220.png
    |           1009268.png
    |           1009288.png
    |           1009368.png
    |           1009610.png
    |           1009664.png
    |           1009697.png
    |           1010365.png
    |
    +---components
    |   |   App.js
    |   |   Comic.js
    |   |   ComicsList.js
    |   |   ComicView.js
    |   |   Dashboard.js
    |   |   HeroList.js
    |   |   NotFound.js
    |   |
    |   \---_test_
    |           testApp.spec.js
    |
    \---utils
        |   api.js
        |   _DATA.js
        |
        \---_test_
                testComicApi.spec.js
                testData.spec.js
```


## Usage and Installation

You can get the project up and running in 3 simple steps.

1. Use the following command to install the required packages
```
npm install
```
2. Enter your marvel public API key in the .env file
```
REACT_APP_API_KEY=API KEY HERE
```
3. A. You can either run in development mode using
```
npm start
```
3. B. Or run in production mode using
```
npm run build
```
Then 
```
yarn global add serve
serve -s build
```
To run your build

Alternatively you can run the app in a container from the included docker file using
```
docker build -t marvelish .
docker run -p 3000:80 marvelish
```
