import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

function Contact(props) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent={"space-around"}
      padding="20"
      backgroundColor={"#F2F7FA"}
    >
      <Box display={"flex"} flexDirection={"row"}>
        <Text color={"#FCAE18"} fontSize={"4xl"} fontWeight={"extrabold"}>
          Interested
        </Text>
        <Text
          color={"#151516"}
          fontSize={"4xl"}
          marginLeft={"20px"}
          fontWeight={"extrabold"}
        >
          {" "}
          in Working with us?
        </Text>
      </Box>
      <Button backgroundColor={"#090B3B"} color={"#FCFCFC"}>
        Contact Now
      </Button>
    </Box>
  );
}

export default Contact;
