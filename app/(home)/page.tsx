"use client"

import Layout from "@layout/layout.page"
import Banner from "./components/banner/banner"
import Stats from "./components/stats/stats"
import Features from "./components/features/feautures"
import Partners from "./components/partners/partners"
import Produits from "./components/produits/produits"

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Stats />
      <Produits />
      <Features />
      <Partners />
    </Layout>
  )
}
