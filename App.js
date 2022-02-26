function subArraySum(inputArr, desiredSum)
{
	let currentSum = inputArr[0], start = 0;
  let length = inputArr.length;

	for (let i = 1; i <= length; i++)
	{
		while (currentSum > desiredSum && start < i - 1)
		{
			currentSum = currentSum - inputArr[start];
			start++;
		}
		if (currentSum == desiredSum)
		{
			console.log("("+ start + ", " + inputArr.slice(start,i).length +")" +" -> ["+inputArr.slice(start,i)+"]");
			return 
		}
		if (i < length)
			currentSum = currentSum + inputArr[i];
	}
	console.log("No subarray equal to desiredSum has been found");
	return 
}
let inputArr=[5,4,3,9,7,2,4,61,7,88];
let desiredSum = 16;
subArraySum(inputArr,desiredSum);
