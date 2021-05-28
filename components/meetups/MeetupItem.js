import { Button } from "@chakra-ui/button";
import { Box, ListItem, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Card from "../ui/Card";
import Link from "next/link";

function MeetupItem(props) {
  return (
    <ListItem>
      <Card m="2" maxW="xs">
        <Box>
          <Image src={props.image} alt={props.title} />
        </Box>
        <Box p="4">
          <Heading as="h3" fontSize="2xl">
            {props.title}
          </Heading>
          <Text as="address">{props.address}</Text>
          <Text>{props.description}</Text>
        </Box>
        <Box px="4" pb="4">
          <Link href={`/${props.id}`}>Show Details</Link>
          {/* <Button as={Link} colorScheme="blue">
            Show Details
          </Button> */}
        </Box>
      </Card>
    </ListItem>
  );
}
export default MeetupItem;
