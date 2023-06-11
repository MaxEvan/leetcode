import Benchmark from "../benchmark";
const benchmark = new Benchmark();

const main = () => {
  function twoSum(nums: number[], target: number): number[] {
    const indices: number[] = [];

    for (let i = 0; i < nums.length; i++) {
      const currentNumber = nums[i];
      const diff = target - currentNumber;

      if (!nums.includes(diff)) continue;

      let otherIndex = nums.indexOf(diff);
      if (otherIndex === i) otherIndex = nums.indexOf(diff, i + 1);
      if (otherIndex === -1) continue;

      indices.push(i);
      indices.push(otherIndex);
      break;
    }

    return indices;
  }

  twoSum([2, 7, 11, 15], 9);
  twoSum([-1, -2, -3, -4, -5], -8);
  twoSum([3, 2, 4], 6);
  twoSum([3, 3], 6);
  twoSum([3, 1, 3], 6);
};

benchmark.run(main);
