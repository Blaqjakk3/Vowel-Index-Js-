# Vowel-Index-Js-

This JavaScript program finds the positions of vowels in a given word. It includes an interactive command-line interface for testing different words.

How It Works
The program consists of two main parts:

The findVowels function:

Takes a word as input
Returns an array of positions where vowels occur (1-based indexing)
Considers 'a', 'e', 'i', 'o', 'u', and 'y' as vowels
Case-insensitive (treats uppercase and lowercase letters the same)
Interactive testing interface:

Uses Node.js readline module for user input
Continuously prompts for words until user types "exit"
Displays vowel positions for each entered word

Usage
Run the program using Node.js:
node vowelIndex.js

Then:

Enter a word when prompted
View the positions of vowels in your word
Enter another word or type "exit" to quit
