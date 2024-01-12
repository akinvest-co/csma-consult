"use client"

import Layout from "@layout/layout.page"
import Banner from "./components/banner/banner"
import Stats from "./components/stats/stats"
import Partners from "./components/partners/partners"
import Produits from "./components/produits/produits"
import BureauEtudes from "./components/bureau-etudes/bureau"
import Features from "./components/features/features"
import Testimonials from "./components/testimonials/testimonials"

export default function Home() {
  return (
    <Layout>
      <Banner />
      <BureauEtudes />
      <Stats />
      <Features />
      <Produits />
      <Testimonials />
      <Partners />
    </Layout>
  )
}
