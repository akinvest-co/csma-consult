"use client"

import Layout from "@layout/layout.page"
import Banner from "./components/banner/banner"
import Stats from "./components/stats/stats"
import Produits from "./components/produits/produits"
import BureauEtudes from "./components/bureau-etudes/bureau"
import Features from "./components/features/features"
import TestimonialsView from "../ui/home/testimonials/testimonials.view"

export default function Home() {
  return (
    <Layout>
      <Banner />
      <BureauEtudes />
      <Stats />
      <Features />
      <Produits />
      <TestimonialsView />
    </Layout>
  )
}
