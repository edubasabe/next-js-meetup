import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";
import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  const layoutBgColor = useColorModeValue("gray.100", "gray.800");
  return (
    <>
      <MainNavigation />
      <Flex as="main" minHeight="100vh" backgroundColor={layoutBgColor}>
        {props.children}
      </Flex>
    </>
  );
}
