import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

function TestimonialsCard(props) {
  const myTestimonials = props.testimonials;
  return (
    <Box display="flex" flexDirection="row" alignItems={"center"} margin="100">
      {myTestimonials.map((testimonial, index) => {
        return (
          <Box
            display="flex"
            flexDirection="column"
            alignItems={"center"}
            maxWidth={"350"}
            margin={"30"}
          >
            <Image
              src={testimonial.url}
              alt={`testimonial ${index}`}
              boxSize={"200px"}
              maxHeight={"130px"}
            ></Image>
            <Text textAlign={"center"}>{testimonial.praise}</Text>
            <Text fontSize={"xl"} fontWeight={"extrabold"} margin={"5"}>
              {testimonial.name}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
}

export default TestimonialsCard;
