import React from "react";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";

function Hero(props) {
  return (
    <Box display="flex" flexDirection="row" margin="40" marginTop="200px">
      <Box display="flex" flexDirection="column" maxWidth="700">
        <Heading size="3xl" fontWeight="extrabold">
          Helping Brands Build
        </Heading>
        <Heading
          size="2xl"
          paddingTop="5"
          color="#FCAE18"
          fontWeight="extrabold"
        >
          Online Presence
        </Heading>
        <Text
          paddingTop={"5"}
          color={"#788089"}
          fontWeight="extrabold"
          fontSize="2xl"
        >
          At Kuratted, we specialize in helping brands create unique identities
          and memorable experiences. We offer a range of services, including
          social media marketing and management, engaging content creation with
          video production and graphic design. Our focus is on connecting our
          clients with the right audience to help them achieve their business
          goals.
        </Text>
        <Button maxWidth={150} marginTop={10} backgroundColor={"blue.200"}>
          Let's Talk
        </Button>
      </Box>
      <Box>
        <Image
          src="https://www.kuratted.com/images/hero-image.png"
          alt="hero intro image"
          boxSize={"-webkit-max-content"}
        ></Image>
      </Box>
    </Box>
  );
}

export default Hero;
