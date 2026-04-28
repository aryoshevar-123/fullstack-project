import { Box, Container, Heading, VStack, Input, Button } from "@chakra-ui/react";
import { toaster } from "../components/ui/toaster"
import { useColorModeValue } from "../components/ui/color-mode";
import { useState } from "react";
import { useProductStore } from "../store/product.js";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price:"",
        image:""
    });

    const {createProduct} = useProductStore();

    const handleAddProduct = async () => {
        const {success, message} = await createProduct(newProduct);
        if ( !success ) {
            toaster.create({
                title: "Error",
                description: message,
                type: "error",
                closable: true
            })  
        } else {
            toaster.create({
                title: "Success",
                description: message,
                type: "success",
                closable: true
            })
        }
        setNewProduct({ name: "", price: "", image:""});
    };

    return (
        <Container maxW={"3xl"} px={'8'}>
            <VStack
                spacing = {8}
            >
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} marginBottom={8} color={"blue.500"}>
                    Create New Product
                </Heading>
                
                <Box
                    w={"full"} bg={useColorModeValue("white", "gray.800")}
                    p={6} rounded={"lg"} shadow={"md"}
                >
                    <VStack spacing={4}>
                        <Input 
                            placeholder='Product Name'
                            name = 'name' 
                            value = {newProduct.name}
                            onChange = {(e) => setNewProduct({...newProduct, name: e.target.value})}
                        />
                        <Input placeholder='Price'
                            name = 'price' 
                            type = 'number'
                            value = {newProduct.price}
                            onChange = {(e) => setNewProduct({...newProduct, price: e.target.value})} 
                        />
                        <Input placeholder='Image URL'
                            name = 'image' 
                            value = {newProduct.image}
                            onChange = {(e) => setNewProduct({...newProduct, image: e.target.value})} 
                        />

                        <Button colorPalette={'blue'} onClick={handleAddProduct} w='full'>
                            Add Product
                        </Button>

                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
}
export default CreatePage;
     