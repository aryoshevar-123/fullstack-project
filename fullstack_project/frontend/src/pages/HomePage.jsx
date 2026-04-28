import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";

const HomePage = () => {
    const {fetchProducts, products} = useProductStore();

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts]);
    console.log("Products", products);

    return (
        <Container maxW={'container.xl'} py={12}>
            <VStack spacing = {8}>
                <Text
                    fontSize = {"30px"}
                    fontWeight = {"bold"}
                    bgGradient="to-r" 
                    gradientFrom="cyan.400" 
                    gradientTo="blue.500"
                    bgClip={"text"}
                    color="transparent"
                    textAlign={"center"}
                >
                    Current Products
                </Text>

                <SimpleGrid
                    column={{
                        base:1,
                        md:2,
                        lg:3
                    }}
                    spacing={10}
                    w={"full"}
                >

                </SimpleGrid>

                <Text fontSize={'xl'} textAlign={"center"} fontWeight={"bold"} color='gray.500'>
                    No Product Found {" "}
                    <Link to={"/create"}>
                        <Text as={'span'} color={"blue.500"} _hover={{ textDecoration: "underline" }}>
                            Create a product
                        </Text>
                    </Link>
                </Text>
            </VStack>

        </Container>
    );
}
export default HomePage;
     