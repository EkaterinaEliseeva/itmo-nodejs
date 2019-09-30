const crypto = require("crypto");
const fs = require("fs");
//const message = `/*EliseevaES*/const cr=require("crypto"),fs=require("fs"),pK=fs.readFileSync("key"),m=fs.readFileSync("secret"),dM=cr.publicDecrypt(pK,m).toString();console.log(dM);`;
const message = fs.readFileSync('index.js');
const publicKey = fs.readFileSync('key');
const encryptedMessage = crypto.publicEncrypt(publicKey, message);
fs.writeFileSync("encrypt", encryptedMessage.toString());

console.log(encryptedMessage.toString());
