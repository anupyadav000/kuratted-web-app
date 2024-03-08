import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ServicesCard from "./ServicesCard";

function Services(props) {
  const allServicesContent = [
    {
      url: "https://www.kuratted.com/images/marketing.png",
      heading: "Social Media Marketing",
      content:
        "Boost online visibility and drive website traffic with our customized plan. Analyze progress and campaign success with regular reports and analytics.",
    },
    {
      url: "https://www.kuratted.com/images/management.png",
      heading: "Social Media Management",
      content:
        "Save time and increase engagement with our management services. Create regular posts and analyze metrics to measure success.",
    },
    {
      url: "https://www.kuratted.com/images/content.png",
      heading: "Content Creation & Strategy",
      content:
        "Engage your audience with quality copy, graphics, and videos. Align your brand's message with your target audience.",
    },
    {
      url: "https://www.kuratted.com/images/website.png",
      heading: "Website Development",
      content:
        "Websites are where sales go to die. That's because you're site isn't optimized or engaging. We'll help you create amazing-looking website for your brand.",
    },
    {
      url: "https://www.kuratted.com/images/design.png",
      heading: "Graphic Design",
      content:
        "Enhance your brand's image with eye-catching designs for social media posts, logos, and marketing materials. Capture your target audience's attention.",
    },
    {
      url: "https://www.kuratted.com/images/video.png",
      heading: "Video Editing",
      content:
        "Produce high-quality videos that captivate your audience. Create custom content that reflects your brand's image.",
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      margin="20"
      alignItems={"center"}
    >
      <Box paddingBottom={"20"}>
        <Text color={"#012970"} fontSize={"5xl"} fontWeight={"extrabold"}>
          Services
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {allServicesContent.map((service, index) => {
          return (
            <ServicesCard
              src={service.url}
              alt={`service ${index}`}
              heading={service.heading}
              content={service.content}
            ></ServicesCard>
          );
        })}
      </Box>
    </Box>
  );
}

export default Services;
