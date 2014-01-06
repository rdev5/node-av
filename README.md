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
$ ./ref.js 'gen 1:1-3; john 1:1-14'
Genesis 1:1 In the beginning God created the heaven and the earth.
Genesis 1:2 And the earth was without form, and void; and darkness [was] upon the face of the deep. And the Spirit of God moved upon the face of the waters.
Genesis 1:3 And God said, Let there be light: and there was light.
John 1:1 In the beginning was the Word, and the Word was with God, and the Word was God.
John 1:2 The same was in the beginning with God.
John 1:3 All things were made by him; and without him was not any thing made that was made.
John 1:4 In him was life; and the life was the light of men.
John 1:5 And the light shineth in darkness; and the darkness comprehended it not.
John 1:6 There was a man sent from God, whose name [was] John.
John 1:7 The same came for a witness, to bear witness of the Light, that all [men] through him might believe.
John 1:8 He was not that Light, but [was sent] to bear witness of that Light.
John 1:9 [That] was the true Light, which lighteth every man that cometh into the world.
John 1:10 He was in the world, and the world was made by him, and the world knew him not.
John 1:11 He came unto his own, and his own received him not.
John 1:12 But as many as received him, to them gave he power to become the sons of God, [even] to them that believe on his name:
John 1:13 Which were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God.
John 1:14 And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.
````

## Useful Resources
1. [*An Understandable History of the Bible* by Samuel C. Gipp, Th. D.](http://samgipp.com/historybook/)
2. [*What's the Big Deal About the KJV?*](http://bigdealkjv.com/)
3. [MySQL download of the *King James Bible: Pure Cambridge Edition*](http://www.bibleprotector.com/)
4. [*American Dictionary of the English Language* by Noah Webster (1828)](http://webstersdictionary1828.com/)
5. [*e-Sword* - The Sword of the LORD with an electronic edge](http://e-sword.net/)
