import path from "path";
import { bundleMDXFile, bundleMDX } from "mdx-bundler";

const mdxOptions = {
  esbuildOptions(options) {
    options.minify = true;
    options.target = ["es2020", "node12"];
    return options;
  },
};

export function getMdxRef(block) {
  const cwd = process.cwd();
  const filepath = path.join(cwd, "data", block.file);

  console.log("filepath", filepath);

  try {
    return bundleMDXFile(filepath, mdxOptions);
  } catch (error) {
    return "NOT FOUND";
  }
}

export function getMDXBlock(block) {
  return bundleMDX(block.code, mdxOptions);
}

export function getContent(data) {
  const cwd = process.cwd();
  console.log("cwd", cwd);

  return Promise.all(
    data.map((block) => {
      if (block._type === "mdxRef") {
        return getMdxRef(block);
      } else if (block._type === "mdxBlock") {
        return getMDXBlock(block);
      } else {
        return Promise.resolve(block);
      }
    })
  );
}
