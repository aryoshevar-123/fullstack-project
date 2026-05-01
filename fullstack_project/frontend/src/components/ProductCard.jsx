import { Button, CloseButton, Box, IconButton, Image, Input, Heading, HStack, Text, Icon, Dialog, Portal, VStack, DialogActionTrigger } from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { useState } from "react";
import { toaster } from "../components/ui/toaster"

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useProductStore } from "../store/product";


const ProductCard = ({product}) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    const {deleteProduct, updateProduct} = useProductStore()
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
    const handleUpdateProduct = async (pid, updatedProduct) => {
        const {success, message} = await updateProduct(pid, updatedProduct);
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
                description: "Product updated successfully",
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
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <IconButton aria-label="Edit product"  bg={'blue.500'}>
                                <FaEdit />
                            </IconButton>
                        </Dialog.Trigger>
                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content  bg={bg}>
                                    <Dialog.CloseTrigger />
                                    <Dialog.Header>
                                        <Dialog.Title color={'blue.500'}> Edit Product </Dialog.Title>
                                    </Dialog.Header>
                                    <Dialog.Body>
                                        <VStack>
                                            <Input placeholder='Product Name' name='name' 
                                            value={updatedProduct.name}
                                            onChange = {(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}
                                            color={useColorModeValue("black","white")}
                                            />
                                            <Input placeholder='Price' name='price' type='number' 
                                            value={updatedProduct.price}
                                            onChange = {(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}
                                            color={useColorModeValue("black","white")}
                                            />
                                            <Input placeholder='Image URL' name='image' 
                                            value={updatedProduct.image}
                                            onChange = {(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}
                                            color={useColorModeValue("black","white")}
                                            />
                                        </VStack>
                                    </Dialog.Body>
                                    <Dialog.Footer>
                                        <Dialog.ActionTrigger asChild>
                                            <Button variant="outline" color={useColorModeValue('black','white')}>Cancel</Button>
                                        </Dialog.ActionTrigger>
                                        <DialogActionTrigger asChild>
                                            <Button bg={'blue.500'} 
                                            mr={3} 
                                            onClick={() => handleUpdateProduct(product._id, updatedProduct)}
                                            >
                                                Save
                                            </Button>
                                        </DialogActionTrigger>
                                    </Dialog.Footer>
                                    <Dialog.CloseTrigger asChild>
                                        <CloseButton size="sm" />
                                    </Dialog.CloseTrigger>
                                </Dialog.Content>
                            </Dialog.Positioner>
                        </Portal>
                    </Dialog.Root>
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <IconButton aria-label="Delete product" bg={'red.500'}>
                                <MdDelete />
                            </IconButton>
                        </Dialog.Trigger>
                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content  bg={bg}>
                                    <Dialog.CloseTrigger />
                                    <Dialog.Header>
                                        <Dialog.Title color={'red.500'}> Delete Product </Dialog.Title>
                                    </Dialog.Header>
                                    <Dialog.Body>
                                        <Text color={useColorModeValue('black','white')}>
                                            Product will be permanently deleted. Are you sure?
                                        </Text>
                                    </Dialog.Body>
                                    <Dialog.Footer>
                                        <Dialog.ActionTrigger asChild>
                                            <Button variant="outline" color={useColorModeValue('black','white')}>Cancel</Button>
                                        </Dialog.ActionTrigger>
                                        <DialogActionTrigger asChild>
                                            <Button bg={'red.500'} 
                                            mr={3} 
                                            onClick={() => handleDeleteProduct(product._id)}
                                            >
                                                Delete
                                            </Button>
                                        </DialogActionTrigger>
                                    </Dialog.Footer>
                                    <Dialog.CloseTrigger asChild>
                                        <CloseButton size="sm" />
                                    </Dialog.CloseTrigger>
                                </Dialog.Content>
                            </Dialog.Positioner>
                        </Portal>
                    </Dialog.Root>                                 
                </HStack>
            </Box>
        </Box>

    )
}
export default ProductCard