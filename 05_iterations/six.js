// const coding = ["js", "ruby", "java", "python", "cpp"];
// const values = coding.forEach((item) => {
//    console.log(item);
//    return item;// undefined
// })
// console.log(values);

const myNums = [1,2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => num>4)
console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]
// const newNums1 = myNums.filter( (num) => {
//     return num>4     // it has to be return
// })

const nums1 = []
myNums.forEach( (num) => {
    if(num>4){
        nums1.push(num)
    }
})
console.log(nums1);//[ 5, 6, 7, 8, 9, 10 ]


