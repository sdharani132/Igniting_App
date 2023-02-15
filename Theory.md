- Bundler: https://www.showwcase.com/show/26900/what-is-a-bundler

- What is NPM?
    We need some packages for our application to work. Now, who gives us the packages and who manages it?
    NPM does it for us.
    When we do npm init, it gets initialized in our project. It creates a file called "Package.json" which it uses for keeping generating what all packages our code needs in the form dependencies.

    https://stackoverflow.com/questions/31930370/what-is-npm-and-why-do-i-need-it

    https://www.quora.com/What-is-npm-and-why-should-I-use

    https://www.stackchief.com/tutorials/npm%20install%20%7C%20how%20it%20works

- What is `Parcel/Webpack`? Why do we need it?
    They are bundlers and the question is answered above.

- What is `.parcel-cache`?
    Parcel needs some space to execute itself and generate the optimized files which it stores in the dist folder.
    So it creates a folder called parcel-cache and uses it by caching the bundles in it which it further uses to create optimized files in dist.
    https://parceljs.org/features/development/

what is npx?
    https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/

    https://www.educative.io/answers/what-is-npx

Script types in html
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script

^ - caret and ~ - tilda
    https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json

browserslist
    can specify in which browsers our app can run.
    https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z

dist folder
    It contains the files which are given to the server. Parcel generates it automatically. It contains the optimized/minified files in it.
    https://www.geeksforgeeks.org/what-is-the-role-of-src-and-dist-folders-in-javascript-jquery/

What is `node_modules` ? Is it a good idea to push that on git?
    It is a collections all the modules or packages that we need. When we add dependencies in the package.json, it creates node_modules
    where t stores all the code.
    It is not advisable to push it onto git because they are generatable through package.json and they are heavy.

What is the difference between `package.json` and `package-lock.json`
    package.json is where we specify our dependencies and package-lock.json gets generated once we specify any dependency in the package.json.
    In package.json we specify the version and use symbols like ^ or ~ or exact version but in package-lock the exact version is maiantained and also the dependencies of that package are also listed.
    All the dependencies and the version specified there are added to the node modules.

Why should I not modify `package-lock.json`?
    It is gets automatically modified when some upgrade happens. So why to touch it.
    If you want some specific version and don't want any upgrade on it then mention that exact version in the package.json only instead of going to lock file.

    https://medium.com/dlt-labs-publication/package-json-vs-package-lock-json-c8d5deba12cb
    https://stackoverflow.com/questions/44297803/what-is-the-role-of-the-package-lock-json
    https://blog.logrocket.com/why-you-should-use-package-lock-json/

What is treeshaking?
    In production builds, Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used. This is called "tree shaking" or "dead code elimination".
    https://www.markusdosch.com/2021/02/parcel.js-web-application-bundler-enabling-tree-shaking-for-much-smaller-builds/
    https://parceljs.org/features/scope-hoisting/
    https://parceljs.org/features/production/

This blog explains everything -
    https://www.digitalocean.com/community/tutorials/how-to-bundle-a-web-app-with-parcel-js