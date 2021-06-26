//905. Sort Array By Parity
const inputArr = [1, 2, 1]
var sortArrayByParity = function(input) {
	const oddArr=[];
	const evenArr=[];
    input.forEach(item=>{
    	if(item % 2 ===0){
    		oddArr.push(item)
    	}else{
    		evenArr.push(item);
    	}
    })
    return [...oddArr, ...evenArr]
};
console.log(sortArrayByParity(inputArr))