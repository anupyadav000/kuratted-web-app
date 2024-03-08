import React from "react";
import { Box, Button, Text, Image, Input } from "@chakra-ui/react";

function ContactUs(props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      margin="20"
      alignItems={"center"}
    >
      <Box display="flex" flexDirection="column">
        <Text>Contact Us</Text>
        <Text>Let’s Start a Conversation!</Text>
      </Box>
      <Box display="flex" flexDirection="row" marginTop={"100px"}>
        <Box>
          <Image
            src="https://www.kuratted.com/images/getintouch.png"
            alt="contact us pic"
            boxSize={"500px"}
            maxHeight={"400px"}
          ></Image>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          width={"800px"}
          paddingLeft={"100px"}
          paddingRight={"100px"}
        >
          <Input
            type="text"
            name="name"
            margin={"25px"}
            placeholder={"Your Name"}
          ></Input>
          <Input
            type="email"
            name="email"
            margin={"25px"}
            placeholder={"Your Email"}
          ></Input>
          <Input
            type="text"
            name="message"
            margin={"25px"}
            placeholder={"Your Message"}
          ></Input>
          <Button
            margin={"25px"}
            maxWidth={"-moz-initial"}
            backgroundColor={"blue.400"}
            color={"white"}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactUs;
