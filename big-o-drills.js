/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable eqeqeq */
/* eslint-disable indent */
/* eslint-disable strict */
//Big-O drills

//1.1 Constant time O(1)
//Person looking for a golden retriever, no matter the number of people
//one person will have a golden and will yell "I do, be happy to bring him over"

//1.2 Linear  time O(n)
//using for loop to check the breed of the dog
//input will be array and then function will loop through the array
// to find the dog breed they are looking for
//as the input increases the result increasess

//2 Even or Odd
function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
}

isEven(10);

//Constant time O(1)
//because it is a basic arithmetic operation
//no matter the size, time will be the same
//dependent on if value has remainder or not
//but will always return one ouput

//3 Are you here?
function areYouHere(arr1, arr2) {
    let ticki = 0;
    let tickj = 0;
    for (let i = 0; i < arr1.length; i++) {
        ticki++;
        // console.log('ticki', ticki);
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            tickj++;
            // console.log('tickj', tickj);
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
areYouHere([1, 2, 3], [4, 5, 6]); // ==> 3,9 ticks
areYouHere([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]); // ==> 6,36 ticks
//Polynomial time O(n^2)
//because this is nested loop
//two levels of looping O(n^2)
//dependent on value from first loop el1 
//because the second loop compares that value to the value from the second loop el2
//if the value of arr1 and arr2 are equal it will return true and exit

//4 Doubler
function doubleArrayValues(array) {
    let ticks = 0;
    for (let i = 0; i < array.length; i++) {
        ticks++;
        // console.log(ticks);
        array[i] *= 2;
    }
    return array;
}
doubleArrayValues([1, 2, 3]); //3 ticks
doubleArrayValues([1, 2, 3, 4, 5, 6]); //6 ticks
//Linear O(n)
//time is proportional to the size(n)

//5 Naive search
function naiveSearch(array, item) {
    let ticks = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            ticks++;
            console.log(ticks);
            return i;
        }
    }
}
//Linear O(n)
//checking array if it is equal to item, then it returns i

//6 Creating Pairs
function createPairs(arr) {
    let ticks = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            ticks++;
            console.log(ticks);
            console.log(arr[i] + ', ' + arr[j]);
        }
    }
}
// Polynomial time O(n^2) (quadratic)
//array must go through two loops
// j = i so second loop depends on value from first loop

//7 Compute the sequence
function compute(num) {
    let result = [];
    let ticks = 0;
    for (let i = 1; i <= num; i++) {
        ticks++;
        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result, ticks;
}
compute(3);
compute(5);
//Linear O(n)
//input num will return same number output
//input 3 => output 3 items in array
//input 5 => output 5 items in array

//8 Efficient Search
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;
    let ticks = 0;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            ticks++;
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            ticks++;
            maxIndex = currentIndex - 1;
        }
        else {
            ticks++;
            return currentIndex;
        }
    }
    return -1;
}
efficientSearch([1, 2, 3], 2); //1 tick
efficientSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 99);
//6 ticks
//Logarithmic time O(log(n))
//runtime does not increase a lot even though size of input increased significantly

//9 Random element
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
//Constant time O(1)
//no matter size of input, output will be the same

//10 What Am I? 
function isWhat(n) {
    let tick = 0;
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        tick++;
        if (n % i == 0) return false;
    }
    return true, tick;
}
//Linear time O(n)
//output is dependent on the input, whether it is divisible or not

//11 Tower of Hanoi
function TOH(num, source, dest, temp) {

    if (num === 1) {
        print(num, source, dest);
    }else{
      TOH(num-1, source, temp, dest);
        print(num, source,dest);
      
      TOH(num-1, temp, dest, source);
    }
}

function print(num, source,dest){
    console.log(`For disk ${num} : moving ${source} ---> ${dest}`);
}
TOH(6, 'A', 'C', 'B');
//Given 5 disks, the 7th call disk 1 is moving from A ---> C.
//Given 3 disks, the total movements is 7.
//Given 4 disks, the total movements is 15.
//Given 5 disks, the total movements is 31.
//O(2^n), the movements increase by power of 2


//12 Iterative version
//12-1 Counting Sheep
function countSheep(num) {
    for(let i=0; i<num; i++){
        console.log(`${num-i}: Another sheep jump over the fence`);
    }
    return  console.log(`All sheep jumped over the fence`);

}
countSheep(3);

//12-2 Write a function called `powerCalculator()`
function powerTo(num, exponent) { 
    return Math.pow(num, exponent); 
}
powerTo(5,2);

//12-3 Reverse String
function reverseString(str) {
    let reverse = '';
    for(let i=str.length-1; i>=0; i--) {
        reverse += str.charAt(i);
    }
    return reverse;
}
reverseString('hello');

//12-4 Triangular Number
function triangle(n) {
    let result = 0;
    for(let i=1; i<=n; i++){
        result += i;
    }
    return result;
}
triangle(5);

//12-5 String Splitter
function split(str, sep) {
    return str.split(sep).join(' ');
}
split('02/20/2020','/');

//12-6 Exercise 6 - Factorial
function factorial(n) {  
    let result=0;
    for(let i=1; i<=n; i++){
        result = n * i;
    }
    return result;
}
factorial(6);

//12-7 Fibonacci
function fibonacci(n) {
    let res1 =0, res2=1, result=1;

    for(let i=1; i<n; i++){
        result = res1 + res2;
        res1 = res2;
        res2 = result;
    }
    return result;
}
console.log(fibonacci(6));

//13. Recursive Big O
    //13-1 Counting Sheep - Linear time O(n)
    //13-2 powerCalculator - Constant time O(1)
    //13-3 Reverse String - Linear time O(n)
    //13-4 Triangular Number - Linear time O(n)
    //13-5 String Splitter - Constant time O(1)
    //13-6 Factorial - Linear time O(n)
    //13-7 Fibonacci - O(2^n)
    //13-8 Find a way out of the maze - Logarithmic time O(log(n))
    //13-9 Find ALL the ways out of the maze - Exponential time O(4^n)
    //13-10 Anagrams - Polynomial time O(n^2)
    //13-11 Organization Chart - Linear time O(n)
    //13-12  Binary Rep - Logarithmic time O(log(n))

//14. Iterative Big O
    //13-1 Counting Sheep - Linear time O(n)
    //13-2 powerCalculator - Constant time O(1)
    //13-3 Reverse String - Linear time O(n)
    //13-4 Triangular Number - Linear time O(n)
    //13-5 String Splitter - Constant time O(1)
    //13-6 Factorial - Linear time O(n)
    //13-7 Fibonacci - Linear time O(n)

