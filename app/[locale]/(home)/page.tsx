import Layout from "@app/app/layout/layout.page"
import Banner from "./components/banner/banner"
import BureauEtudes from "./components/bureau-etudes/bureau"
import Presentation from "./components/presentation/presentation"
import Methode from "./components/methode/methode"
import EspaceClient from "./components/espace-clients/espace-clients"
import Projets from "./components/projets/projets"
import CTA from "./components/CTA/CTA"


export default function Home() {
  return (
    <Layout>
      <Banner/>
      <Presentation/>
      <BureauEtudes />
     <Methode/>
     <EspaceClient/>
    <Projets/> 
    
    </Layout>
  )
}
