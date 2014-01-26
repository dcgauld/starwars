#!/usr/bin/env node

var starwars = require('./starwars');
var args = process.argv.splice(2);

if (args.indexOf('--all') !== -1) {
  starwars.quotes.forEach(function (quote) {
    process.stdout.write(quote + '\n');
  });
  return;
}

process.stdout.write(starwars() + '\n');