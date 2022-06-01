# Decoder-ring-project
## Project testing requirements:
Writing a series of unit tests using Mocha and Chai
Using different expect() methods to test your code
## Project functionality requirements:
For the Caesar shift (example: caesar("Zebra Magazine", 3) => "cheud pdjdclqh"), the tests that you write should test that the following is true:
It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
It ignores capital letters. (For example, the results of A Message and a message should be the same.)
When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)
It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
For the Polybius square (example: polybius("message") => "23513434112251"), the tests that you write should test that the following is true:
When encoding, it translates the letters i and j to 42.
When decoding, it translates 42 to (i/j).
It ignores capital letters. (For example, the results of A Message and a message should be the same.)
It maintains spaces in the message, before and after encoding or decoding.
For the substitution cipher (example: substitution("message", "plmoknijbuhvygctfxrdzeswaq") => "ykrrpik"), the tests that you write should test that the following is true:
It returns false if the given alphabet isn't exactly 26 characters long.
It correctly translates the given phrase, based on the alphabet given to the function.
It returns false if there are any duplicate characters in the given alphabet.
It maintains spaces in the message, before and after encoding or decoding.
It ignores capital letters. (For example, the results of A Message and a message should be the same.)
### *This project decodes and encodes using the Caesar shift, Substitution, and Polybius square.*
Screenshots
#### Caesar Shift
![Ceasar Logo](https://camo.githubusercontent.com/6d182c9376d1e6f88c803c56e7b0455e03260ccb6e7b457f334ca8f56de5b8c1/68747470733a2f2f36342e6d656469612e74756d626c722e636f6d2f35393238663631643735366434663362653737326363353864363635313639372f303638356265396337663739613461382d62312f733132383078313932302f343638636365303538323733363165323533653739373335376162616432363761613333386538662e706e67)  
#### Polybius Square
![polybius logo]
(https://camo.githubusercontent.com/68169f90a4658d46b86f3449e572be5eb63ffcaedc021921c282c238fd44c3cb/68747470733a2f2f36342e6d656469612e74756d626c722e636f6d2f32643335396463386330343963353235613166333563386337313363376530302f643835386436633736623462386339392d63322f733132383078313932302f326134323838643663333439366231373263626633393861333930646566393166623339313963392e706e67)

#### Substitution Cipher
![substitution logo]
(https://camo.githubusercontent.com/7bdc1edd35338cc74e946f316e1e3e866bbc9594489293859fa333713e084678/68747470733a2f2f36342e6d656469612e74756d626c722e636f6d2f64356461363232306432356665336363386434393963643038623932666131642f336331646436336366613439316462652d66652f733132383078313932302f333230326533363237636535633934333234386561353531656131316464656562393466663035312e706e67)
