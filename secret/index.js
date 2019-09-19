/*EliseevaES*/
const cr = require("crypto");
const fs = require("fs");
pK = fs.readFileSync("key");
const m = Buffer.from(fs.readFileSync("secret"));
const dM = cr.publicDecrypt(pK,m).toString();
console.log(dM);
