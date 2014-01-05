#!/usr/bin/env node

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database/authorized_kjv.sqlite');

var keywords = process.argv;
keywords.shift(); // node
keywords.shift(); // av-search.js

var where = [];
for (var i = 0; i < keywords.length; i++) {
   var criteria = "bible.text LIKE '%" + keywords[i] + "%'";
   where.push(criteria);
}

var q = "SELECT book.name, bible.chapter, bible.verse, bible.text, book.name || ' ' || bible.chapter || ':' || bible.verse AS ref FROM bible INNER JOIN book ON book.id = bible.book_id WHERE " + where.join(' AND ');

db.all(q, function (err, results) {
   if (err) {
      console.log(err);
      return;
   }

   for (var i = 0; i < results.length; i++) {
      var r = results[i];
      console.log(r.ref + ' ' + r.text);
   }
});