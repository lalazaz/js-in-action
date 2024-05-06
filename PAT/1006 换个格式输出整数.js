const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('', (numStr) => {
    let res = "";
    for (let i = 0; i < numStr.length; i++) {
        for (let j = 0; j < parseInt(numStr[i]); j++) {
            res += numStr.length - i === 2 ? "S" : numStr.length - i === 1 ? (j + 1) : "B";
        }
    }
    console.log(res);
    rl.close()
})