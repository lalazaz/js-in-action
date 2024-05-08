const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const inputs = [];
let T = 0;
rl.on("line", function (data) {
    if (data.trim() === "") {
        rl.close();
    } else {
        if (T === 0) {
            T = parseInt(data.trim());
        } else {
            inputs.push(data.trim().split(' '));
            if (T === inputs.length) {
                for (let i = 0; i < T; i++) {
                    console.log(`Case #${i + 1}: ${parseInt(inputs[i][0]) + parseInt(inputs[i][1]) > parseInt(inputs[i][2])}`)
                }
            }
        }
    }
})
