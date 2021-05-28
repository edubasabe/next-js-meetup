import { useEffect } from "react";
import { Flex } from "@chakra-ui/layout";
import { Container, Heading } from "@chakra-ui/layout";
import MeetupDetail from "../../components/meetups/MeetupDetails";
import PageHeading from "../../components/ui/PageHeading";

function meetupDetail() {
  // let meetups = window.localStorage.getItem("meetups");
  useEffect(() => {
    console.log("meetups");
  }, []);
  return (
    <Flex as="section" direction="column">
      <Flex backgroundColor="gray.800" minHeight="30vh" width="100vw" />
      <Container maxW="container.xl">
        <PageHeading>
          <Heading as="h2">Titulo</Heading>
        </PageHeading>
        <MeetupDetail />
      </Container>
    </Flex>
  );
}

export default meetupDetail;
