import { ReactNode } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import Header from '@components/header/header'
import Footer from '@components/footer/footer'

type PageLayoutProps = {
  children?: ReactNode
}

const Layout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Flex flexDir="column" justify="space-between" minH="100vh">
        <Header />
        <Box as="main">{children}</Box>
        <Footer />
      </Flex>
    </>
  )
}

export default Layout
