/**
 * @param {string} s
 * @return {number}
 */
const numberPivot = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}

var romanToInt = function (s) {
    let numberConverted = 0
    const sToArraySplit = s.split('')
    const sToArray = sToArraySplit.map(number => numberPivot[number])

    for (let i = 0; i < sToArray.length; i++) {
      
        if (sToArray[i] < sToArray[i + 1]) {
            numberConverted -= sToArray[i]
        } else if (sToArray[i] >= sToArray[i + 1]) {
            numberConverted += sToArray[i]
        } else {
            numberConverted += sToArray[i]
        }
    }
    
    return numberConverted
}