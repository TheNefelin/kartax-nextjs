import { SessionProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps }) {
  console.log("-- _app -----------")
  console.log(pageProps.session)

  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
