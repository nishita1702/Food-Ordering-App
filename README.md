Package.json is a configuration for npm
The most important package in our project is bundler. (webpack, parcel, vite...)
Bundler packages your app properly so that it can be shipped to production.

npm install -D parcel
There are 2 types of dependencies- dev dependencies and normal dependency
dev dependencies are required while building the project but normal dependencies are used in production also

version with caret sign i.e. ^2.1.0 will upgrade minor version change itself
version with tilde sign i.e. ~2.1.0 will upgrade major version change also

package-lock.json- it keeps a tract of all the versions being installed. keeps a record of exact version of that dependency

node_modules - contains all the code that we fetched from npm, fetches all the code of all the dependency in our system and their dependency and their dependency. - Transitive dependency

You do not put node modules in production, basically node modules can be generated from package.json & package-lock.json and anything that can be generated does not go in production, npm install will download all dependency

npx- If you want to execute a package you use npx, if you want to install you use npm

cdn links is not the preferred way to bring react and react dom in your project

import React from 'react' basically imports react from node_modules

In our html we are injecting App.js via "<script src="./App.js">" so it is treated as a browsers sript, it is being treated as a normal js file and normal js file do not have imports. We get the error as 'Browser scripts cannot have imports or exports.'

we need to tell the browser that this file is not a normal js file, it's a module. you add type='module' in the script to tell browser that it is a module.

Parcel creates a dev build and hosts a local server for you it also automatically refreshes your server.
i.e. it does HMR-Hot module replacement
How? Parcel uses file watching algorithm

Parcel
Dev Build
Local Server
HMR = Hot Module Replacement
File Watching Algorithm - written in C++
Caching - Faster Builds
Image Optimization
Minification
Bundling
Compress
Consistent Hashing
Code Splitting
Differential Bundling - support older browsers
Diagnostic
Error Handling
HTTPs
Tree Shaking - remove unused code
Different dev and prod bundles

Food Ordering App
/\*_
Header
Logo
Nav Items
Body
Search
RestaurantContainer
RestaurantCard - Img - Name of Res, Star Rating, cuisine, delery tie
Footer
Copyright
Links
Address
Contact _/

Two types of Export/Import

    Default Export/Import
        export default Component; import Component from "path";

    Named Export/Import
        export const Component; import {Component} from "path";

React Hooks
(Normal JS utility functions)

    useState() - Superpowerful State Variables in react
    useEffect()

2 types Routing in web apps
Client Side Routing
Server Side Routing

Redux Toolkit
Install @reduxjs/toolkit and react-redux
Build our store
Connect our store to our app
Slice (cartSlice)
dispatch(action)
Selector

Types of testing (devloper)
Unit Testing
Integration Testing
End to End Testing - e2e testing
Setting up Testing in our app
Install React Testing Library
Installed jest
Installed Babel dependencies
Configure Babel
Configure Parcel Config file to disable default babel transpilation
Jest - npx jest --init
Install jsdom library
Install @babel/preset-react - to make JSX work in test cases
Include @babel/preset-react inside my babel config
npm i -D @testing-library/jest-dom
