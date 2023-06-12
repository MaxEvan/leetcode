import Benchmark from "../benchmark";
const benchmark = new Benchmark();

const main = () => {
  function isPalindrome(num: number): boolean {
    const strNum = String(num);

    const firstHalf = strNum.substring(0, Math.floor(strNum.length / 2));
    const secondHalf = strNum.substring(
      Math.ceil(strNum.length / 2),
      strNum.length
    );

    const secondHalfReversed = secondHalf.split("").reverse().join("");
    const isPalindrome = firstHalf === secondHalfReversed;

    return isPalindrome;
  }

  isPalindrome(121);
  isPalindrome(-121);
  isPalindrome(10);
  isPalindrome(1221);
};

benchmark.run(main);
