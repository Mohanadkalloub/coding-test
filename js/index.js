function findMissingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

const nums = [3, 0, 1];
const missingNumber = findMissingNumber(nums);
console.log("Missing number:", missingNumber);
