import { getAsyncFile } from "../lib/lib.js";

export default function Other(props) {
  return <main>Other: {JSON.stringify(props)}</main>;
}

export const getServerSideProps = async ({ params }) => {
  const data = await getAsyncFile();

  return {
    props: {
      data,
    },
  };
};
