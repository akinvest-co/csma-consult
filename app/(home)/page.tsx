'use client'

import Layout from '@layout/layout.page'
import Banner from './components/banner/banner'
import Stats from './components/stats/stats'
import Features from './components/features/feautures'
import Products from './components/products/products'

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Stats />
      <Products />
      <Features />
    </Layout>
  )
}
