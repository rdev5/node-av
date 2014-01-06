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
$ ./search.js forgiveness
Psalms 130:4 But [there is] forgiveness with thee, that thou mayest be feared.
Daniel 9:9 To the Lord our God [belong] mercies and forgivenesses, though we have rebelled against him;
Mark 3:29 But he that shall blaspheme against the Holy Ghost hath never forgiveness, but is in danger of eternal damnation:
Acts 5:31 Him hath God exalted with his right hand [to be] a Prince and a Saviour, for to give repentance to Israel, and forgiveness of sins.
Acts 13:38 Be it known unto you therefore, men [and] brethren, that through this man is preached unto you the forgiveness of sins:
Acts 26:18 To open their eyes, [and] to turn [them] from darkness to light, and [from] the power of Satan unto God, that they may receive forgiveness of sins, and inheritance among them which are sanctified by faith that is in me.
Ephesians 1:7 In whom we have redemption through his blood, the forgiveness of sins, according to the riches of his grace;
Colossians 1:14 In whom we have redemption through his blood, [even] the forgiveness of sins:
````

Search for verse by reference using **ref.js** (currently does not support comma separated references; only semi-colons):
````
$ ./ref.js 'Romans 5:12; Romans 3:23; Romans 6:23; John 3:16; 1 John 2:2; 1 John 4:10; Acts 16:31; John 1:12; John 3:18; Romans 5:18-21; Romans 10:4-13'
John 1:12 But as many as received him, to them gave he power to become the sons of God, [even] to them that believe on his name:
John 3:16 For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.
John 3:18 He that believeth on him is not condemned: but he that believeth not is condemned already, because he hath not believed in the name of the only begotten Son of God.
Acts 16:31 And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.
Romans 3:23 For all have sinned, and come short of the glory of God;
Romans 5:12 Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned:
Romans 5:18 Therefore as by the offence of one [judgment came] upon all men to condemnation; even so by the righteousness of one [the free gift came] upon all men unto justification of life.
Romans 5:19 For as by one man's disobedience many were made sinners, so by the obedience of one shall many be made righteous.
Romans 5:20 Moreover the law entered, that the offence might abound. But where sin abounded, grace did much more abound:
Romans 5:21 That as sin hath reigned unto death, even so might grace reign through righteousness unto eternal life by Jesus Christ our Lord.
Romans 6:23 For the wages of sin [is] death; but the gift of God [is] eternal life through Jesus Christ our Lord.
Romans 10:4 For Christ [is] the end of the law for righteousness to every one that believeth.
Romans 10:5 For Moses describeth the righteousness which is of the law, That the man which doeth those things shall live by them.
Romans 10:6 But the righteousness which is of faith speaketh on this wise, Say not in thine heart, Who shall ascend into heaven? (that is, to bring Christ down [from above]:)
Romans 10:7 Or, Who shall descend into the deep? (that is, to bring up Christ again from the dead.)
Romans 10:8 But what saith it? The word is nigh thee, [even] in thy mouth, and in thy heart: that is, the word of faith, which we preach;
Romans 10:9 That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.
Romans 10:10 For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation.
Romans 10:11 For the scripture saith, Whosoever believeth on him shall not be ashamed.
Romans 10:12 For there is no difference between the Jew and the Greek: for the same Lord over all is rich unto all that call upon him.
Romans 10:13 For whosoever shall call upon the name of the Lord shall be saved.
1 John 2:2 And he is the propitiation for our sins: and not for ours only, but also for [the sins of] the whole world.
1 John 4:10 Herein is love, not that we loved God, but that he loved us, and sent his Son [to be] the propitiation for our sins.
````

## Useful Resources
1. [*An Understandable History of the Bible* by Samuel C. Gipp, Th. D.](http://samgipp.com/historybook/)
2. [*What's the Big Deal About the KJV?*](http://bigdealkjv.com/)
3. [MySQL download of the *King James Bible: Pure Cambridge Edition*](http://www.bibleprotector.com/)
4. [*American Dictionary of the English Language* by Noah Webster (1828)](http://webstersdictionary1828.com/)
5. [*e-Sword* - The Sword of the LORD with an electronic edge](http://e-sword.net/)
