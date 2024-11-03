/**
 * @param {Function[]} functions
 * @return {Function}
 */
var composeFunctions = function(functions) {
    /**
     * This function composes a list of functions into a single function.
     * The composed function takes an input `x` and applies each function 
     * in the `functions` array to `x` from right to left.
     */
    return function(x) {
        /**
         * This inner function takes an input `x` and uses `reduceRight` to 
         * apply the functions in the `functions` array from right to left.
         */
        return functions.reduceRight((acc, fn) => {
            /**
             * `reduceRight` iterates over the `functions` array from right to left.
             * - `acc`: The accumulator, which starts as the initial value `x`.
             * - `fn`: The current function being applied.
             * 
             * The function `fn` is applied to the current `acc` value, and the result 
             * becomes the new `acc` for the next iteration. 
             */
            return fn(acc);
        }, x);
    };
};

// Example usage:
const functions = [x => x + 1, x => x * x, x => 2 * x];
const composedFunction = composeFunctions(functions);

const result = composedFunction(4);
console.log(result); // Output: 65