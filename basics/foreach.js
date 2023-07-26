let lang = ["python","java","javascript","c","cpp"]
let nums = [1,2,3,4,5,6,7,8,9,10]

let values = lang.forEach((x) => {
    console.log(x);
})

let even = nums.forEach((x) => {
    if(x % 2 == 0){
        console.log(x);
    }
})

console.log(values);
console.log(even);
