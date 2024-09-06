/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    const stack = []
    for (const arg of args) {
      stack.push(arg)
    }
    return stack.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */