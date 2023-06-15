import Benchmark from "../benchmark";
const benchmark = new Benchmark();

const main = () => {
  function longestCommonPrefix(strs: string[]): string {
    const firstWord = strs[0];

    let retval = "";
    for (let i = firstWord.length; i > -1; i--) {
      const chunk = firstWord.substring(0, i);
      const isCommonPrefix = strs.every((s) => s.startsWith(chunk));
      if (isCommonPrefix) {
        retval = chunk;
        break;
      }
    }

    return retval;
  }

  console.log(longestCommonPrefix(["a"]));
  console.log(longestCommonPrefix(["dog", "racecar", "car"]));
  console.log(longestCommonPrefix(["flower", "flow", "flight"]));
};

benchmark.run(main);
