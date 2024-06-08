import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Container,
  Heading,
  Flex,
  Alert,
  HStack
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import Loading from "../components/Loading";

const Signup = () => {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      // Check if email is already registered
      const existingUserResponse = await axios.get(
        `https://asos-backend-121.onrender.com/users?email=${email}`
      );
      if (existingUserResponse.data.length > 0) {
        setLoading(false)
        setErrorMessage("Email is already registered");
        return;
      }

      // Proceed with signup if email is not registered
      const response = await axios.post("https://asos-backend-121.onrender.com/users", {
        firstname,
        lastname,
        email,
        password,
      });
      if (response.status === 201) {
        setLoading(false)
        toast({
          title: "Signup successful, Please Login Now",
          status: "success",
          duration: 2000,
          isClosable: true,
          position:'top'
        });

        setTimeout(() => {
            navigate('/login');
          }, 1000); // Navigate to the cart page after 2 seconds
        
        // Reset input fields
        setfirstName("");
        setlastName("");
        setEmail("");
        setPassword("");
       
      } else {
        setErrorMessage("Signup failed");
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  if(loading){
    return <Loading/>
  }

  return (
    <Container my={10}>
      <Heading my={10} textAlign="center">
        Signup Page
      </Heading>

      <Box p={10} border="1px solid black">
        <form onSubmit={handleSubmit}>
          <HStack>
          <FormControl id="firstname" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              value={firstname}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </FormControl>
          <FormControl id="lastname" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              value={lastname}
              onChange={(e) => setlastName(e.target.value)}
            />
          </FormControl>
          </HStack>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" mt={4} colorScheme="teal">
            Signup
          </Button>
        </form>
        {errorMessage && (
          <Alert status="error" mt={4}>
            {errorMessage}
          </Alert>
        )}

        <Flex justifyContent="center" my={4}>
          <Heading size={10}>Already have an account,</Heading>
          <Heading
            cursor="pointer"
            color="blue"
            textDecoration= "underline"
            size={10}
            onClick={() => navigate("/login")}
          >
            {" "}
            Click Here
          </Heading>
        </Flex>
      </Box>
    </Container>
  );
};

export default Signup;
