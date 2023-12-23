"use client";

import Layout from "@layout/layout.page";
import Banner from "./components/banner/banner";
import BureauSolutions from "./components/bureau-solutions/bureau-solutions";
import Stats from "./components/stats/stats";
import Features from "./components/features/feautures";

export default function Home() {
  return (
    <Layout title="Accueil">
      <Banner />
      {/* <BureauSolutions /> */}
      <Stats />
      <Features />
    </Layout>
  );
}
