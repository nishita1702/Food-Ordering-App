Package.json is a configuration for npm
The most important package in our project is bundler. (webpack, parcel, vite...)
Bundler packages your app properly so that it can be shipped to production.

npm install -D parcel
There are 2 types of dependencies- dev dependencies and normal dependency
dev dependencies are required while building the project but normal dependencies are used in production also


version with caret sign i.e. ^2.1.0 will upgrade minor version change itself
version with tilde sign i.e. ~2.1.0 will upgrade major version change also

package-lock.json-  it keeps a tract of all the versions being installed. keeps a record of exact version of that dependency

node_modules - contains all the code that we fetched from npm, fetches all the code of all the dependency in our system and their dependency and their dependency. - Transitive dependency

You do not put node modules in production, basically node modules can be generated from package.json & package-lock.json and anything that can be generated does not go in production, npm install will download all dependency

npx- If you want to execute a package you use npx, if you want to install you use npm

cdn links is not the preferred way to bring react and react dom in your project

import React from 'react' basically imports react from node_modules

In our html we are injecting App.js via "<script src="./App.js">" so it is treated as a browsers sript, it is being treated as a normal js file and normal js file do not have imports. We get the error as 'Browser scripts cannot have imports or exports.'

we need to tell the browser that this file is not a  normal js file, it's a module. you add type='module' in the script to tell browser that it is a module.

Parcel creates a dev build and hosts a local server for you it also automatically refreshes your server.
i.e. it does HMR-Hot module replacement
How? Parcel uses file watching algorithm 

Parcel- dev build
    local server
    HMR-Hot module replacement
    file watching algorithm -written in c++
    Caching - faster builds
    Image optimization
    Minification
    bundling
    compress
    consistent hashing
    code splitting
    differential bundling - support older browsers
    diagnostic
    error handling
    HTTP's
    tree shaking

npx parcel build index.html - use it to create production build




