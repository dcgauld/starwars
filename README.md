# starwars.js

starwars.js is a simple Node.js module that allows you to insert a random Star Wars quote into your site, or view one through the command line.

## Usage

Install starwars.js by either forking this repository or installing through [npm](http://npmjs.org/) (recommended).

### JavaScript

Simply install through npm...

    npm install starwars

...and require the module from your Node.js application. You're good to go! Either insert a single (random) quote, or retrieve a list containing all of the available quotes.

```javascript
console.log(require('starwars')); // "No. I am your Father."
console.log(require('starwars').quotes); // Array of quotes
```

### Command Line

You can also install the module globally by running...

    npm install starwars -g

...and then typing `starwars` into your console. A random quote will then be displayed on the screen (especially helpful if you're having a bad day and need to read some inspirational text).

You can also type `starwars -a` or `starwars -all` into your console to display all of the available quotes.