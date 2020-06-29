
# REACT FLICKR APP
This project combines React and Bootstrap to make a simple gallery display.  

It was based on a TeamTreehouse.com project, but the code is my own. The 'trending' functionality was added outside of the project, as was the Bootstrap styling and search redirect. 

![React Flickr App as seen on desktop](/img/Desktop.png)

Visit the page at: 

## Concepts Demonstrated

The main technologies and concepts demonstrated in this project are
* React
* React Router, React-Router-Dom
* JSX
* Bootstrap 4
* API Calls
* Responsive Design
* App Deployment

### React-Bootstrap Framework

Using both the React-Bootstrap and Bootstrap libraries, these framworks sped up styling on the project. 

* Bootstrap Grid on Search Form and Nav Bar.
* Flexbox Gallery display.

Using built in grid systems, flexbox, default Bootstrap styles and utility classes, it allowed for a quick, clean setup of the Photo App for multiple sized devices. I wrote some custom HTML because the Bootstrap margin options weren't the fastest option for a project of this small scale. 

### React Router

Used Routes, Links, and NavLinks to create navigation around the site. 
* The main App.js employs a Switch and Routes to navigate through the content. 
* The top tag routes are created by using params, and change along with the tags. 
* The Search Bar redirects the user to a /search/ URL on click.
* 404 route displays for nonexistent routes.

In the future, I would like to add routes based on location.search data and query strings. Some commented out code is at the bottom of App.js and SearchForm.js. Ideally, the site and results can be accessed directly via a URL ending in a query string. 

## React Router

Used Routes, Links, and NavLinks to create navigation around the site. 
* The main App.js employs a Switch and Routes to navigate through the content. 
* The top tag routes are created by using params, and change along with the tags. 
* The Search Bar redirects the user to a /search/ URL on click.
* 404 route displays for nonexistent routes.

In the future, I would like to add routes based on location.search data and query strings. Some commented out code is at the bottom of App.js and SearchForm.js. Ideally, the site and results can be accessed directly via a URL ending in a query string. 



### Licsence 
MIT