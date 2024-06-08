import React, { useEffect, useState } from "react";
import NavbarWomenWithoutContainer from "./NavbarWomenWithoutContainer";
import {
  Container,
  SimpleGrid,
  Box,
  Image,
  Text,
  Heading,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import Loading from "./Loading";
import Error from "./Error";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const FilterSelect = ({ placeholder, options, value, onChange }) => (
  <Select
    variant="outline"
    border="1px solid black"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  >
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </Select>
);

function WomenProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');
  const [style, setStyle] = useState('');
  const [brand, setBrand] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const navigate = useNavigate();

  const fetchAndUpdataData = async (sort, category, style, brand, size, color) => {
    setLoading(true);
    try {
      let queryParams = {};
      if (sort) {
        queryParams._sort = 'price';
        queryParams._order = sort;
      }
      if (category) queryParams.category = category;
      if (style) queryParams.style = style;
      if (brand) queryParams.brand = brand;
      if (size) queryParams.size = size;
      if (color) queryParams.color = color;

      let res = await axios({
        method: "get",
        url: "https://asos-backend-121.onrender.com/women",
        params: queryParams,
      });
      console.log(res?.data);
      setLoading(false);
      setProducts(res?.data);
    } catch (error) {
      setLoading(false);
      setErr(true);
    }
  };

  useEffect(() => {
    fetchAndUpdataData(sort, category, style, brand, size, color);
  }, [sort, category, style, brand, size, color]);

  if (loading) {
    return <Loading />;
  }
  if (err) {
    return <Error />;
  }

  const categories = ['Tops', 'Shirt', 'Dresses', 'Skirts', 'Swimwear'];
  const styles = ['Bodycon', 'Wide Leg', 'Split', 'A Line', 'Regular', 'Backless', 'Cropped', 'Tired'];
  const brands = ['ASOS CURVE', 'Bardot', 'ASOS DESIGN', 'ASOS EDITION', 'Emsee', 'Glamorous', 'ASOS LUXE'];
  const sizes = ['2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL'];
  const colors = ['Yellow', 'Neutral', 'Violet', 'Pink', 'White', 'Blue', 'Black', 'Green', 'Orange', 'Multi', 'Red', 'Brown'];

  const sortOptions = [
    { value: 'asc', label: 'Low to High' },
    { value: 'desc', label: 'High to Low' }
  ];

  return (
    <div>
      <NavbarWomenWithoutContainer />
      <Heading my={8} textAlign="center" size="lg">
        Unreal finds, unreal summer
      </Heading>
      <Box mb={6} py={6} bg="#EEEEEE">
        <Container minW="85%">
          <Box>
            <SimpleGrid columns={4} spacing={6}>
              <FilterSelect
                placeholder="Sort"
                options={sortOptions}
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              />
              <FilterSelect
                placeholder="Category"
                options={categories.map((cat) => ({ value: cat, label: cat }))}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <FilterSelect
                placeholder="Style"
                options={styles.map((style) => ({ value: style, label: style }))}
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              />
              <FilterSelect
                placeholder="Brand"
                options={brands.map((brand) => ({ value: brand, label: brand }))}
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <FilterSelect
                placeholder="Size"
                options={sizes.map((size) => ({ value: size, label: size }))}
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
              <FilterSelect
                placeholder="Color"
                options={colors.map((color) => ({ value: color, label: color }))}
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
      <Container minW="85%">
        <SimpleGrid columns={4} spacing={6}>
          {products.map((ele) => (
            <Box key={ele.id}>
              <Box
                cursor="pointer"
                onClick={() => navigate(`/women/product/${ele.id}`)}
              >
                <Image src={ele.url} />
              </Box>
              <Box>
                <Text fontSize="0.8rem" color="gray.600" fontFamily="Arial">
                  {ele.title}
                </Text>
                <Heading fontSize="0.9rem">£{ele.price}.00</Heading>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
      <Footer />
    </div>
  );
}

export default WomenProductList;



