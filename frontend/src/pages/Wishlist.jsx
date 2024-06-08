import React, { useContext } from 'react';
import { Container, SimpleGrid, Box, Image, Text, Heading } from '@chakra-ui/react';
import { WishlistContext } from '../context/WishlistContextProvider';

function Wishlist() {
    const { wishlist } = useContext(WishlistContext)

    return (
      <div>
        <Container my={6} minW="85%">
          <Heading my={8} textAlign="center" size="lg">
            Your Wishlist
          </Heading>
          <SimpleGrid columns={4} spacing={6}>
            {wishlist.map((product) => (
              <Box key={product.id} p={4} border='1px solid black' borderRadius={12}>
                <Box>
                  <Image src={product.url} alt={product.title} />
                </Box>
                <Box>
                  <Text fontSize="0.8rem" color="gray.600" fontFamily="Arial">
                    {product.title}
                  </Text>
                  <Heading fontSize="0.9rem">£{product.price}</Heading>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </div>
    );
  }

export default Wishlist