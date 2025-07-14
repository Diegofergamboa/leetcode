/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let answer = 0
    for (let i = 0; i <= n; i++) {
        i % m != 0 ? answer +=i : answer -=i
    }

    return answer
};