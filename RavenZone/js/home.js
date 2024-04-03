let words = [
    'Work',
    'Entertainment',
    'Questions',
    'Exploration',
    'Adventure',
    'Learning'
]
let wordCount = 0;

const wordPlace = document.getElementById('changingWords')

setInterval(() => {
    if (wordCount > 5) {
        wordCount = 0;
    }

    wordPlace.innerHTML = words[wordCount]

    wordCount = wordCount + 1;
    
}, 3000);