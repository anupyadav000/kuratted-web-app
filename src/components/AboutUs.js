import React from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";

function AboutUs(props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="20"
      backgroundColor={"#F7F7F7"}
      alignItems={"center"}
    >
      <Box display="flex" flexDirection="column" alignItems={"center"}>
        <Text color={"#0154FE"} fontSize={"3xl"} fontWeight={"extrabold"}>
          About us
        </Text>
        <Box display="flex" flexDirection="row">
          <Text
            color={"#FCAE18"}
            fontSize={"5xl"}
            fontWeight={"extrabold"}
            paddingRight={"5"}
          >
            We are{" "}
          </Text>
          <Text color={"#012970"} fontSize={"5xl"} fontWeight={"extrabold"}>
            Kuratted
          </Text>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" marginTop={"100"}>
        <Box
          display="flex"
          flexDirection="column"
          backgroundColor={"#FFFFFF"}
          maxWidth={"400"}
          borderRadius={"50px"}
        >
          <Box>
            <Image
              src="https://media.licdn.com/dms/image/D4D03AQHVazDmSnplbA/profile-displayphoto-shrink_200_200/0/1686335890990?e=1715212800&v=beta&t=vZ6Bkcorc7gPHgTYijv1IOyxBPJ8xksYD9qtGZHRenQ"
              alt="my profile pic"
              boxSize={"400"}
              borderRadius={"50px"}
            ></Image>{" "}
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={"center"}
            paddingTop={"5"}
          >
            <Text color={"#012970"} fontSize={"2xl"} fontWeight={"extrabold"}>
              Anup Yadav
            </Text>
            <Text color={"#1A202C"} fontSize={"2xl"}>
              Founder
            </Text>
            <Text padding={"5"} textAlign={"center"} fontSize={"xl"}>
              Content creator with over 130k+ followers and experienced in
              making short-form infotainment content on Instagram and Youtube.
            </Text>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" marginLeft={"100"}>
          <Text
            color={"#000000"}
            fontSize={"5xl"}
            fontWeight={"extrabold"}
            lineHeight={"initial"}
          >
            Experienced, passionate creators producing high-quality, effective
            content.
          </Text>
          <Text
            color={"#708089"}
            fontSize={"2xl"}
            fontWeight={"bold"}
            marginTop={"8"}
          >
            Specializing in content creation, we offer video production, graphic
            design, and engaging memes to keep your audience captivated.
          </Text>
          <Button
            backgroundColor={"#0154FE"}
            maxWidth={"200"}
            color={"white"}
            marginTop={"10"}
          >
            FIND OUT MORE
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUs;
