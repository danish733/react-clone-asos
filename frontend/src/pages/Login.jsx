// Login.js
import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  Container,
  Heading,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import Loading from "../components/Loading";
import { AuthContext } from "../context/AuthContextProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const {login} = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.get(
        `https://asos-backend-121.onrender.com/users?email=${email}&password=${password}`
      );
      console.log(response.data)
      setLoading(false)
      if (response.data.length > 0) {
        const { firstname, email } = response.data[0];
        login(firstname, email)
        toast({
          title: "Login success!",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });

        setTimeout(() => {
          navigate("/women");
        }, 2000); // Navigate to the cart page after 2 seconds
      } else {
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      setErrorMessage("Error logging in");
    }
  };

  if(loading){
    return <Loading/>
  }

  return (
    <>
    <Container my={10}>
      <Heading my={10} textAlign="center">
        Login Page
      </Heading>
      <Box p={10} border="1px solid black">
        <form onSubmit={handleSubmit}>
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
            Login
          </Button>
        </form>
        {errorMessage && (
          <Alert status="error" mt={4}>
            <AlertIcon />
            {errorMessage}
          </Alert>
        )}

        <Flex justifyContent="center" my={4}>
          <Heading size={10}>If you are new in this website,</Heading>
          <Heading
            cursor="pointer"
           
            color="blue"
            textDecoration= "underline"
            size={10}
            onClick={() => navigate("/signup")}
          >
            {" "}
            Click Here
          </Heading>
        </Flex>

        <Flex justifyContent="center" my={4} >
          <Heading size={10}>Admin login,  </Heading>
          <Heading
            cursor="pointer"
            
            color="red"
            textDecoration= "underline"
            size={10}
            onClick={() => navigate("/admin-login")}
          >
            {" "}
            Click Here
          </Heading>
        </Flex>
        
      </Box>
    </Container>
   
    </> 
  );
};

export default Login;
