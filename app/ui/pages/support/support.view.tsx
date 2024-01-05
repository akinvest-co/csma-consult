import Layout from '@app/app/layout/layout.page'
import { supportData } from '@app/app/lib/static-data/pages/support'

export default function SupportView() {
  return (
    <Layout>
      {supportData.map(({ id, title, description }) => (
        <h1 key={id}>{title}</h1>
      ))}
    </Layout>
  )
}
