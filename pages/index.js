import MeetupList from "../components/meetups/MeetupList";
import { Container, Heading } from "@chakra-ui/react";
import PageHeading from "../components/ui/PageHeading";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg",
  },
];
function HomePage() {
  return (
    <Container maxW="container.xl">
      <PageHeading>
        <Heading as="h2">All Meetups</Heading>
      </PageHeading>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Container>
  );
}

export default HomePage;
