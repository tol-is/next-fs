import path from "path";
import { promises as fs } from "fs";
import { bundleMDX } from "mdx-bundler";

const mdxOptions = {
  esbuildOptions(options) {
    options.minify = true;
    options.target = ["es2020", "node12"];
    return options;
  },
};

async function getMDX(filepath) {
  try {
    const code = await fs.readFile(filepath, "utf8");
    console.log(code);

    return await bundleMDX(code, mdxOptions);
  } catch (error) {
    return "NOT FOUND";
  }
}

export async function getAsyncFile() {
  const cwd = process.cwd();
  console.log("cwd", cwd);

  const filepath = path.join(cwd, "data", "file.mdx");
  console.log("filepath", filepath);

  const mdx = await getMDX(filepath);
  console.log("mdx", mdx);

  return mdx;
}

export async function getBlock() {
  return await getAsyncFile();
}
