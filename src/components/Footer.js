import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Footer(props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="20"
      alignItems={"center"}
      backgroundColor={"#222B45"}
      color={"white"}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent={"space-between"}
        fontWeight={"bold"}
      >
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={"530px"}
          margin={"40px"}
        >
          <Text marginBottom={"30px"}>KURATTED</Text>
          <Text>
            We specialize in various forms of content creation, anything from
            video production to graphic design to creating creative memes that
            engage with the right audience.
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={"530px"}
          margin={"50px"}
        >
          <Text marginBottom={"30px"}>CONTACT</Text>
          <Text>kuratted@gmail.com</Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={"530px"}
          margin={"50px"}
        >
          <Text marginBottom={"30px"}>FOLLOW US</Text>
          <Box display="flex" flexDirection="row">
            <a href="https://www.linkedin.com/notifications/?filter=all">
              linkedin
            </a>
            {"   "}
            <Box marginLeft={"5px"}>
              <a href="https://www.instagram.com/">instagram</a>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box margin={"25px"} marginTop={"50px"}>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          © 2023 Kuratted All Rights Reserved
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
