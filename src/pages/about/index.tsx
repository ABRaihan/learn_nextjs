import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/shared/ui";
import { NestedLayout } from "@/shared/ui/layout";
import { ReactElement } from "react";

const About: NextPageWithLayout = () => {
  return <h1>About</h1>;
};
export default About;

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
