import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

function Clients(props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      margin="20"
      marginTop={"0"}
      alignItems={"center"}
    >
      <Box>
        <Text fontSize={"4xl"} color={"#888888"}>
          Trusted Clients
        </Text>
      </Box>
      <Box display="flex" flexDirection="row" alignItems={"center"}>
        <Image
          src="https://www.kuratted.com/images/logos/1.png"
          alt="client1"
          boxSize="100"
          margin={"30"}
        ></Image>
        <Image
          src="https://www.kuratted.com/images/logos/2.png"
          alt="client2"
          boxSize="200"
          margin={"30"}
        ></Image>
        <Image
          src="https://www.kuratted.com/images/logos/3.png"
          alt="client3"
          boxSize="200"
          margin={"30"}
        ></Image>
        <Image
          src="https://www.kuratted.com/images/logos/3.png"
          alt="client4"
          boxSize="200"
          margin={"30"}
        ></Image>
      </Box>
    </Box>
  );
}

export default Clients;
