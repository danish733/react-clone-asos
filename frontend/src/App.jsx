import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./components/AllRoutes";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import CartContextProvider from "./context/CartContextProvider";
import WishlistContextProvider from "./context/WishlistContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";
import AdminContextProvider from "./context/AdminContextProvider";

function App() {
  return (
    <AdminContextProvider>
    <AuthContextProvider>
      <ChakraProvider>
        <BrowserRouter>
          <CartContextProvider>
            <WishlistContextProvider>
              <Navbar />
              <AllRoutes />
            </WishlistContextProvider>
          </CartContextProvider>
        </BrowserRouter>
      </ChakraProvider>
    </AuthContextProvider>
    </AdminContextProvider>
  );
}

export default App;
