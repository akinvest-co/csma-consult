import Layout from "@layout/layout.page"
import Banner from "./components/banner/banner"
import Stats from "./components/stats/stats"

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
      <Testimonials />
    </Layout>
  )
}
