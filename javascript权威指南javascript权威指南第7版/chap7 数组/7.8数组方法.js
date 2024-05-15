let data = [1, 2, 3, 4, 5];

//迭代返回
console.log(data.map(x => x * x));
console.log(data)

//过滤
console.log(data.filter(x => x < 3));

//find与findIndex，相同点是在找到第一个元素时停止迭代
console.log(data.find(x => x > 3))
console.log(data.findIndex(x => x === -1));

//every与some，断言函数对数组元素判断返回true或false
console.log(data.every(x => x >= 1))
console.log(data.some(x => x === 7))

//reduce与reduceRight，两个参数，第二个参数是返回的初始值，不传入默认为数组第一个元素
//所有元素和
console.log(data.reduce((curr, all) => curr + all))
console.log(data.reduce((curr, all) => curr + all, 0))
//所有元素积
console.log(data.reduce((curr, all) => curr * all, 1))
//最大元素
console.log("最大元素:" + data.reduce((curr, max) => (curr < max) ? max : curr));
//从右边开始
console.log(data.reduceRight((curr, all) => curr + all));

//flat与flatMap,打平数组
let words = ["hello world", "test", "the best language"];
console.log(words.flatMap(word => word.split(" ")));

//slice、splice、fill、copyWithin
console.log(data.slice(2, 3))//slice[start,end]留下
console.log(data);
console.log(data.splice(data, 1));//会修改数组
console.log(data);
console.log(new Array(10).fill("A"));

let fruit = ["applea", "cherry", "apple", "banana"];
console.log(fruit);
console.log(fruit.sort());

//数组转字符串
console.log(fruit.join(""));
console.log(fruit.join("-"));
console.log(fruit.join(","));
console.log(fruit.toString());

//判断对象为数组
console.log(Array.isArray("test"))
console.log(Array.isArray("test".split("")))
console.log(Array.isArray([..."test"]))
console.log(Array.isArray(Array.from("test")))
console.log(Array.isArray(Object.assign([], "test")));
