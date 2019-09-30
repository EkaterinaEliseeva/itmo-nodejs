/*EliseevaES*/
const cr = require("crypto"),
fs = require("fs"),
pK = fs.readFileSync("key"),
m = fs.readFileSync("secret"),
dM = cr.publicDecrypt(pK,m).toString();
console.log(dM);
