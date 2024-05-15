let letters = [..."Hello world"]
for (let letter of letters) {
    // console.log(letter)
}

for (let [index,letter] of letters.entries()) {
    console.log(index + ":" + letter);
}

letters.forEach(letter=>{
    console.log(letter.toUpperCase());
})