const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function readLines() {
    // 一些边界情况没考虑
    rl.question('', (line1) => {
        rl.question('', (line2) => {
            const split = line1.split(' ');
            split[1] = parseInt(split[1]) % parseInt(split[0]);
            if (parseInt(split[1]) === 0) {
                console.log(' ')
            } else {
                const array = line2.split(' ');
                for (let i = 0; i < parseInt(split[1]); i++) {
                    // 进行移动
                    const temp = array[parseInt(line1[0]) - 1];
                    for (let j = parseInt(split[0]) - 1; j > 0; j--) {
                        array[j] = array[j - 1];
                    }
                    array[0] = temp;
                }
                console.log(array.join(' '))
            }
            rl.close()
        })
    })
}

readLines();