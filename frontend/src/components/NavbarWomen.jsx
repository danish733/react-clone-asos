import React from "react";
import { HStack, Text, Flex, Box } from "@chakra-ui/react";
import WomenContainer from "./WomenContainer";
import Footer from "./Footer";

function NavbarWomen() {
  const navWomenLinks = [
    "Sale",
    "News in",
    "Dresses",
    "Clothing",
    "Trending",
    "Shoes",
    "Face + Body",
    "Accessories",
    "Brands",
    "Sportwear",
    "Topshop",
    "Marketplace",
  ];
  return (
    <div>
      <HStack bg="#525050" pl={{ base: 0, md: 100 }} width={{base:'100%', md:'100%',lg:'100%'}}>
        {navWomenLinks.map((ele, i) => (
          <Text
            fontSize="0.9rem"
            fontFamily="Arial"
            cursor="default"
            color="white"
            _hover={{ bg: "white", color: "black" }}
            mx={-1}
            px={{base:'1', md:'2',lg:'5'}}
            py={{base:'1', md:'2',lg:'3'}}
            key={i}
          >
            {ele}
          </Text>
        ))}
      </HStack>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box
          flex={{ base: 1, md: 1 }}
          bg="#F799BA"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={{ base: "auto", md: "50px" }}
          fontFamily="monospace"
          fontWeight="bold"
          fontSize="large"
          mb={{ base: "1rem", md: 0 }}
        >
          UP TO 30% OFF SUNSHINE MUST-HAVES
        </Box>
        <Box
          flex={{ base: 1, md: 1 }}
          bg="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={{ base: "auto", md: "50px" }}
          fontFamily="monospace"
          fontWeight="bold"
          fontSize="large"
          color="white"
          mt={{ base: "1rem", md: 0 }}
        >
          FREE WORLDWIDE DELIVERY
        </Box>
      </Flex>
      <WomenContainer />
      <Footer />
    </div>
  );
}

export default NavbarWomen;

