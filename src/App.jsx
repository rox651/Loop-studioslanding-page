import { Box, Heading } from "@chakra-ui/react";
import { Header } from "./layout/Header";
import ImgBanner from "./images/mobile/image-hero.jpg";

function App() {
  return (
    <Box
      m={0}
      h="100vh"
      bgGradient="linear(to-l, #15e, #99e)"
      backgroundImage={ImgBanner}
      backgroundSize="cover"

    >
      <Header />

      <Box display="grid" placeItems="center" h="600px" p="30px">
        <Heading color="#fff" fontWeight="300" border="2px" textTransform="uppercase" as="h1" size="3xl" p="33px">
          immersive experiences that deliver
        </Heading>
      </Box>
    </Box>
  );
}

export default App;
