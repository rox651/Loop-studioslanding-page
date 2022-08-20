import { Box, Container, Image } from "@chakra-ui/react"
import Logo from "../images/logo.svg"

import HamburguerIcon from "../images/icon-hamburger.svg"

export const Header = () => {
  return (
   <Container maxW="1400px" pt="40px" display="flex" w="100%" justifyContent="space-between">
        <Image src={Logo}  alt="logo"/>
        <Image w="40px" src={HamburguerIcon} alt="hamburger icon"/>

   </Container>
  )
}
