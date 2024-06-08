import React from 'react'
import { Spinner,Flex} from '@chakra-ui/react'

function Loading() {
  return (
    <Flex justifyContent='center' alignItems='center' height='80vh'>
      <Spinner
  thickness='4px'
  speed='0.9s'
  emptyColor='gray.200'
  color='black'
  size='xl'
/>
    </Flex>
  )
}

export default Loading