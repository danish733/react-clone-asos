import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
function Error() {
  return (
    <Alert status='error'>
    <AlertIcon />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>Fetching Error Happened</AlertDescription>
  </Alert>
  )
}

export default Error