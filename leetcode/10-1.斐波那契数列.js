/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
   function myFib(n) {
    if(n ===0||n ===1) return n;
    return fib(n-1)+fib(n-2)
   }
  return myFib(n)%1000000007
};