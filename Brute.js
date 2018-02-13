const shuffle = (arr1, arr2) => {
  if(!(arr1 instanceof Array) || !(arr2 instanceof Array)) return [];
  var ar1 = arr1.length >= arr2.length ? [...arr1] : [...arr2];
  var ar2 = arr1.length >= arr2.length ? [...arr2] : [...arr1];
  let x = 0;
  for(let i = 0; i < ar1.length; i++) {
    if(x > ar2.length-1) break;
    ar1.splice(Math.floor(Math.random() * (ar1.length+1)), 0, ar2[x]);
    x+=1;
  }
  return ar1;
};

class Brute {

  constructor() {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    this.indices = [0];
    this.combination = [0];
    this.attempts = 0;
  }

  reset() {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    this.indices = [0];
    this.combination = [0];
    this.attempts = 0;
  }

  randomizeAlphabet() {
    let half1 = this.alphabet.slice(0, this.alphabet.length/2);
    let half2 = this.alphabet.slice(this.alphabet.length/2, this.alphabet.length);
    this.alphabet = shuffle(half1, half2);
  }

  setAlphabet(a) {
      this.alphabet = a.split('');
  }

  getAlphabet() {
    return this.alphabet;
  }

  attempts() {
    return this.attempts;
  }

  next() {
   this.combination[0] = this.alphabet[this.indices[0]];
   let nextCombination = this.combination.join('');

     if (this.indices[0] < this.alphabet.length - 1) {
       this.indices[0]++;
     } else {
       for (let i = 0; i < this.indices.length; i++) {
         if (this.indices[i] < this.alphabet.length - 1) {
           this.indices[i]++;
           this.combination[i] = this.alphabet[this.indices[i]];
           break;
         } else {
           this.indices[i] = 0;
           this.combination[i] = this.alphabet[this.indices[i]];

           if (i == this.indices.length - 1) {
             this.indices.push(0);
             this.combination.push(0);
             this.combination[this.combination.length - 1] = this.alphabet[this.indices[this.indices.length - 1]];
             break;
           }
         }
       }
     }
     this.attempts+=1;
     return nextCombination;
  }
}

module.exports = Brute;
