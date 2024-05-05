const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('', (numStr) => {
    let num = parseInt(numStr);
    //输入默认合法
    let res = 0;
    while (num !== 1) {
        res++;
        num = num % 2 === 0 ? num / 2 : (3 * num + 1) / 2;
    }
    console.log(res);
    rl.close();
});