import path from "path";
import { bundleMDXFile, bundleMDX } from "mdx-bundler";

const mdxOptions = {
  esbuildOptions(options) {
    options.minify = true;
    options.target = ["es2020", "node12"];
    return options;
  },
};

export function getAsyncFile() {
  const cwd = process.cwd();
  console.log("cwd", cwd);

  const filepath = path.join(cwd, "data", "file.mdx");
  console.log("filepath", filepath);

  try {
    return bundleMDXFile(filepath, mdxOptions);
  } catch (error) {
    return "NOT FOUND";
  }
}

export function getMdxBlock() {
  const code = `# Hello World\n\nLorem Iprum`;

  return bundleMDX(code, mdxOptions);
}

export function getContent() {
  const cwd = process.cwd();
  console.log("cwd", cwd);

  return Promise.all([getAsyncFile(), getMdxBlock()]);
}
