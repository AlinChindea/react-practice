# Catch of the Day

## About
"Catch of the Day"  is  a real-time app for a seafood market where price and quantity available are variable and can change at a moment's notice. Contains a menu of available and sold out fish, an order form, and an inventory management area where authorized users can immediately update product details. 

## Tech
- [React.js](https://reactjs.org/)
- [create-react-app](https://github.com/facebook/create-react-app) for Webpack Tooling
- [Firebase](https://firebase.google.com/) - real time web socket data 
- [prop-types](https://www.npmjs.com/package/prop-types) for type hinting
- [react-transition-group](https://github.com/reactjs/react-transition-group/tree/v1-stable) for animations

## Installation
You can run the project locally by downloading or cloning the [GitHub repo](https://github.com/AlinChindea/react-practice/tree/master/catch-of-the-day). Installation requires [NPM](https://www.npmjs.com/).


1. `git clone git@github.com:AlinChindea/react-practice.git`
2. `cd catch-of-the-day`
3. `npm install`
4. `npm start` to run the dev environment or `npm run watch` to run the dev server and watch for style changes concurrently

## Deployment

`npm run build` to build the app for production

 ### Deploy to Netlify 
 [Netlify](https://app.netlify.com/) has a free plan and it's super easy to set up. There are several way of deploying. The below just indicates how to do it from the command line. 

 1. Install their global CLI `npm i netlify-cli -g`
 2. Add a file in your build directory `_redirects` and paste in there `/* /index.html 200`
 3. run `netlify deploy` (if you haven't signed in yet, it will pop open a window, click ok and then pop back in the terminal, there is no password)
   - choose to create a new site (you can skip giving it a name at this point, you can do it from the Netlify panel)
   - when prompted for a `path to deploy` type `build`
   - this will test deploy it and issue you a temporarily link where you can test your app
   - if all is fine run `netlify deploy --prod` => issues you a permanent link

To make sure that GitHub authentication works you need to add your new netlify domain to Firebase (in the console, authentication menu - sign-in method, add domain).
