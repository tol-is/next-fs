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

  return bundleMDXFile(filepath, mdxOptions);
}

export function getMDXBlock(block) {
  return bundleMDX(block.code, mdxOptions);
}

export function bundleMdxContent(blocks) {
  return Promise.all(
    blocks.map(function (block) {
      if (block._type === "mdxRef") {
        return getMdxRef(block);
      } else if (block._type === "mdxBlock") {
        return getMDXBlock(block);
      } else {
        return block;
      }
    })
  );
}
