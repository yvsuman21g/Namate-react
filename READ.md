#Namaste React

npm is not - stand for Node Package Manager

<!-- Steps for Production - -->
Step 1 -
1. Not used npm init -y [it's skips a lots of things]

step 2 -
npm init

- change the decription 
Package.JSON file will create

Step 3 - 
Install most imporatant packages in our packages - 
**bundler** [webPack, veet, parcel] -
- will use Parcel Bundler
- bundlers Packages the app bundle

- Install parcel webpack in our project
**Commmand**
- npm install -D parcel

 Two types dependencies  - dev dependencies & normal dependencies
  - dev dependencies - During the development dev dependencies required
  - nomarl dependecies - normal dependecies used in Production also 
   [-D] - stand for dependecies 

package.json - it's confirgauration of package manager & all the dependencies are there
   "devDependencies": {
    "parcel": "^2.12.0"
  }

another file is **package-lock.json** -> keep a track of exact version, suppose today's 2.12.0 is release then package-lock.json lock the packages & keep the exact all every version.
- keeps a exact version of percel
 - integriry - [sha512] - keeps hash to verify whatever the same version is right now in the project that will be same during deployment of the project.

Step 4 - 

**node_modules** ->
This node modules cutins all the code that we are fetch from npm 
npm i -D parcel - It was fectching all the code of parcel

Every dependecies has their own package.json -> this is known an transitive dependecies

**Note** - Should I push node module to production, github, git -
 Anser is - No, push inside .gitignore
 create a file -
 .gitignore inside -> /node_modules

Step 5 -
npx parcel index.html
- npx [exceute a package]

it'll create a local server, it's build in 702ms -

Step 6 -
Another way to get React APP by using npm
CDN link not prefered way to write React code in React Project

npm install react

Package.json -
"dependencies": {
    "react": "^18.3.1"
  }

Step 7 -
install react-dom libraries

npm install react-dom

  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }

Strp 7 -
import React from "react" in the App.js file

"react" -> referes to the node modules [coming from node modules]

# parcel link - "parceljs.org"
- Dev Build
- Local Server
- HMR = Hot Build Replacement
- used File wwatching Algorithm written in C++
- Caching - Faster Builds
- Image Optimization
- Minification 
- Bundling
- Compressing the file
- Consitent Hashing
- Code Splitting
- Differential Bundling -> Support Old Browser
- Dignostic 
- Error Handling
- HTTPS
- Tree Shaking - Removed Unused code
- Different Development & production bundles

Strp 8 -
npx parcel build index.html

it'll give an error because in Package.json we need to remove this -  "main": "App.js",

then npx parcel build index.html
all files bundle in dist folder - production Build files that is ready for production - Compress everything index, JS & CSS files
- Production build is highly optimized Build that is ready fro production

- dist & parcel-cache is a temporary file that is automatically generated [no need to put in github]

Structure of Project --

/*  * Header Component
      - Logo
      - Nav Items
    * Body Component
      - Search
      - RestaurantContainer
          - RestaurantCard
            - Image
            - Name of Res card, cuisine, delivery time
    * Footer Component
      - Copyright
      - Links
      - Address
      - Contact
 */