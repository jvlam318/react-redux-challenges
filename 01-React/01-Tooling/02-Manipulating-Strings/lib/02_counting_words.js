function occurrences(text, word) {
  const words = text.split(' ');
  const matchedWords = [];

  words.forEach((element) => {
    if (element.toLowerCase() === word.toLowerCase()) {
      matchedWords.push(element);
    }
  });
  return matchedWords.length;
}

module.exports = occurrences;
