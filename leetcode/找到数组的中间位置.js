/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let n=nums.length
    let sum=nums.reduce((sum,item)=>sum+=item)
    let front=0;
    let last=sum-nums[0];
    for (let i = 0; i < n; ) {



        if (front===last)
            return i;
        else{
            front+=nums[i];
            i++;
            last-=nums[i]
        }

    }
    return  -1;
};
console.log(findMiddleIndex([2,3,-1,8,4]));