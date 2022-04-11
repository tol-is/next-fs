import NextLink from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div>
        <NextLink href="/">
          <a>Home</a>
        </NextLink>{" "}
        -{" "}
        <NextLink href="/other">
          <a>Other</a>
        </NextLink>
      </div>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
