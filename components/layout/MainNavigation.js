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
import { Switch } from "@chakra-ui/switch";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

export default function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  const { toggleColorMode } = useColorMode();
  const backgroundNavbarColor = useColorModeValue("blue.400", "blue.800");

  const handleChangeColorMode = () => {
    toggleColorMode();
  };

  return (
    <Flex bg={backgroundNavbarColor} p="4" as="header">
      <Container maxW="container.xl" d="flex">
        <Heading as="h1" fontSize="2xl" color="white">
          Next.js Meetups
        </Heading>
        <Flex as="nav" ml="auto">
          <UnorderedList d="flex" styleType="none">
            <ListItem>
              <Link
                href="/"
                as={NextLink}
                color="whiteAlpha.800"
                fontWeight="bold"
              >
                All Meetups
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/new-meetup"
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
                mr="4"
              >
                Favorites
                <Badge ml="2" colorScheme="blue" borderRadius="md">
                  {favoritesCtx.totalFavorites}
                </Badge>
              </Link>
            </ListItem>
            <ListItem>
              <Switch onChange={handleChangeColorMode} />
            </ListItem>
          </UnorderedList>
        </Flex>
      </Container>
    </Flex>
  );
}
