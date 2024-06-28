React Note -
Note: Package.JSOn is confirguration of NPM

Why need to Package.JSON -
npm = manage packages
it's manages the version control, where all dependencies of our packages are there..


Two types dependencies  - dev dependencies & normal dependencies
  - dev dependencies - During the development dev dependencies required
  - nomarl dependecies - normal dependecies used in Production also 

Parcel webpack is used to combined the data or chunk the data.
- it's bundler
- it's webpack

"devDependencies": {
    "parcel": "^2.12.0"
  }
^ -caret - if tomorrow new minor version upgrade & if put this ^ then parcel will incresed the version automatically

**parcel**
package.json - it's confirgauration of package manager & all the dependencies are there
   "devDependencies": {
    "parcel": "^2.12.0"
  }
- this is known as *transitive dependecies* because it's have own depedencies.
- parcel needs another packages also Babel [says to node install other packages]
- parcel used Babel.

another file is - 
**package-lock.json** -> keep a track of exact version, suppose today's 2.12.0 is release then package-lock.json lock the packages & keep the exact all every version.
- keeps a exact version of percel
- integriry - [sha512] - keeps hash to verify whatever the same version is right now in the project that will be same during deployment of the project.

**node_modules** ->
-This node modules cutins all the code that we are fetch from npm 
- npm i -D parcel - It was fectching all the code of parcel
- It's data base that contains actual data or dependecies

Every dependecies has their own package.json -> this is known an transitive dependecies

**Note** - Should I push node module to production, github, -
- No, push inside .gitignore
 create a file -
 .gitignore inside -> /node_modules
- whatever we can regenerate, don't need to put in gitHub

 **Note**
 Should I push this package & package-lock.json in gitHub -
 Answer - Yes, maitaining exact version of dependecies during  development & production
- if we have package.json then we can create node_modules 

# Browser Support make Appliocation  [https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z]
- node modules have browserlist that should add into the Package.json & pass multiple browser support version
in package.json -
100% it'll  work in 2 below configuration & for other version may it'll work or not
"browserslist":[
    "last 10 Chrome version",
    "last 2 Firefox version"
  ]


# Lecture - 03 
  - run - npx parcel index.html
  step 1 - run the development script - "start": "parcel index.html",
  step 2 - run the production script - "build": "parcel build index.html"
  
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
  }
  then will start our development mode - npm start && npm run start
  for production mode - npm build && npm run build

<!-- JSX -->
- JSX make developer life easy
- JSX is a combination where merge html like syntax & JS together
# Very Important -
- JSX is not HTML inside JavaScript, it's a HTML like syntax or XML like syntax
- React code is not easy to learn for user so that is a reson they created JSX that is user friendly
- JS engine or browser does not understand JSX it only understand ECMA script.
- Whole code goes to the Broswer Parcel is working..
 -- first code goes to transfile first then goes for JS engine 
 # (JSX) =>> Transfile (Babel transfile before to JS engine) =>> That Browser can understand
  - parcel (Babel) That is normal jS package, Parcel install babel
  - Babel is not created by Facebook
  - Babel is a JS compiler 
  - https://babeljs.io/ [Babel]
  - https://babeljs.io/docs/

# React Component -
  - Everything in React is an component
  - Two types of Component
    # Class Based Component [old way of writing code]
      - Created by Javacript Classes
    # React Functional Component [New way to writing code]
      - Created by JavaScript function
      - Just a normal JS function
      - A function which is returning JSX, React Element or nested React Element is known as Functional component
     # Component Composition - 
      - put a component inside another component is known as Composition Component
    {} - inside JSX inside culry braces we can write any kind of JavaScript Code..

  # mailicious data from API
   - JSX won't run blindly run first it'll check then data will display in dashboard
   - nobody can malicious attach, JSX prevent
   <title /> or <title></title> or {title()} all the same things

  
# Lecture - 04 -
  - Food Ordering App -
    - Thing as a Panning [UI Design, writting code for it]
      (Swiggy & Zomato)
      
- ## Planning our Application
<!-- ## Header Component
      - Logo
      - Nav Items
    ## Body Component
      - Search
      - RestaurantContainer
          - RestaurantCard
    ##  Footer Component
      - Copyright
      - Links
      - Address
      - Contact
 -->

 ## props - [properties] - Just normal argument of a component

 we can make dymanic card by using props 
 - for checking backend data need to add extension in chrome like - JSON-viewer Extension
  - open inspect -> click on network -> refresh chrome Browser -> [preview & headers] & left hand side API data is there - for swiggy
    - https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
  - why API data is to complex because of security
  
  # config-driven-UI - [Frontend System design Interview]
    - controlling your UI using config, config comes from backend
    or 
    - All the UI driven by confign what is config[data]

  other -
  We had writthen code once for frontend & based on the Backend 0r API Data frontend UI will change that is known as config-driven-UI.
  Example - if the offer will different from different-different location so from the backend side data offer will come as per the different address so that is know as config-driven-UI

  from the API fetching: name, constfortwo, avgrating

  # Rest.Cloundenary.com: [CDN] - Put all the images are host on CDN
   - this is CDN where all the images are kept

  # unique key property [keys] -
    - always have a unique key.
    - Menas that each of the list items should have own unique key
  ## Why Unique ID need to define in React - [keys]
    Example - if we have 54 Restaurant card & we did't provide unique id, if user add new card so React is not aware about newly added card in which position so it'll rendered all the Cards
    - for avoid the rendering we need to provide uniue-id for each cards so React will only check new card & render it without doing changes in other cards
    - React doesn't uniquly indentifies the things so that is a reason to add unique key

  ## React index as key bad practice -
    - https://legacy.reactjs.org/docs/lists-and-keys.html
    - https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/

  ## note - // not using keys (not acceptable) <<<<< index as key <<<<<<<<<<< unique id (best practice)

  Swiggy api - https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING


# Lecture - 05 - React Hooks -
   Restured - 
    Create src - source code - 
   - never keeps hardcode in the file so keep seperate file [config, utils]

  ## 2 ways to export & import 
    1. - # default export & import  - 
       - export default Component
      - import Component from "path"
   2. - # named export - can't export twice or multiple by using default so use name export
      - export const Component
      - import {Component} from "path"

    Home Work -
      - Can I do both export?

    Top rated restaurnt -
    - more than 4 stars

  ## Exent Handlers -
    - 
  ## DOM Manipulation -

  ## React Hooks -
  - Just a normal JS Functions [Written by Facebook developers, written inside react utility functions]
    - Most important 2 hooks -
      - useState()
      - useEffect()

# Whenever a state variable changes react will re-renderd the components.