#!/usr/bin/env node

var starwars = require('./starwars');
var args = process.argv.splice(2);

if (args.indexOf('-a') !== -1 || args.indexOf('--all') !== -1) {
  starwars.quotes.forEach(function (face) {
    process.stdout.write(face + '\n');
  });
  return;
}

process.stdout.write(starwars() + '\n');