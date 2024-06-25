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
