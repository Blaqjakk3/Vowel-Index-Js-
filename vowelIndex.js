function findVowels(word) {
   
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    
   
    const lowerWord = word.toLowerCase();
    
   
    const positions = [];
    
    
    for (let i = 0; i < lowerWord.length; i++) {
        if (vowels.includes(lowerWord[i])) {
            positions.push(i + 1);
        }
    }
    
    return positions;
}



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function testCustomWord() {
    readline.question('Enter a word (or "exit" to quit): ', word => {
        if (word.toLowerCase() === 'exit') {
            readline.close();
            return;
        }
        console.log(`Vowel positions in "${word}": [${findVowels(word)}]`);
        testCustomWord(); 
    });
}


console.log('\nTest your own words:');
testCustomWord();
