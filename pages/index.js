import { getContent } from "../lib/lib.js";

export default function Index(props) {
  return <main>Index: {JSON.stringify(props)}</main>;
}

export const getServerSideProps = async ({ params }) => {
  const stub = [
    {
      _type: "mdxRef",
      file: "file.mdx",
    },
    {
      _type: "mdxBlock",
      code: `# Hello World\n\nLorem Iprum`,
    },
  ];
  const data = await getContent(stub);

  return {
    props: {
      data,
    },
  };
};
