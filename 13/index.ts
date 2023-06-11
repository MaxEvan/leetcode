import Benchmark from "../benchmark";
const benchmark = new Benchmark();

const main = (string: string) => {
  const romanSymbolsWithValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  function romanToInt(string: string): number {
    let total = 0;
    const arr = string.split("");

    for (let i = 0; i < arr.length; ) {
      if (arr[i] === "I") {
        if (arr[i + 1] === "V") {
          total += 4;
          i += 2;
          continue;
        }
        if (arr[i + 1] === "X") {
          total += 9;
          i += 2;
          continue;
        }
      }

      if (arr[i] === "X") {
        if (arr[i + 1] === "L") {
          total += 40;
          i += 2;
          continue;
        }
        if (arr[i + 1] === "C") {
          total += 90;
          i += 2;
          continue;
        }
      }

      if (arr[i] === "C") {
        if (arr[i + 1] === "D") {
          total += 400;
          i += 2;
          continue;
        }
        if (arr[i + 1] === "M") {
          total += 900;
          i += 2;
          continue;
        }
      }

      total += romanSymbolsWithValue[arr[i]];

      i++;
    }

    console.log(total);
    return total;
  }

  romanToInt("III");
  romanToInt("LVIII");
  romanToInt("MCMXCIV");
};

benchmark.run(main);
