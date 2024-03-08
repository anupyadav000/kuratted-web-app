import React, { useEffect, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import TestimonialsCard from "./TestimonialsCard";

function Testimonials(props) {
  const allTestimonials = [
    {
      url: "https://www.kuratted.com/images/logos/1.png",
      name: "The Sangwan Family",
      praise:
        "Working with Kunal is a true blessing. He provided us with a comprehensive digital marketing strategy that shot our search engine rankings up and boosted our social media presence.",
    },
    {
      url: "https://www.kuratted.com/images/logos/2.png",
      name: "Suprememart.in",
      praise:
        "Kunal helped us to create ads for our facebook and it turned out to be so good.We generated hundreds of sales with it.",
    },
    {
      url: "https://www.kuratted.com/images/logos/3.png",
      name: "Create",
      praise:
        "Kunal was very thorough, attentive and knowledgeable in getting our instagram reels strategy going. His understading of the instagram algorithm helped us setup without any prior instagram knowledge.",
    },
  ];

  const [testimonialsList, setTestimonialsList] = useState(allTestimonials);

  const onLeftClick = () => {
    const tmpArray = [];
    testimonialsList.forEach((testimonial, index) => {
      if (index > 0) {
        tmpArray.push(testimonial);
      }
    });
    tmpArray.push(testimonialsList[0]);
    setTestimonialsList(tmpArray);
  };

  const onRightClick = () => {
    const tmpArray = [];
    tmpArray.push(testimonialsList[testimonialsList.length - 1]);
    testimonialsList.forEach((testimonial, index) => {
      if (index < testimonialsList.length - 1) {
        tmpArray.push(testimonial);
      }
    });
    setTestimonialsList(tmpArray);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      onRightClick();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      margin="20"
      alignItems={"center"}
    >
      <Box display="flex" flexDirection="column" alignItems={"center"}>
        <Text fontSize={"3xl"} color={"#0154FE"} fontWeight={"bold"}>
          Testimonials
        </Text>
        <Text fontSize={"6xl"} color={"012970"} fontWeight={"extrabold"}>
          Clients Love us
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Button onClick={onLeftClick}>{"<"}</Button>
        <TestimonialsCard testimonials={testimonialsList}></TestimonialsCard>
        <Button onClick={onRightClick}>{">"}</Button>
      </Box>
    </Box>
  );
}

export default Testimonials;
