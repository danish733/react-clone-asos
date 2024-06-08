import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavbarMenWithoutContainer from './NavbarWomenWithoutContainer';
import { Container, Flex, Box, Image, Heading, Text, Button, HStack,useToast,IconButton } from '@chakra-ui/react';
import axios from 'axios';
import { VStack } from '@chakra-ui/react';
import Footer from './Footer';
import { CartContext } from '../context/CartContextProvider';
import { AiOutlineHeart } from 'react-icons/ai';
import { WishlistContext } from '../context/WishlistContextProvider';
import Loading from './Loading';
import { AuthContext } from '../context/AuthContextProvider';

function SingleMenProduct() {
    const {id} = useParams()
    const [singlePro,setSinglePro] = useState({})
    const [loading, setLoading] = useState(false);
    const {addToCart} = useContext(CartContext)
    const {addToWishlist} = useContext(WishlistContext)
    const toast = useToast();
    const navigate = useNavigate()
    const {authDetails} = useContext(AuthContext)

    async function SingleProduct(id){
        setLoading(true)
        try {
            let res = await axios({
                method:'get',
                url :`https://asos-backend-121.onrender.com/men/${id}`
            })
            console.log(res.data)
            setLoading(false)
            setSinglePro(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        SingleProduct(id)
    },[id])

    if(loading){
        return <Loading/>
    }

    const handleAddToCart = () => {
        addToCart(singlePro);
        const toastId = toast({
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top',
          variant: 'solid',
        });
        // Update the toast with custom styles
        toast.update(toastId, {
          render: ({ id, ...props }) => (
            <Box
              p={6}
              bg="gray.300" // Change background color here
              color="black"
              borderRadius="md"
              size='2rem'
            >
              <Heading size="sm">Item added to cart!</Heading>
             
            </Box>
          ),
        });
        setTimeout(() => {
          navigate('/cart');
        }, 2000); // Navigate to the cart page after 2 seconds
      };

      const handleAddToWishlist = () => {
        addToWishlist(singlePro);
        const toastId = toast({
          position: 'top',
          status: 'success',
          duration: 2000,
          isClosable: true,
          
          variant: 'solid',
        });
        // Update the toast with custom styles
        toast.update(toastId, {
          render: ({ id, ...props }) => (
            <Box
              p={6}
              bg="gray.300" // Change background color here
              color="black"
              borderRadius="md"
              size='2rem'
            >
              <Heading size="sm">Item added to Wishlist!</Heading>
             
            </Box>
          ),
        });
        setTimeout(() => {
          navigate('/wishlist');
        }, 2000); // Navigate to the cart page after 2 seconds
      };

  return (
    <div>
        <NavbarMenWithoutContainer/>
        <Container my={6} minW='60%'>
          
                <Flex>
                <Box flex='1.5' height='500px'>
                    <Image width="100%" height="100%"  objectFit="contain" src={singlePro.url}/>
                </Box>
                <Box flex='1'>
                <VStack alignItems="flex-start" spacing={4} p={4}>
              <Heading as="h5" mt={6} fontSize="1rem" fontFamily="monospace">
                {singlePro.title}
              </Heading>
              <Text fontWeight='bold' color='gray'>£{singlePro.price}.00</Text>
              <HStack>
                <Heading size="0.8rem">Color:</Heading>
                <Text color='gray' fontSize="1.2rem" fontFamily="monospace"> {singlePro.color}</Text>
                </HStack>
                <HStack>
                <Heading size="0.8rem">Size:</Heading>
                <Text color='gray' fontSize="1.2rem" fontFamily="monospace"> {singlePro.size}</Text>
                </HStack>
             <Flex>
             <Button mt={4} colorScheme="green"  px={20} borderRadius='none'  onClick={authDetails.isLoggedIn? handleAddToCart : navigate('/login')}>
                ADD TO BAG 
              </Button>
             
              
              <IconButton
                aria-label="Add to wishlist"
                icon={<AiOutlineHeart/>}
                variant="outline"
                colorScheme="red"
                mt={4} ml={4}
                fontWeight='bold'
                onClick={handleAddToWishlist}
              />
              
             
             </Flex>
            </VStack>
                </Box>

            </Flex>
           
        </Container>
        <Footer/>
    </div>
  )
}

export default SingleMenProduct