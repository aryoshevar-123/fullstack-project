import { Button, ClientOnly, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { useColorMode } from "../components/ui/color-mode";
import { Link } from "react-router-dom";

import { FiPlusSquare } from "react-icons/fi";
import { LuMoon, LuSun } from "react-icons/lu";

const Navbar = () => {
    const { toggleColorMode, colorMode } = useColorMode();

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
            <Text
                fontSize={{ base: "22", sm:"28" }}
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

            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button>
                        <FiPlusSquare fontSize={20} />
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <LuSun /> : <LuMoon size="20" />}
                </Button>
            </HStack>
        </Flex>
    </Container>;
};
export default Navbar;
     