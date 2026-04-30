import { Button, ClientOnly, Container, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "../components/ui/color-mode";
import { Link } from "react-router-dom";

import { FiPlusSquare } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { LuMoon, LuSun } from "react-icons/lu";
import { color } from "framer-motion";

const Navbar = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    const navbarButtonBG = useColorModeValue("white","gray.800")
    const navbarButtonColor = useColorModeValue("blue.500","white")

    return <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"
            }}
        >
            <HStack 
            spacing={2} 
            alignItems={"center"}
            >
                <Text
                fontSize={{ base: "22px", sm:"28px" }}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient="to-r" 
                gradientFrom="cyan.400" 
                gradientTo="blue.500"
                bgClip={"text"}
                color="transparent"
                >
                    <Link to={"/"}>Product Store</Link>                   
                </Text>
            </HStack>
            
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button bg={navbarButtonBG} color={navbarButtonColor} shadow={"md"}>
                        <FiPlusSquare fontSize={20} />
                    </Button>
                </Link>
                <Button onClick={toggleColorMode} bg={navbarButtonBG} color={navbarButtonColor} shadow={"md"}>
                    {colorMode === "light" ? <LuSun /> : <LuMoon size="20" />}
                </Button>
            </HStack>
        </Flex>
    </Container>;
};
export default Navbar;
     