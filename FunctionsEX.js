//1
// function findAreaOfRectangle(length, width) {
//     console.log(`The area of the rectangle is ${length*width}`);
// }
// findAreaOfRectangle(5,10);

function findAreaOfCircle (radius) {
    console.log(`The area of the circle is ${radius*radius*3.14}`)
}
findAreaOfCircle(5);

function findMin(num1, num2) {
    if (num1 > num2) {
        console.log(`${num2} is smaller than ${num1}`);
    } else {
        console.log(`${num1} is smaller than ${num2}`);
    }
}
findMin(5,3);

function checkEquality(n1, n2) {
    if (n1 == n2) {
        console.log(`${n1} is equal to ${n2}`);
    } else {
        console.log(`${n1} is not equal to ${n2}`);
    }
}
checkEquality(5,5)

function calculateLargestRectangle(length1, width1, length2, width2) {
    let areaOfRec1 = length1 * width1;
    let areaOfRec2 = length2 * width2;
    if (areaOfRec1 > areaOfRec2) {
        console.log(`Rectangle 1 has an area of ${areaOfRec1}, which is larger than ${areaOfRec2}`);
    } else {
        console.log(`Rectangle 2 has an area of ${areaOfRec2}, which is larger than ${areaOfRec1}`);
    }
}
calculateLargestRectangle(4,3,9,4);

function charityCollection(mon1, mon2, mon3) {
    let goal = 1000;
    let sum = mon1 + mon2 + mon3;
    if (sum > goal) {
        sum*=2;
        console.log('A local company has donated doubled the amount of charity money! yayy!!!!')
        console.log(`The amount the charity has is now ${sum}!!!`);
    } else {
        console.log('We have not reached our goal yet...');
    }
}
charityCollection(66,99,999);

function stateOfMatter(temperature) {
    if (temperature >= 212) {
        console.log(`Water has now become a gas due to its temperature of ${temperature} degrees fahrenheit`);
    } else if (temperature <= 32) {
        console.log(`Water has now become a solid due to its temperature of ${temperature} degrees fahrenheit`);
    } else {
        console.log(`Water is still... water. due to its temperature of ${temperature} degrees fahrenheit`);
    }
}
stateOfMatter(64);


// function findMaximumValue (number, number2) {
//     if (number > number2) {
//         console.log(`${number} is greater than ${number2}.`);
//     } else {
//         console.log(`${number2} is greater than ${number}`);
//     }
// }
// findMaximumValue(5,3)

function findMinimumValue (number, number2) {
    if (number > number2) {
        console.log(`${number} is greater than ${number2}.`);
    } else {
        console.log(`${number2} is greater than ${number}`);
    }
}
findMinimumValue(5,3);

