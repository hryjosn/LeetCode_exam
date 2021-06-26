//4. Median of Two Sorted Arrays
const nums1 = [1, 3];
const nums2 = [2];
var findMedianSortedArrays = function(nums1, nums2) {
	const newList=[...nums1, ...nums2]
    const medianIndex = newList.length % 2 === 0?newList.length / 2:Math.floor(newList.length / 2) - 1
    console.log("medianIndex",medianIndex)
    if(newList.length % 2 === 0){
    	return ((newList[medianIndex]+newList[medianIndex+1])/2).toFixed(5)
    
    }else{
    	return newList[medianIndex+1].toFixed(5)
    }
};
console.log(findMedianSortedArrays(nums1, nums2))

