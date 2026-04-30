import { Box, IconButton, Image, Heading, HStack, Text, Icon } from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { toaster } from "../components/ui/toaster"

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useProductStore } from "../store/product";


const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    const {deleteProduct} = useProductStore()
    const handleDeleteProduct = async(pid) => {
        const {success, message} = await deleteProduct(pid)
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
    }

    return (
        <Box
            shadow={'lg'}
            rounded={'lg'}
            overflow={'hidden'}
            transition={'all 0.3s'}
            _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
            bg = {bg}
        >
            <Image src={product.image} alt={product.name} h={48} w='full' objectFit={'cover'} />

            <Box p={4}>
                <Heading as='h3' color={textColor} size='md' mb={2}>
                    {product.name}
                </Heading>

                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    ${product.price}
                </Text>

                <HStack spacing = {2}>
                    <IconButton aria-label="Edit product"  bg={'blue.500'}>
                        <FaEdit />
                    </IconButton>
                    <IconButton aria-label="Delete product" bg={'red.500'} onClick={() => handleDeleteProduct(product._id)}>
                        <MdDelete />
                    </IconButton>
                </HStack>
            </Box>
        </Box>

    )
}
export default ProductCard