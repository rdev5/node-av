#!/usr/bin/env node

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database/authorized_kjv.sqlite');

var keywords = process.argv;
keywords.shift(); // node
keywords.shift(); // av-search.js

// v2.0
var keywords = keywords.join(' ');
var ref_list = keywords.split(';');

var ref_list_where = [];
for (var i = 0; i < ref_list.length; i++) {
   var keywords = ref_list[i].trim().split(' ');

   var book = keywords[0];
   var ref = keywords[1].split(':');
   if (book.match(/\d/)) {
      book += ' ' + keywords[1];
      var ref = keywords[2].split(':');
   }
   var chapter = ref[0];
   var verse = ref[1];

   var where = [];
   where.push("book.name LIKE '" + book + "%'");
   where.push("bible.chapter = '" + chapter + "'");

   if (verse.match(/^\d+$/)) {
      where.push("bible.verse = '" + verse + "'");
   } else if(verse.match(/^(\d+)\-(\d+)$/)) {
      var range = verse.match(/^(\d+)\-(\d+)$/);
      where.push("(bible.verse >= '" + range[1] + "' AND bible.verse <= '" + range[2] + "')");
   }

   ref_list_where.push('(' + where.join(' AND ') + ')');
}

var q = "SELECT book.name, bible.chapter, bible.verse, bible.text, book.name || ' ' || bible.chapter || ':' || bible.verse AS ref FROM bible INNER JOIN book ON book.id = bible.book_id WHERE " + ref_list_where.join(' OR ');

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