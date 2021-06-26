// 1. Two Sum
const nums = [3,3];
const target = 6;
var twoSum = function(nums, target) {
	let result = []; 
	nums.every((num,index)=>{
		let indexOfotherSecondNumber = nums.findIndex(item,itemIndex)=>itemIndex!==index && item===(target-num));
		if(indexOfotherSecondNumber-index > 0){
			result = [index,indexOfotherSecondNumber];
			return false
		}
		return true
	})
	return result
    
};
console.log(twoSum(nums, target))

