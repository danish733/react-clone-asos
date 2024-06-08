import React from 'react'
import { HStack, Text, Flex, Box } from "@chakra-ui/react";

function NavbarWomenWithoutContainer() {
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
    <HStack bg="#525050" pl={100}>
    {navWomenLinks.map((ele, i) => (
      <Text
        fontSize="0.9rem"
        fontFamily="Arial"
        cursor="default"
        color="white"
        _hover={{ bg: "white", color: "black" }}
        mx={-1}
        px={5}
        py={3}
        key={i}
      >
        {ele}
      </Text>
    ))}
  </HStack>
  <Flex cursor='pointer'>
    <Box
      flex="1"
      bg="#F799BA"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="50px"
      fontFamily='monospace'
      fontWeight='bold'
      fontSize='large'
    >
      UP TO 30% OFF SUNSHINE MUST-HAVES
    </Box>
    <Box
       flex="1"
       bg="black"
       display="flex"
       alignItems="center"
       justifyContent="center"
       height="50px"
       fontFamily='monospace'
       fontWeight='bold'
       fontSize='large'
       color='white'
    >
      FREE WORLDWIDE DELIVERY
    </Box>
  </Flex>
  
 
</div>
  )
}

export default NavbarWomenWithoutContainer