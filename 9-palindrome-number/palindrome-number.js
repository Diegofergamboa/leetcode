/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const stringN = String(x)
    const reverse = stringN.split("").reverse().join('')
    return (reverse === stringN)
};