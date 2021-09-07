/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var smallestK = function(arr, k) {

        arr.sort((a,b) => a-b)
      let arr1=[];
      for(let i = 0; i < k; i++)
            arr1.push(arr[i]);
            return arr1
        
};
