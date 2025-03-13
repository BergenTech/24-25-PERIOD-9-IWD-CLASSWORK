//#1- Calculate the average of numbers in an array
const numbers = [4, 2, 8, 9, 15, 18]
let total = 0
let count = 0
// conventional for loop
for(let i=0; i<numbers.length; i++){
    total += numbers[i]
    count ++ //count +=1
}

total = 0
count = 0
// for of loop

for(const num of numbers){
    total += num
    count ++
}

total = 0
count = 0
// while loop
let index = 0
while(index<numbers.length){
    total += numbers[index]
    count++
    index++
}

console.log(`Average:${(total/count).toFixed(2)}`)
console.log(`Average:${(total/numbers.length).toFixed(2)}`)

//#2 Find Duplicates
const numberArray = [3, 3, 5, 7, 9, 5, 2, 6, 3, 1]
const counts = {}
const duplicates = []
for (const num of numberArray){
    //Track counts of each number
    if(counts[num]){
        counts[num]++
        if(counts[num] === 2){
            duplicates.push(num)
        }
    }else {
        counts[num] = 1
    }
}

console.log(counts)
console.log(duplicates)