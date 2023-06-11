import fs from "fs";
import path from "path";

const newFileContent = `import Benchmark from "../benchmark";
const benchmark = new Benchmark();

const main = () => {
  // code here
};

benchmark.run(main);`;

const main = async () => {
  const [, , ...fname] = process.argv;
  const filename = fname.join("_").trim().toLowerCase();
  const dirPath = path.resolve("./", filename);
  fs.mkdirSync(dirPath);
  fs.writeFileSync(path.resolve(dirPath, "index.ts"), newFileContent, {
    encoding: "utf-8",
  });
  fs.writeFileSync(path.resolve(dirPath, "index.md"), "");
};

main();
