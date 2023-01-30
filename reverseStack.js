class Reversal {
  #list = [];
  constructor(initial) {
    if (initial) this.#list = initial;
  }

  reverse() {
    const newArr = this.#list.reverse();
    return newArr;
  }
}

const reversal = new Reversal(['My name is Dug', 'There', 'Hi' ]);
console.log(reversal.reverse()); // returns ['Hi', 'There', 'My name is Dug']

module.exports = { Reversal };

