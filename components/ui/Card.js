import { Box } from "@chakra-ui/layout";

export default function Card(props) {
  return (
    <Box boxShadow="md" rounded="md" overflow="hidden" {...props}>
      {props.children}
    </Box>
  );
}
