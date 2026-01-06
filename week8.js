// Question 1

function panic(sentence) {
    let uppercaseSentence = sentence.toUpperCase();
    let words = uppercaseSentence.split(" ");
    let panicSentence = words.join("😱");
    return panicSentence + "!";
}
console.log(panic("I'm almost out of coffee")); 
console.log(panic("Winter is coming"));

// Question 2

function whisper(sentence) {
    let lowercaseSentence = sentence.toLowerCase();
    if (lowercaseSentence.endsWith('!')) {
        lowercaseSentence = lowercaseSentence.slice(0, -1); // lowercase without the exclamation mark
    }
    return "shh... " + lowercaseSentence; // 
}
console.log(whisper("PLEASE STOP SHOUTING!"));
console.log(whisper("MA'AM, this is a Wendy's!"));

// Question 3

function altCaps(str) {
    let newString = "";
    for (let i = 0; i < str.length; i++) { // iterate through each character in string
        if (i % 2 === 0) {
            newString += str[i].toUpperCase(); // even index
        } else {
            newString += str[i].toLowerCase(); // odd index
        }
    }
    return newString;
}
console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));

// Question 4

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1); //make first char uppercase and returns string starting from index 1, rest unchanged
}
function toTitleCase(str) {
    let words = str.split(" "); // turn string into array of words
    let capitalizeWords = words.map(capitalizeWord); // use map to apply capitalizeWord function to each word in array
    return capitalizeWords.join(" ");
}
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

// Question 5

function awardBonuses() {
    for (let id = 1; id <= 100; id++) {
        if (id % 3 === 0 && id % 5 === 0) {
            console.log(id + " - JACKPOT! 1 Million and a Yacht!");
        } else if (id % 3 === 0) {
            console.log(id + " - Vacation!");
        } else if (id % 5 === 0) {
            console.log(id + " - $100,000 Bonus!");
        } else {
            console.log(id + " - :(");
        }
    }
}
awardBonuses();