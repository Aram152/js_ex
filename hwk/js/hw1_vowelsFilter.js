const firstString = "hello. how are you, dear friend?"

const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'y', 'Y']

const getVowels = stringToFilter => {

    let extractedVowels = '';

    for (let i=0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i].toUpperCase(); // or toLowerCase()

        if (vowels.indexOf(currentLetter) != -1) {extractedVowels += currentLetter} //outdated

        if (vowels.includes(currentLetter)) {extractedVowels += currentLetter.toLowerCase()}
    }

    return extractedVowels;
}

console.log(getVowels(firstString))
