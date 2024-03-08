import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import WhyUs from "./components/WhyUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <Header></Header>
      <Hero></Hero>
      <Clients></Clients>
      <AboutUs></AboutUs>
      <Services></Services>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <WhyUs></WhyUs>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </Box>
  );
}

export default App;
