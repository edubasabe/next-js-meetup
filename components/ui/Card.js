import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";

export default function Card(props) {
  const cardBg = useColorModeValue("white", "gray.700");
  return (
    <Box
      boxShadow="md"
      rounded="md"
      overflow="hidden"
      backgroundColor={cardBg}
      {...props}
    >
      {props.children}
    </Box>
  );
}
