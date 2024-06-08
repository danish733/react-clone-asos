import React from "react";
import { Box, Container, Heading, Image, Flex ,Text, HStack} from "@chakra-ui/react";

function Footer() {
  const socialIcons = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      alt: "Facebook",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      alt: "Instagram",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/1024px-Snapchat_logo.svg.png",
      alt: "Snapchat",
    },
  ];

  const PaymentIcons = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
      alt: "Visa",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg",
      alt: "Mastercard",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
      alt: "Visa",
    },
    
  ];
  const helpFooter =[
    {title:'Help',link:''},
    {title:'Track Order',link:''},
    {title:'Delivery & return',link:''},
    {title:'Sitemap',link:''}
  ]
  const aboutFooter=[
    {title:'About us', link:''},
    {title:'Career at ASOS', link:''},
    {title:'Corporates responsibility', link:''},
    {title:'Investors site', link:''}
  ]

  const moreFooter=[
    {title:'Mobile & ASOS apps', link:''},
    {title:'Career at ASOS', link:''},
    {title:'ASOS Marketplace', link:''},
    {title:'Gift vouchers', link:''},
    {title:'Black Friday', link:''},
    {title:'ASOS x Thrift+', link:''},
    {title:'Discover the ASOS Credit Card', link:''},
    {title:'Help Improve the ASOS Website', link:''}
  ]

 const privacyFooter =[
    {title:'Privacy & Cookies', link:''},
    {title:'Ts&Cs', link:''},
    {title:'Accessibility', link:''}
 ]


  return (
    <div>
      <Box mt={27} width="100%" height="1px" bg="gray.200" />
      <Container my={2}>
      <Flex justifyContent="space-around" alignItems="center">
        <Flex gap={10}>
          {socialIcons.map((ele, i) => (
            <Image key={i} _hover={{border:'2px solid blue', borderRadius:'50%', cursor:'pointer'}}  w="4%" src={ele.src} alt={ele.alt} />
          ))}
        </Flex>
        <Box ml={-500} mr={6}>
          <Box width="2px" height="35px" bg="gray" />
        </Box>
        <Flex gap={10}>
          {PaymentIcons.map((ele, i) => (
            <Image key={i} w="15%" src={ele.src} alt={ele.alt} />
          ))}
        </Flex>
      </Flex>
      
    </Container>
    <Box bg='#EEEEEE' width='100%' height='46vh'>
         <Container maxW='90%'>
         <Flex p={6}>
            <Box flex='1'>
                <Heading as='h4' size='sm' color='gray'>HELP & INFORMATION</Heading>
                {
                    helpFooter.map((ele,i)=>(
                        <Text _hover={{color:'blue', cursor:'pointer'}} my={3} fontSize='0.8rem' key={i}>{ele.title}</Text>
                    ))
                }
            </Box>

            <Box flex='1'>
                <Heading as='h4' size='sm' color='gray'>ABOUT ASOS</Heading>
                {
                    aboutFooter.map((ele,i)=>(
                        <Text _hover={{color:'blue', cursor:'pointer'}} my={3} fontSize='0.8rem' key={i}>{ele.title}</Text>
                    ))
                }
            </Box>

            <Box flex='1'>
                <Heading as='h4' size='sm' color='gray'>MORE FROM ASOS</Heading>
                {
                    moreFooter.map((ele,i)=>(
                        <Text _hover={{color:'blue', cursor:'pointer'}} my={3} fontSize='0.8rem' key={i}>{ele.title}</Text>
                    ))
                }
            </Box>

            
            <Box flex='1'>
                <Heading as='h4' size='sm' color='gray'>SHOPPING FROM:</Heading>
                <HStack>
                <Text my={3} fontSize='0.8rem' >You're in </Text>
                <Image w='6%' src="https://emojiguide.com/wp-content/uploads/platform/apple/43830.png"/>
                </HStack>
            </Box>
          </Flex>
         </Container>
      </Box>
      <Box width='100%' bg='#DDDDDD'height='7vh'display='flex' alignItems='center' >
                <Container maxW='90%' >
                <Flex alignItems='center'  justifyContent='space-between' >
                    <Box fontSize='0.7rem'>© 2024 ASOS</Box>
                    <Flex gap={6}>
                        {
                            privacyFooter.map((ele,i)=>(
                                <Box _hover={{color:'blue', cursor:'pointer'}} fontSize='0.7rem' key={i}>{ele.title}</Box> 
                            ))
                        }
                    </Flex>
                </Flex>
                </Container>
      </Box>
    </div>
  );
}

export default Footer;



