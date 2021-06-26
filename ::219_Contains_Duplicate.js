//219_Contains_Duplicate
let nums = [0,4,5,0,3,6];
var containsDuplicate = function(nums) {
    let map = new Map();
    for(let i=0; i<=nums.length; i++){
		if(map.get(nums[i])||map.get(nums[i])===0){
			return true;
		}else{
			map.set(nums[i],nums[i])
		}
    }
    return false;
};
console.log(containsDuplicate(nums));