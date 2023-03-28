//1
function count(n) {
    let myArr = [];
    for (let i = 1; i <= n; i++) {
        myArr.push(i);
    }
    console.log(myArr);
}
count(9)
//2
function upgradedCount(n){
    if (n <= 0){
        console.log('invalid');
    } else {
        let myArr = [];
        for (let i = 1; i <= n; i++) {
            myArr.push(i);
        }
        console.log(myArr);
    }
}
upgradedCount(-10)
//3
function replace(x) {

}