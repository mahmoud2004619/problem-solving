// [1] Create a function to calculate average to a group of numbers (at least 10 numbers)
function Average(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10) {
    return (num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10) / 10
}
console.log(Average(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));

// [2] Write a function that takes the base and height of a triangle and return its area
function calc(x, y) {
    return (x * y) * 0.5;
    // return (x * y) / 2;
}
console.log(calc(20, 10));

// [3] Create a function that takes the age in years and returns the age in days and print it on console
function myAge(x) {
    return (x) * 365;
}
console.log(myAge(19));

// [4] Create a function takes two numbers and return thier sum Create a function takes two numbers and return thier sum
function theSum(num1, num2) {
    return num1 + num2;
}
console.log(theSum(10, 20));

// [5] Create a function that takes an array containing only numbers and return the first element
function myDevelopers() {
    var devs = ["mahmoud", "ahmed", "ashraf", "ali", "omar", "abdo", "alaa", "mariem", "eman", "sara", "alaa", "loay", "amr", "yousef"]
    console.log(devs[0]);
}
myDevelopers()

// [6] Create a function show your name in HTML document

function myName() {
    var Name = "Mahmoud Ashraf Ahmed"
    document.getElementById("demo").innerHTML = Name;
    console.log(Name);
}
myName()

function myName2(name) {
    return name;
}
console.log(myName2("Mahmoud Ashraf"));

// [7] Write a function that takes an integer hours and converts it to second
function hours(second) {
    return second * 3600;
}
console.log(hours(2));

// [8] Given four numbers, return true if the sum of both numbers is more than 350. Otherwise return false.
function checkNumber(a, b, c, d) {
    if (a + b + c + d > 350) {
        return true;
    } else {
        return false;
    }
}
console.log(checkNumber(100, 200, 70, 80));
document.getElementById("demo2").innerHTML = checkNumber(100, 200, 70, 80);


function checkNumber2(a, b, c, d) {
    var total = a + b + c + d;
    if (total > 350) {
        return true;
    } else {
        return false;
    }
}
console.log(checkNumber2(40, 90, 10, 50));
document.getElementById("demo3").innerHTML = checkNumber2(40, 90, 10, 50);

// [9] عمل فانكشن بتاخد رقم لو بيساوي صفر رجع true عكس كدا بيرجع false
function Number(x) {
    if (x == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(Number(0));

// [10] عمل فانكشن بتاخد رقمين وتجيب باقي القسمة بتاعهم
function theResult(num1, num2) {
    return num1 % num2;
}
console.log(theResult(10, 2));
console.log(theResult(11, 2));

// [11] Find the largest of two number Make a function take two parameters num1 and num2 and print the greater number or if they are equal print they are equal.
function theNumber(num1, num2) {
    if (num1 > num2) {
        return "num1 bigger than num2";
    } else if (num1 == num2) {
        return "num1 equal num2";
    } else {
        return "num1 not equal num2";
    }
}
console.log(theNumber(10, 10));
console.log(theNumber(90, 10));

// [12] Check if input variable is a number or not
function cheak(num) {
    if (isNaN(num)) {
        return true;
    } else {
        return false;
    }
}
console.log(cheak(10));
console.log(cheak("Mahmoud"));

// [13] Write a JavaScript function to get the current date
function theDate() {
    var nowDate = new Date();
    return nowDate;
}
console.log(theDate());