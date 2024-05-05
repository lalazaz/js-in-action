const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('', (numStr) => {
    /*let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }*/
    let power = ["ling", "yi", "er", "san", "si", "wu", "liu", "qi", "ba", "jiu"];
    let sum = numStr.split('').reduce((acc, curr) => acc + parseInt(curr), 0);

    /* let res = "";
     for (let i = 0; i < (sum + "").length; i++) {
         res += power[parseInt((sum + "")[i])] + " ";
     }*/
    let res = Array.from(String(sum), digit => power[parseInt(digit)]).join(' ');

    console.log(res.trim());
    rl.close();
});