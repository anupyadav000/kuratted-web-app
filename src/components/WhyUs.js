import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

function WhyUs(props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      margin="20"
      alignItems={"center"}
    >
      <Box>
        <Text
          fontSize={"4xl"}
          fontWeight={"extrabold"}
          color={"#012970"}
          margin={"100px"}
          marginTop={"30px"}
        >
          Why you should work with us
        </Text>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box>
          <Image
            src="https://www.kuratted.com/images/work-with-us.png"
            alt="why us image"
            boxSize={"700px"}
            maxHeight={"480px"}
          ></Image>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            flexDirection="column"
            alignItems={"self-start"}
            maxWidth={"500px"}
            margin={"10"}
            marginTop={"2px"}
          >
            <Text fontSize={"2xl"} fontWeight={"extrabold"} color={"#012970"}>
              Reels Creation
            </Text>
            <Text
              fontSize={"medium"}
              fontWeight={"extrabold"}
              color={"#848484"}
            >
              Tried to hop onto reels but aren't able to grow your number of
              views.We can help you create most engaging reels.
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={"self-start"}
            maxWidth={"500px"}
            margin={"10"}
            marginTop={"2px"}
          >
            <Text fontSize={"2xl"} fontWeight={"extrabold"} color={"#012970"}>
              Social Media Marketing
            </Text>
            <Text
              fontSize={"medium"}
              fontWeight={"extrabold"}
              color={"#848484"}
            >
              Excellent content needs excellent marketing to unlock it's full
              potential.we will help you market your content well.
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={"self-start"}
            maxWidth={"500px"}
            margin={"10"}
            marginTop={"2px"}
          >
            <Text fontSize={"2xl"} fontWeight={"extrabold"} color={"#012970"}>
              Graphic Designing
            </Text>
            <Text
              fontSize={"medium"}
              fontWeight={"extrabold"}
              color={"#848484"}
            >
              You may create the best video in the world, but without a proper
              thumbnail strategy, it'll never perform upto its potential.
            </Text>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            flexDirection="column"
            alignItems={"self-start"}
            maxWidth={"500px"}
            margin={"10"}
            marginTop={"2px"}
          >
            <Text fontSize={"2xl"} fontWeight={"extrabold"} color={"#012970"}>
              Content Research
            </Text>
            <Text
              fontSize={"medium"}
              fontWeight={"extrabold"}
              color={"#848484"}
            >
              You want to create content for your video but aren't getting time
              to research?We will help you do content research for you.
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={"self-start"}
            maxWidth={"500px"}
            margin={"10"}
            marginTop={"2px"}
          >
            <Text fontSize={"2xl"} fontWeight={"extrabold"} color={"#012970"}>
              Video Editing
            </Text>
            <Text
              fontSize={"medium"}
              fontWeight={"extrabold"}
              color={"#848484"}
            >
              To make the most enticing video for your viewers, we use text
              animations, transitions, and graphics.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default WhyUs;
