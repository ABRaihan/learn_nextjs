// import { Layout } from "@/shared/ui";
// import "@/styles/globals.css";
// import { NextPage } from "next";
// import type { AppProps } from "next/app";
// import { ReactElement, ReactNode } from "react";

// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };

// export default function App({ Component, pageProps }: AppPropsWithLayout) {
//   const getLayout = Component.getLayout ?? ((page) => page);
//   return getLayout(
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

import App, { AppContext, AppInitialProps, AppProps } from "next/app";

type AppOwnProps = { example: string };

export default function MyApp({ Component, pageProps, example }: AppProps & AppOwnProps) {
  return (
    <>
      <p>Data: {example}</p>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);

  return { ...ctx, example: "data" };
};
