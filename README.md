
# REACT FLICKR APP
This project combines React and Bootstrap to make a simple gallery display.  

It was based on a TeamTreehouse.com project, but the code is my own. The 'trending' functionality was added outside of the project, as was the Bootstrap styling. 

![React Flickr App as seen on desktop](/img/Desktop.png)

Visit the page at: https://aeronroemer.github.io/Employee-Directory-Display/

### Concepts Demonstrated

The main technologies and concepts demonstrated in this project are
* React
* JSX
* Bootstrap 4
* API calls
* Responsive Design

## React-Bootstrap

Using both the React-Bootstrap and Bootstrap libraries, these framworks sped up styling on the project. Using built in grid systems, flexbox, default styles and utility classes, it allowed for a quick, clean setup of the Photo App for multiple sized devices. I wrote some custom HTML because the Bootstrap margin options weren't the best option for a project of this small scale. 

## Localization-Friendly Design

The API call returns employees with both Latin charaters in their
names and information, and Arabic characters. The code includes
a snippet that checks to see if the first letter of an employee's 
name is in Arabic script. If so, Arabic specific styling rules are 
applied. Functionality could easily be expanded to Kurdish, Farsi, Syriac or
any of the other numerous RTL scripts. 

![Right to left text on card](/READMEimgs/LatinArabic.png)

## Header Image

The header image is a comination of a CSS gradient, CSS animation and a photoshop .png file. The original photo was found on https://unsplash.com/. It's a skyline of Chicago taken by Jeff Brown: https://unsplash.com/photos/xOj6_Ha1_R8. 

### Licsence 
Created based on a project on TeamTreehouse.com
MIT - other students should feel free to use my CSS or custom images. 