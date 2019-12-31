class Counter {
  constructor(text) {
    // TODO: build an internal Map of word => occurrences.
    this.words = text.split(" ");
  }

  occurrences(word) {
    // TODO: return the number of occurrences
    let count = 0;
    this.words.forEach((element) => {
      if (element.toLowerCase() === word.toLowerCase()) {
        count += 1;
      }
    });
    return count;
  }
}

module.exports = Counter;
