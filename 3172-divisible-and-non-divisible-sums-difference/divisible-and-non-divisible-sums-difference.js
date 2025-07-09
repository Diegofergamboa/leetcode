/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let num1 = 0 
    num1Res = []
    let num2 = 0
    // Review of num1 
    for (let i = 0; i <= n; i++) {
        i % m != 0 ? num1 +=i : num1Res.push(i)
    }
    if (num1Res.length > 0) {
        const result = num1Res.reduce((total, num) => {
            return total + num
        })
        num2 = result
    }
    if (num2 >= 0 && num1 >= 0)  {
        return num1 - num2
    } else {
        return num1
    }
};