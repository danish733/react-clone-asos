import React from "react";
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Flex, Image, Text, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

function MenContainer() {
    const navigate = useNavigate()
    const products = [
        {
            src: "https://content.asos-media.com/-/media/homepages/mw/2024/may/28-gbl/moment/mw_global_summer_linen_moment_870x1110.jpg",
            heading: "SUMMER LINEN",
            text: "Laid-back looks",
          },
      {
        src: "https://content.asos-media.com/-/media/homepages/mw/2024/may/28-gbl/moment/mw_global_hot_tropics_moment_870x1110v3.jpg",
        heading: "SUNDOWN STYLES",
        text: "For your summer nights",
      },
      
      {
        src: "https://content.asos-media.com/-/media/homepages/unisex/events-2024/may/pride/global-cat-tray-image/2024_homepage_moment_pride_unisex_870x1110_v3.jpg",
        heading: "CELEBRATING PRIDE MONTH!",
        text: "The Artist Collection",
      },
      {
        src: "https://content.asos-media.com/-/media/homepages/mw/2024/may/28-gbl/moment/mw_global_carhartt_moment_870x1110.jpg",
        heading: "CARHARTT WIP",
        text: "Streetwear legends",
      },
    ];
  
    const shopNowButton = [
      {
        src: "https://images.asos-media.com/products/topman-short-sleeve-embroidered-floral-shirt-in-navy/206410997-2?$n_480w$&wid=476&fit=constrain",
        heading: "TOPSHOP",
        text: "Headliner energy",
        button: "/men/product",
      },
      {
        src: "https://images.asos-media.com/products/topman-co-ord-short-sleeve-relaxed-border-print-shirt-in-ecru/206108256-2?$n_480w$&wid=476&fit=constrain",
        heading: "NEW IN",
        text: "The freshest fits",
        button: "https://asos-backend-121.onrender.com/men?brand=Ellese",
      },
    ];
  
    const brands = [
      {src:'https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg',link:''},
      {src:'https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png',link:''},
      {src:'https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/adidas-hp-logos-256x256---v2.png',link:''},
      {src:'https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg',link:''},
      {src:'https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg',link:''},
      {src:'https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg',link:''}
    ]
  return (
    <div>
      <Container minW="80%">
        <Flex cursor="pointer" onClick={()=>navigate('/men/product')}>
          <Box
            flex="1"
            width="100%"
            height="500px"
            bg="gray.200"
            display="flex"
          >
            <Text
              position="absolute"
              top="550"
              left="50%"
              transform="translateX(-50%)"
              bg="white"
              color="black"
              p={2}
              fontFamily="Arial"
              fontWeight="bold"
              fontSize="2.2rem"
            >
              Unreal Finds, unreal summer
            </Text>
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              objectPosition="top"
              src="https://images.asos-media.com/products/topman-short-sleeve-relaxed-red-floral-shirt-in-white/206108647-2?$n_480w$&wid=476&fit=constrain"
            />
          </Box>
          <Box
            flex="1"
            width="100%"
            height="500px"
            bg="gray.200"
            display="flex"
          >
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              objectPosition="top"
              src="https://images.asos-media.com/products/topman-knitted-button-through-cardigan-in-blue/205888038-2?$n_480w$&wid=476&fit=constrain"
            />
          </Box>
        </Flex>
        <Flex my={10} gap={8}>
          {products.map((ele, i) => (
            <Box flex="1" key={i}>
              <Box>
                <Image cursor='pointer' onClick={()=> navigate('/men/product')} src={ele.src} />
              </Box>
              <Box>
                <Heading my={5} textAlign="center" as="h4" size="sm">
                  {ele.heading}
                </Heading>
                <Text
                  textAlign="center"
                  fontFamily="Arial"
                  fontWeight="500"
                  fontSize="0.9rem"
                >
                  {ele.text}
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>

      <Box my={70} bg="#F799BA" textAlign="center" h="160px" py={5}>
        <Heading>UP TO 30% OFF</Heading>
        <Heading>SUNSHINE MUST-HAVES</Heading>
        <Text fontWeight="550" fontSize="0.7rem" py={2}>
          Limited time only.Selected styles markdown as shown{" "}
        </Text>
      </Box>

      <Container minW="70%">
        <Flex >
          {shopNowButton.map((ele, i) => (
            <Box flex="1" key={i}>
              <Box height="600px">
                <Image
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  objectPosition="top"
                  src={ele.src}
                  cursor='pointer'
                  onClick={()=> navigate('/men/product')}
                />
              </Box>
              <Box textAlign="center">
                <Heading py={2}>{ele.heading}</Heading>
                <Text fontFamily="Arial" fontSize="1rem">
                  {ele.text}
                </Text>
              </Box>
              <Box
                py={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  _hover={{ bg: "black", color: "white" }}
                  border="2px solid black"
                  variant="outline"
                  colorScheme="black"
                  borderRadius="none"
                  fontWeight="bold"
                  fontSize="1.3rem"
                  px={10}
                  py={7}
                  onClick={()=> navigate('/men/product')}
                >
                  SHOP NOW
                </Button>
              </Box>
            </Box>
          ))}
        </Flex>
        
      </Container>
      <Container minW="80%">
        <Box mt={100} textAlign='center'>
            <Heading>Trending Brands</Heading>
        </Box>
      <Flex gap={4}>
          {
            brands.map((ele,i)=>(
                <Box flex='1' key={i} my={4}>
                <Image src={ele.src} cursor='pointer'/>
            </Box>
            ))
          }
           
        </Flex>
      </Container>
    </div>
  )
}

export default MenContainer