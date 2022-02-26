//Task: Find a neighbouring subarray of the given sum
//A list of positive integer
// Input:
// let array = [5, 4, 3, 9, 7, 2, 4, 61, 7, 88]
// let targetSum = 16
// Output: 
// range (start-index, length)
function subArraySum(inputArr, desiredSum)
{
	let curr_sum = inputArr[0], start = 0;
  let length = inputArr.length;

	// Pick a starting point
	for (let i = 1; i <= length; i++)
	{
		while (curr_sum > desiredSum && start < i - 1)
		{
			curr_sum = curr_sum - inputArr[start];
			start++;
		}
		if (curr_sum == desiredSum)
		{
			console.log("("+ start + ", " + inputArr.slice(start,i).length +")" +" -> ["+inputArr.slice(start,i)+"]");
			return 
		}
		if (i < length)
			curr_sum = curr_sum + inputArr[i];
	}
	console.log("No subarray equal to desiredSum has been found");
	return 
}
	
let inputArr=[5,4,3,9,7,2,4,61,7,88];
let desiredSum = 16;
subArraySum(inputArr,desiredSum);
