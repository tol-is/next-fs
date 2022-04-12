import { bundleMdxContent } from "../lib/lib.js";

export default function Index(props) {
  return <main>Other: {JSON.stringify(props)}</main>;
}

export const getServerSideProps = async ({ params }) => {
  const blocks = [
    {
      _type: "mdxRef",
      file: "file.mdx",
    },
    {
      _type: "mdxBlock",
      code: `# Hello World\n\nLorem Iprum`,
    },
  ];
  const data = await bundleMdxContent(blocks);

  return {
    props: {
      data,
    },
  };
};
