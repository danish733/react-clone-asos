import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Input,
  Alert,
  AlertIcon,
  Container,
  Heading,
  FormLabel,
  Flex,
  FormControl,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import Loading from "../components/Loading";
import { AdminContext } from "../context/AdminContextProvider";

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { login , adminDetails} = useContext(AdminContext);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate()
    const toast = useToast();

    const handleClick = async () => {
       setLoading(true)
        try {
          let res = await axios({
            method: 'post',
            url: 'https://reqres.in/api/login',
            data: {
              email, password
            }
          });
          setLoading(false)
          login(res?.data?.token);
          console.log(adminDetails.adminLoggedIn)
          if(adminDetails.adminLoggedIn){
            toast({
                title: "Login success!",
                status: "success",
                duration: 2000,
                isClosable: true,
                position: "top",
              });
      
              setTimeout(() => {
                navigate("/admin-product");
              }, 2000);
          }
          else{
            alert("wrong details")
          }
        } catch (error) {
          console.log(error);
        }
      };

      if(loading){
        return <Loading/>
      }


  return (
    <>
    <Container my={10}>
      <Heading my={10} textAlign="center">
       Admin Login Page
      </Heading>
      <Heading my={10} textAlign="center" size={3} textDecoration='underline' color='red'>
       Enter Reqres Api Details To Login Admin Page
      </Heading>
      <Box p={10} border="1px solid black">
      <FormControl id="email" isRequired>
      <FormLabel>Email</FormLabel>
      <Input
        type="text" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder='Enter reqres api email' 
      />
      </FormControl>
      <FormControl id="password" isRequired>
      <FormLabel>Password</FormLabel>
      <Input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder='Enter reqres api password' 
      />
      </FormControl>
      <Button variant='solid' colorScheme="teal" my={4} onClick={handleClick}>Admin Login</Button>
        {errorMessage && (
          <Alert status="error" mt={4}>
            <AlertIcon />
            {errorMessage}
          </Alert>
        )}

        <Flex justifyContent="center" my={4}>
          <Heading size={10}>If you are a normal user, </Heading>
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

       
      </Box>
    </Container>
   
    </> 
  )
}

export default AdminLogin