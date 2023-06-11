import Benchmark from "../benchmark";
const benchmark = new Benchmark();

const main = () => {
  function romanToInt(string: string): number {
    const romanSymbolsWithValue = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let total = 0;

    string = string
      .replace(/IV/g, "IIII")
      .replace(/IX/g, "VIIII")
      .replace(/XL/g, "XXXX")
      .replace(/XC/g, "LXXXX")
      .replace(/CD/g, "CCCC")
      .replace(/CM/g, "DCCCC");

    for (let char of string) {
      total += romanSymbolsWithValue[char];
    }

    console.log(total);
    return total;
  }

  romanToInt("III");
  romanToInt("LVIII");
  romanToInt("MCMXCIV");
};

benchmark.run(main);
