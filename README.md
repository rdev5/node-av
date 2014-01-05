# node-av
> Based on the Pure Cambridge Edition

A series of useful command line utilities for searching and studying the Authorized Version of the King James Bible.

## Getting Started

1. Download a copy of the *King James Bible: Pure Cambridge Edition: Fruit MySQL Database File* from http://www.bibleprotector.com/ and import into your local MySQL server.
2. Use the included `mysql2sqlite.sh` shell script to convert the `kjv` database to SQLite and save as `authorized_kjv.sqlite` into the `database` folder.
3. Run `chmod +x` on \*.js files (see *Usage* below) from within the project's root directory.

### Usage
Search for verses containing words using **search.js**:
````
$ ./search.js shall call his name Immanuel
Isaiah 7:14 Therefore the Lord himself shall give you a sign; Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel.
````

Search for verse by reference using **ref.js**:
````
$ ./ref.js 2 tim 3:16
2 Timothy 3:16 All scripture [is] given by inspiration of God, and [is] profitable for doctrine, for reproof, for correction, for instruction in righteousness:
````

## Useful Resources
1. [*An Understandable History of the Bible* by Samuel C. Gipp, Th. D.](http://samgipp.com/historybook/)
2. [*What's the Big Deal About the KJV?*](http://bigdealkjv.com/)
3. [MySQL download of the *King James Bible: Pure Cambridge Edition*](http://www.bibleprotector.com/)
4. [*American Dictionary of the English Language* by Noah Webster (1828)](http://webstersdictionary1828.com/)
