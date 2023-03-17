const readline = require('readline-sync');
//1
// function nameSwapper() {
//     let firstprompt = readline.question('Please enter your name: ');
//     let lastprompt = readline.question('Enter your last name: ');
//     console.log(lastprompt, firstprompt);
// }
// nameSwapper();
//2
// function numberGenerator() {
//     let firstdigit = readline.question('Please enter first digit: ');
//     let lastdigit = readline.question('Please enter last digit: ');
//     console.log(`Your number is ${firstdigit+lastdigit}`);
// }
// numberGenerator();
//3
// function avgtemp(temp1, temp2, temp3, temp4, temp5, temp6, temp7) {
//     let sum = temp1+temp2+temp3+temp4+temp5+temp6+temp7;
//     let avg = (sum/7);
//     return(Math.floor(avg));
// }
// let x = avgtemp(56, 81, 26, 39, 50, 38, 59, );
// console.log(x);

//4
function charity(money1, money2, money3) {
    let sum = money1 + money2 + money3;
    if (sum > 2000) {
        sum*=2;
        return;
    } else if (sum >= 1001) {
        sum*=2;
        return(sum;)
    } else {
        sum+=100;
        return(sum);
    }
}

charity(6,800,600)


