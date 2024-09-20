function isAllCaps(sentence) {
    return sentence === sentence.toUpperCase();
}

function countVowels(sentence) {
    const count = sentence.match(/[aeiou]/gi);
    return count ? count.length : 0
}

function mergeAndSortArrays(firstArray, secondArray) {
    return [...firstArray, ...secondArray].sort((a, b) => a - b);
}

function findDuplicates(counts) {
    return counts = counts.filter((item, index) => counts.indexOf(item) !== index);
}

module.exports = {
    isAllCaps,
    countVowels,
    mergeAndSortArrays,
    findDuplicates
}