import { useContext } from "react";
import { ListItem } from "@chakra-ui/layout";
import { Badge } from "@chakra-ui/layout";
import {
  Container,
  Flex,
  Heading,
  Link,
  UnorderedList,
} from "@chakra-ui/layout";
import { Link as NextLink } from "next/router";
import FavoritesContext from "../../store/favorites-context";
export default function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <Flex bg="blue.800" p="4" as="header">
      <Container maxW="container.xl" d="flex">
        <Heading as="h1" fontSize="2xl" color="white">
          Next.js Meetups
        </Heading>
        <Flex as="nav" ml="auto">
          <UnorderedList d="flex" styleType="none">
            <ListItem>
              <Link
                to="/"
                as={NextLink}
                color="whiteAlpha.800"
                fontWeight="bold"
              >
                All Meetups
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/new-meetup"
                as={NextLink}
                mx="4"
                color="whiteAlpha.800"
                fontWeight="bold"
              >
                New Meetup
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/favorites"
                as={NextLink}
                color="whiteAlpha.800"
                fontWeight="bold"
              >
                Favorites
                <Badge ml="2" colorScheme="blue" borderRadius="md">
                  {favoritesCtx.totalFavorites}
                </Badge>
              </Link>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Container>
    </Flex>
  );
}
