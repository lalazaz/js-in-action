const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//数组，数字模运算。边界有问题
rl.question('', (numStr) => {
    const [start, end] = numStr.split(' ').map(Number);
    let clockTicks = end - start;
    // 将时钟打点数转换为秒
    const seconds = clockTicks / 100;
    // 将秒转换为时、分、秒
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const remainingSecondsFinal = Math.round(remainingSeconds % 60);

    // 输出格式化的运行时间
    console.log(`${hours}:${minutes}:${remainingSecondsFinal}`);
    rl.close()
})