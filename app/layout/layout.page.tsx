import { ReactNode } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import path from "path";
import { APP_NAME, Routes } from "@config/routes/routes";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";

type PageLayoutProps = {
  title: string;
  children?: ReactNode;
};

const Layout = ({ title, children }: PageLayoutProps) => {
  return (
    <>
      <NextSeo
        title={`${title} | ${APP_NAME} `}
        canonical={`${Routes.base}/${path}`}
        openGraph={{
          url: `${Routes.base}/${path}`,
          title: `${title} – ${APP_NAME}`,
        }}
      />

      <Flex flexDir="column" justify="space-between" minH="100vh">
        <Header />
        <Box as="main">{children}</Box>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
