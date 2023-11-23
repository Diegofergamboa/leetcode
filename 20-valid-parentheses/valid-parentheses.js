/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const opening = ["(", "{", "["];
    
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        
        if (opening.includes(currentChar)) {
            stack.push(currentChar);
        } else {
            if (stack.length === 0) return false;
            
            const lastChar = stack[stack.length - 1];
            if ((lastChar === "(" && currentChar === ")") || (lastChar === "{" && currentChar === "}") || (lastChar === "[" && currentChar === "]")) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    
    return stack.length === 0 ? true : false;
}