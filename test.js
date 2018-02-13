//

let al = '~!@#$%^&*()_+{}[]|:;<>,.?/abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

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


let half1 = al.slice(0, al.length/2);
let half2 = al.slice(al.length/2, al.length);
al = shuffle(half1, half2);
al = shuffle(half2, half1);
al = shuffle(half1, half2);
al = shuffle(half2, half1);
al = shuffle(half1, half2);
al = shuffle(half2, half1);
al = shuffle(half1, half2);
al = shuffle(half2, half1);
al = shuffle(half1, half2);
al = shuffle(half2, half1);
al = shuffle(half1, half2);
al = shuffle(half2, half1);

console.log(al.join(''));
