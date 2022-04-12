import path from "path";
import fs from "fs";
import { bundleMDXFile } from "mdx-bundler";

const mdxOptions = {
  esbuildOptions(options) {
    options.minify = true;
    options.target = ["es2020", "node12"];
    return options;
  },
};

function getMDX(filepath) {
  try {
    const code = await fs.readFile(filepath, "utf8");
    console.log(code);

    return await bundleMDX(code, mdxOptions);
  } catch (error) {
    return "NOT FOUND";
  }
}

export function getAsyncFile() {
  const cwd = process.cwd();
  console.log("cwd", cwd);

  const filepath = path.join(cwd, "data", "file.mdx");
  console.log("filepath", filepath);

  const mdx = getMDX(filepath);
  console.log("mdx", mdx);

  return mdx;
}

export async function getBlock() {
  return await getAsyncFile();
}

export function getContent() {
  const cwd = process.cwd();
  console.log("cwd", cwd);

  return await Promise.all([getBlock()]);
}
