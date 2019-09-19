const crypto = require("crypto");
const fs = require("fs");
//const message = `/*EliseevaES*/const cr=require("crypto"),fs=require("fs"),pK=fs.readFileSync("key"),m=Buffer.from(fs.readFileSync("secret")),dM=cr.publicDecrypt(pK,m).toString();console.log(dM);`;
const message = fs.readFileSync('index.js');
console.log(message);
const publicKey = fs.readFileSync('key');
const messageBuffer = Buffer.from(message);
const encryptedMessage = crypto.publicEncrypt(publicKey, messageBuffer).toString();
fs.writeFileSync("encrypt", encryptedMessage);

console.log(encryptedMessage);
// const decBuffer = Buffer.from(fs.readFileSync('encrypt'));
// const decryptedMessage = crypto.publicDecrypt(publicKey, decBuffer).toString('utf8');
// console.log(decryptedMessage);
