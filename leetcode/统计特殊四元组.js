/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
        let max=Math.max(...nums);
        let index=nums.indexOf(max);
        let count=0;
        let sums=[]
        for (let i = 0; i < index-2; i++) {
                for (let j=i+1;j<index-1 ;j++) {
                        for(let k=j+1;k<index;k++) {
                               sums.push(nums[i]+nums[j]+nums[k])
                        }
                }
        }
        for (let i = 3; i <nums.length; i++) {
                let newIndex=sums.indexOf(nums[i]);
                if(newIndex!=-1) {
                        sums.splice(newIndex,1);
                        count++;
                        i--;
                }
        }
        return  count;
};
console.log(countQuadruplets([35,15,38,1,10,26]));