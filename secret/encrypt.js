const crypto = require("crypto");
const fs = require("fs");
//const message = `/*EliseevaES*/const cr=require("crypto"),fs=require("fs"),pK=fs.readFileSync("key"),m=Buffer.from(fs.readFileSync("secret")),dM=cr.publicDecrypt(pK,m).toString();console.log(dM);`;
const message = fs.readFileSync('index.js');
const publicKey = fs.readFileSync('key');
const messageBuffer = Buffer.from(message);
const encryptedMessage = crypto.publicEncrypt(publicKey, messageBuffer).toString();
fs.writeFileSync("encrypt", encryptedMessage);

console.log(encryptedMessage);
