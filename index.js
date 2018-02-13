const yargs = require('yargs');
var fs = require('fs');
const Brute = require('./Brute');
const RuleBookGenerator = require('./rules/RuleBookGenerator');
const RuleBook = require('./rules/RuleBook');

const argv = yargs.options({
  method: {
    demand: true,
    alias: 'm',
    describe: "'encrypt' to secure a message.\n 'decrypt' to show a message.\n 'both' to encrypt and decrypt.\n 'save' file name to save ruleBook too",
    string: true
  },
  message: {
    demand: true,
    alias: 't',
    describe: "Message to encrypt or decrypt",
    string: true
  },
  password: {
    demand: false,
    alias: 'p',
    describe: "Password to encrypt of decrypt message with",
    string: true
  }
}).help().alias('help', 'h').argv;

const method = argv.method;
let message = argv.message;
let password = argv.password;

const ruleBookGen = new RuleBookGenerator(50, 20)

ruleBookGen.generateRandomRuleBook();

const ruleBook = new RuleBook(ruleBookGen.book());

let c = ruleBook.encrypt(message, password)
let d = ruleBook.decrypt(c, password);

let rb = ruleBookGen.book();

rb = JSON.stringify(rb);

console.log(rb)
console.log('\n');
console.log(c);
console.log('\n');
console.log(d);

/*
if(method === 'encrypt') {

  let m = jsm.encrypt(message, password);

  console.log('\nOriginal Message: ' + m.original);
  console.log('\nEncrypted Message: ' + m.encrypted);

} else if(method === 'decrypt') {

  let m = jsm.decrypt(message, password);

  console.log('\nOriginal Message: ' + message);
  console.log('\nDecrypted Message: ' + m);

} else if (method === 'both') {

  let se = new Date().getTime();
  let m = jsm.encrypt(message, password);
  let ee = new Date().getTime();
  let e = jsm.decrypt(m, password);
  let ed = new Date().getTime();

  console.log('\nOriginal Message: ' + message);
  console.log('Encrypted Message: ' + m + ' --- Time: ' + (ee-se) + ' ms');
  console.log('Decrypted Message: ' + e + ' --- Time: ' + (ed-ee) + ' ms');
  if(message === e) {
    console.log('\nSUCCESS!!\n');
  } else {
    console.log('\nFAILED!!\n');
  }

} else if (method === 'brute') {

    const brute = new Brute();
    brute.setAlphabet('abcdefghijklmnopqrstuvwxyz');

    let start = new Date().getTime();
    let end = new Date().getTime();
    let actual = '';
    let trypass = '';
    let i = 0;
      while(true) {
        if(message === actual) break;

        i+=1;
        if(i >= 100000) {
          end = new Date().getTime();
          console.log('100,000 hashes per ' + (end-start) + ' ms');
          start = new Date().getTime();
          i=0;
        }

        trypass = brute.next();
        actual = jsm.decrypt(message, trypass);
      }

    console.log('Actual: ' + actual);

} else {
  console.log('\nPlease supply a method. -h to show help');
}*/
