import fs from "fs";
import path from "path";

const main = async () => {
  const [, , ...fname] = process.argv;
  const filename = fname.join("_").trim().toLowerCase();
  const dirPath = path.resolve("./", filename);
  fs.mkdirSync(dirPath);
  fs.writeFileSync(path.resolve(dirPath, "index.ts"), "");
  fs.writeFileSync(path.resolve(dirPath, "index.md"), "");
};

main();
