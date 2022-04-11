import { getContent } from "../lib/lib.js";

export default function Index(props) {
  return <main>Index: {JSON.stringify(props)}</main>;
}

export const getServerSideProps = async ({ params }) => {
  const data = await getContent();

  return {
    props: {
      data,
    },
  };
};
