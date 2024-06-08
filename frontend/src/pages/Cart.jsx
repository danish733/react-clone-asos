
import React, { useContext } from 'react'
import { Container, Box, Image, Text, Heading, VStack } from '@chakra-ui/react';
import { CartContext } from '../context/CartContextProvider'

function Cart() {
    const {cart} = useContext(CartContext)
  return (
    <Container my={6} minW="60%">
    <Heading>Cart</Heading>
    {cart.length === 0 ? (
      <Text>Your cart is empty</Text>
    ) : (
      cart.map((item, index) => (
        <Box key={index} borderWidth="1px" borderRadius="lg" border='1px solid black' overflow="hidden" p={4} mb={4}>
          <Image src={item.url} alt={item.title} boxSize="150px" />
          <VStack alignItems="flex-start">
            <Heading as="h5" fontSize="1rem" fontFamily="monospace">{item.title}</Heading>
            <Text>{item.price}</Text>
            <Text color="gray">{item.color.toUpperCase()}</Text>
          </VStack>
        </Box>
      ))
    )}
  </Container>
  )
}

export default Cart