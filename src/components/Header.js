import React from "react";
import {
  Box,
  Image,
  ListItem,
  UnorderedList,
  Button,
  Link,
  defineStyle,
} from "@chakra-ui/react";

function Header(props) {
  const brandPrimary = defineStyle({
    textDecoration: "none",
  });

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      padding="2"
      paddingBottom="1px"
      backgroundColor="white"
      position={"fixed"}
      width={"100%"}
      top={"0px"}
      boxShadow={"5px 0px black"}
      zIndex={"5"}
    >
      <Box>
        <Image
          boxSize="80px"
          src="https://www.kuratted.com/images/logo-kurrated.png"
          alt="Kuratted Logo"
        />
      </Box>
      <Box>
        <UnorderedList display="flex" flexDirection="row">
          <ListItem margin="10">
            <Link href="#" isExternal variant={brandPrimary}>
              Home
            </Link>
          </ListItem>
          <ListItem margin="10">
            <Link href="#" isExternal variant={brandPrimary}>
              About
            </Link>
          </ListItem>
          <ListItem margin="10">
            <Link href="#" isExternal variant={brandPrimary}>
              Services
            </Link>
          </ListItem>
          <ListItem margin="10">
            <Link href="#" isExternal variant={brandPrimary}>
              Testimonials
            </Link>
          </ListItem>
          <ListItem margin="10">
            <Link href="#" isExternal variant="brandPrimary">
              About us
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box>
        <Button colorScheme="blue" margin="6" size="lg">
          Contact
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
