import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

function ServicesCard(props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      maxWidth={"320"}
      margin={"10"}
      alignItems={"center"}
      border="1px solid black"
      boxShadow="2px 2px #888888"
      borderRadius={"10px"}
    >
      <Image src={props.src} alt={props.alt}></Image>
      <Text
        color={"#222B45"}
        fontSize={"xl"}
        fontWeight={"extrabold"}
        padding={"5"}
      >
        {props.heading}
      </Text>
      <Text textAlign={"center"}>{props.content}</Text>
    </Box>
  );
}

export default ServicesCard;
