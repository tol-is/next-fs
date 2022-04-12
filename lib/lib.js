import path from "path";
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
    return bundleMDXFile(filepath, mdxOptions);
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

export function getBlock() {
  return getAsyncFile();
}

export function getContent() {
  const cwd = process.cwd();
  console.log("cwd", cwd);

  return Promise.all([getBlock()]);
}
