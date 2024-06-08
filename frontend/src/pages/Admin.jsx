import React, { useState } from 'react';
import { ChakraProvider, Box, Tabs, TabList, TabPanels, Tab, TabPanel, FormControl, FormLabel, Input, Select, Button } from '@chakra-ui/react';
import axios from 'axios';

function Admin() {
  const [category, setCategory] = useState('men');
  const [formData, setFormData] = useState({
    url: '',
    category: 'Tops',
    price: '',
    title: '',
    size: '2XS',
    style: 'Regular',
    brand: 'ASOS CURVE',
    color: 'white',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert price to a number
      const dataToSubmit = {
        ...formData,
        price: parseFloat(formData.price),
      };
      await axios.post(`https://asos-backend-121.onrender.com/${category}`, dataToSubmit);
      alert('Product added successfully');
      setFormData({
        url: '',
        category: 'Tops',
        price: '',
        title: '',
        size: '2XS',
        style: 'Regular',
        brand: 'ASOS CURVE',
        color: 'white',
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const menCategories = ['Tops', 'Shirt', 'Pant', 'Shoes', 'Footwear', 'Jeans & Trousers', 'Accessories', 'Shorts'];
  const womenCategories = ['Tops', 'Dresses', 'Swimwear', 'Skirts', 'Footwear', 'Jeans & Trousers', 'Accessories', 'Shorts'];

  const menStyle = ['Regular', 'Relaxed', 'Cargo', 'Denim', 'OverSized'];
  const womenStyle = ['Regular', 'Bodycon', 'Wide Leg', 'Split', 'A Line', 'Slip', 'Backless', 'Cropped', 'Tired'];

  const menBrand = ['ASOS CURVE', 'Jack & Jones', 'Ellese', 'Levis', 'Parlez', 'Lay-Ban'];
  const womenBrand = ['ASOS CURVE', 'ASOS DESIGN', 'ASOS EDITION', 'ASOS LUXE', 'Bardot', 'Emsee', 'Glamorous'];

  const color = ['White', 'Pink', 'Orange', 'Blue', 'Black', 'Purple', 'Violet', 'Green', 'Neutral', 'Yellow', 'Multi', 'others'];
  const size = ['2XS', 'XS', 'XS-S', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'];

  return (
    <ChakraProvider>
      <Box p={5}>
        <Tabs variant="enclosed" onChange={(index) => setCategory(index === 0 ? 'men' : 'women')}>
          <TabList>
            <Tab>Men</Tab>
            <Tab>Women</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box p={5} shadow="md" borderWidth="1px">
                <form onSubmit={handleSubmit}>
                  <FormControl isRequired>
                    <FormLabel>URL</FormLabel>
                    <Input name="url" value={formData.url} onChange={handleChange} />
                  </FormControl>
                  <FormControl isRequired mt={4}>
                    <FormLabel>Title</FormLabel>
                    <Input name="title" value={formData.title} onChange={handleChange} />
                  </FormControl>
                  <FormControl isRequired mt={4}>
                    <FormLabel>Price</FormLabel>
                    <Input name="price" value={formData.price} onChange={handleChange} />
                  </FormControl>
                  <FormControl isRequired mt={4}>
                    <FormLabel>Category</FormLabel>
                    <Select name="category" value={formData.category} onChange={handleChange}>
                      {menCategories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl isRequired mt={4}>
                    <FormLabel>Size</FormLabel>
                    <Select name="size" value={formData.size} onChange={handleChange}>
                      {size.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl isRequired mt={4}>
                    <FormLabel>Style</FormLabel>
                    <Select name="style" value={formData.style} onChange={handleChange}>
                      {menStyle.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl isRequired mt={4}>
                    <FormLabel>Brand</FormLabel>
                    <Select name="brand" value={formData.brand} onChange={handleChange}>
                      {menBrand.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl isRequired mt={4}>
                    <FormLabel>Color</FormLabel>
                    <Select name="color" value={formData.color} onChange={handleChange}>
                      {color.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <Button mt={4} colorScheme="teal" type="submit">
                    Add Product
                  </Button>
                </form>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box p={5} shadow="md" borderWidth="1px">
                <form onSubmit={handleSubmit}>
                  <FormControl isRequired>
                    <FormLabel>URL</FormLabel>
                    <Input name="url" value={formData.url} onChange={handleChange} />
                  </FormControl>
                  <FormControl isRequired mt={4}>
                    <FormLabel>Title</FormLabel>
                    <Input name="title" value={formData.title} onChange={handleChange} />
                  </FormControl>
                  <FormControl isRequired mt={4}>
                    <FormLabel>Price</FormLabel>
                    <Input name="price" value={formData.price} onChange={handleChange} />
                  </FormControl>
                  <FormControl isRequired mt={4}>
                    <FormLabel>Category</FormLabel>
                    <Select name="category" value={formData.category} onChange={handleChange}>
                      {womenCategories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl isRequired mt={4}>
                    <FormLabel>Size</FormLabel>
                    <Select name="size" value={formData.size} onChange={handleChange}>
                      {size.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl isRequired mt={4}>
                    <FormLabel>Style</FormLabel>
                    <Select name="style" value={formData.style} onChange={handleChange}>
                      {womenStyle.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl isRequired mt={4}>
                    <FormLabel>Brand</FormLabel>
                    <Select name="brand" value={formData.brand} onChange={handleChange}>
                      {womenBrand.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl isRequired mt={4}>
                    <FormLabel>Color</FormLabel>
                    <Select name="color" value={formData.color} onChange={handleChange}>
                      {color.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <Button mt={4} colorScheme="teal" type="submit">
                    Add Product
                  </Button>
                </form>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </ChakraProvider>
  );
}

export default Admin;


