const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * 数组转字符串
 * 数组删除元素
 */
rl.question('', (numStr) => {
    let numbers = [];
    const parts = numStr.split(' ')
    for (let i = 0; i < parts.length; i++) {
        for (let j = 0; j < parseInt(parts[i]); j++) {
            numbers.push(i);
        }
    }
    numbers = numbers.sort((a, b) => a - b);
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== 0) {
            //打印这个元素并删除
            const target = numbers[i];
            numbers.splice(i, 1);
            console.log(target+numbers.join(''));
            rl.close();
            return;
        }
    }
    rl.close();
});