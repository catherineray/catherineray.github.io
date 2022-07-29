---
title: "CAMEL Poster"
date: "2013-04-18"
categories: 
  - "braille"
  - "camel"
  - "explanation"
  - "research-projects"
---

The poster I’m using to present my research creating CAMEL is finally finished (full-size version: [CAMEL_poster](/wp-content/uploads/2013/04/Ray_CAMEL.pdf)).

![Rin 2013-04-18 at 12.50.33 PM](/wp-content/uploads/2013/04/Rin-2013-04-18-at-12.50.33-PM.png)

In order to condense [the entirety of my paper](/camel-paper/) into a viewer-friendly poster, I decided to **make diagrams to describe the program’s inner workings in layman’s terms**.

If you like the format of this poster: [all code used in this project is on github](https://github.com/catherineray/CAMEL/tree/master/poster).

#### Introduction to CAMEL

- machine learning program that uses Braille as a language platform. **CAMEL** is an acronym of **C**ontextu**A**l **M**achin**E** **L**earning.
- uses context of unknown symbols to deduce meaning and compress information.
- provided the meaning of an initial set of symbols (a dictionary, or **dict**). CAMEL deduces meanings of unknowns and adds these meanings to the dict.
- grows more accurate as the dict increases in size andoptions. Some symbols differ in meaning depending on their context. These translation options are stored in the dict in the form of Map[String, TranslationOptions].

#### What is Grade 2 Braille

- As English words are composed of letters, Braille words are composed of Braille cells.
- **Contractions** are special characters used to reduce the length of words.
- Some contractions stand for a whole word. For example: ‘for’ = braille{{for}}; ‘and’ = braille{{and}}; ‘the’ = braille{{the}}.
- Other contractions stand for a group of letters within a word. In the example below, the contraction ‘ing’ is used in the word ‘sing’ and as an ending in the word ‘playing.’ {ing} ; ‘s’ + {ing} = s{ing}; ‘play’ + {ing} = play{ing}
- Grade 1 Braille is uncontracted Braille.
- Grade 2 Braille consists of Grade 1 Braille symbols and additional contracted cells.

#### Binary Braille

- The Braille alphabet is depicted by a cell that contains six raised/flat dots, numbered one through six beginning with the dot in the upper left-hand corner with the number descending the columns (see figure below).
- To simplify the calculation, I let “0″ = flat, “1″ = raised.
- The 3×2 matrix (Braille cell) is represented as a 1×6 bitstring (Binary Braille).
- Thus, the letter “c”

#### String Processing Method

CAMEL deduces the complex grammar rules of Grade 2 Braille given partially translated text.

CAMEL learns new symbols by taking 2 input text files (Braille text and corresponding English text), and analyzing them until all unknowns are identified, their meanings are found, and said symbols and their meanings are added to the dictionary.

[![braille](/wp-content/uploads/2013/04/braille.png)](/wp-content/uploads/2013/04/braille.png)

#### Methods of Tagging and Text Extraction

CAMEL must _Tag Unknowns & Compare to English(Extract Chunks)_ to infer symbol meaning. Four different tag types were used: end, front, mid, and full-word.

Below are examples of how these different types of tags were each used to extract meaning.

[![](/wp-content/uploads/2013/04/taggtypes1.jpg)](/wp-content/uploads/2013/04/taggtypes1.jpg)

#### Using Contracted Braille as a Platform

An example of this process infers the symbols that represent _en_ and _in_ using the word penguin (contracted to p{_en_}gu{_in_} in Grade 2 Braille).

[![](/wp-content/uploads/2013/04/penguin-6.jpg)](/wp-content/uploads/2013/04/penguin-6.jpg)

#### Results and Conclusions

### Safety of Community

- commercial application in development that will prevent future mislabeling, such as this sign: labeled “Electrical Room” the **Braille translates to “stairwell”**

### Proof of Concept

- 1st successful automated program that learns compressed Braille
- translation system is effective for arbitrary symbol systems
- language platform easily changed

#### Acknowledgements

[![Rin 2013-04-18 at 10.51.48 AM](/wp-content/uploads/2013/04/Rin-2013-04-18-at-10.51.48-AM.png)](/wp-content/uploads/2013/04/Rin-2013-04-18-at-10.51.48-AM.png)

* * *

The most difficult part of the poster was creating a mature acknowledgements section; I was very tempted to thank…

- insomnia for allowing me to code at 2 am
- coffee for powering me through the day after coding at 2am
- my friend for introducing me to the instant protein-rich “meal” that is trail mix
- my research partner that refused to code in C++, which forced me to learn Python
- Guido van Rossum for inventing said language
- my parents for putting up with me when I immerse myself in research
- my friends for putting up with me when I stop in the middle of a conversation to write down ideas and/or zone-out thinking

Although these were essential to my completion of this project, I think it’s best to not include these points in the poster.
