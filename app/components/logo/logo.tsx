import { Box } from "@chakra-ui/react"
import { Link } from "@chakra-ui/next-js"
import Image from "next/image"
import logo from "public/images/csma.png"

export function Logo() {
  return (
    <Box w="100px">
      <Image src={logo} alt="CSMA logo" placeholder="blur" priority />
    </Box>
  )
}

export function AppLogo() {
  return (
    <Link href="/">
      <Logo />
    </Link>
  )
}
