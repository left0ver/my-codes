/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
     let n= nums.length
   let first =0
   let last =n-1
   while(first<=last) {
   let mid=Math.floor((first+last)/2);
       if(nums[mid]==target) {
           return mid;
       }else if(nums[mid]<target){
           first= mid+1;

       }else{
           last= mid-1
       }
   }
   return -1
};