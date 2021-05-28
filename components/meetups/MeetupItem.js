import { Button } from "@chakra-ui/button";
import { Box, ListItem, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Card from "../ui/Card";
import { useRouter } from "next/router";

function MeetupItem({ id, image, title, address, description }) {
  const router = useRouter();

  function handleShowDetail() {
    router.push(`/${id}`);
  }
  return (
    <ListItem>
      <Card m="2" maxW="xs">
        <Box>
          <Image src={image} alt={title} />
        </Box>
        <Box p="4">
          <Heading as="h3" fontSize="2xl">
            {title}
          </Heading>
          <Text as="address">{address}</Text>
          <Text>{description}</Text>
        </Box>
        <Box px="4" pb="4">
          <Button onClick={handleShowDetail} colorScheme="blue">
            Show Details
          </Button>
        </Box>
      </Card>
    </ListItem>
  );
}
export default MeetupItem;
