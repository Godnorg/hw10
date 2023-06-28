// 1. Create an array called **`fruits`** containing the following elements: "apple", "banana", "orange", "grape", and "mango". 
// Then, add "pineapple" to the end of the array and "kiwi" to the beginning of the array using the appropriate methods.

const fruits = ["apple", "banana", "orange", "grape", "mango"];
fruits.push('pineapple');
fruits.unshift('kiwi')
console.log(fruits)

// 2. Print the first and last elements of the **`fruits`** array created in problem 1 using the appropriate methods.

console.log(fruits[0])
console.log(fruits[6])

// 3. Create a new array called **`selectedFruits`** that contains the second, third, and fourth elements of the **`fruits`** array 
// created in problem 1 using the **`slice`** method. Print the **`selectedFruits`** array.

const selectedFruits = fruits.slice(1, 4)
console.log(selectedFruits)

// 4. Find the index of the element "grape" in the **`fruits`** array created in problem 1 using the **`indexOf`** method. Print the index.

console.log(fruits.indexOf("grape"))

// 5. Create a string called **`fruitString`** that contains all the elements of the **`fruits`** array created in problem 1, 
// separated by a comma and a space. Then, create a new array called **`fruitsFromString`** by splitting the **`fruitString`** back into 
// an array. Print both the **`fruitString`** and the **`fruitsFromString`** array.

let fruitString = "kiwi, apple, banana, orange, grape, mango, pineapple"
const fruitsFromString = fruitString.split(', ')
console.log(fruitString)
console.log(fruitsFromString)

// 6. Create a new array called **`reversedFruits`** that contains the elements of the **`fruits`** array created in problem 1 
// in reverse order using the **`reverse`** method. Print the **`reversedFruits`** array.

const reversedFruits = fruits.reverse()
console.log(reversedFruits)

// 7. Sort the elements of the **`fruits`** array created in problem 1 in alphabetical order using the **`sort`** method. 
// Print the sorted array.

const sortedArray = fruits.sort()
console.log(sortedArray)

// 8. Given a string called **`email`** containing "**[john.doe@example.com](mailto:john.doe@example.com)**", 
// convert it into an array called **`emailParts`** where the first element is the username (john.doe) and the second element 
// is the domain (example.com). Use the appropriate string and array methods.

let email = '[john.doe@example.com](mailto:john.doe@example.com)'
const emailParts = email.split('@')
console.log(emailParts)

// 9. Create an array called **`temperatures`** containing the following numbers: 72, 85, 90, 65, 75, and 88. 
// Find the highest temperature in the array using a **`for`** loop, and print it.

const temperatures = [72, 85, 90, 65, 75, 88]
let highestTemperature = temperatures[0];
for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > highestTemperature) {
        highestTemperature = temperatures[i]
    }
}

console.log(highestTemperature)

// 10. Create an array called **`names`** containing the following elements: "Alice", "Bob", "Charlie", "David", and "Eva". 
// Use a **`for`** loop to print each name and its corresponding index in the format "Name is at index X".

const names = ["Alice", "Bob", "Charlie", "David", "Eva"]
for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]} is at index ${i}.`)
}
