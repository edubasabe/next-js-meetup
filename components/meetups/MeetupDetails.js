import { Container, Heading, Flex, Text } from "@chakra-ui/layout";
import PageHeading from "../../components/ui/PageHeading";

function MeetupDetail({ image, title, description }) {
  return (
    <>
      <Flex as="section" direction="column">
        <Flex
          backgroundColor="gray.800"
          bgImage={image}
          minHeight="30vh"
          width="100vw"
        />
        <Container maxW="container.xl">
          <PageHeading>
            <Heading as="h2">{title}</Heading>
          </PageHeading>
          <Text>{description}</Text>
        </Container>
      </Flex>
    </>
  );
}
export default MeetupDetail;
