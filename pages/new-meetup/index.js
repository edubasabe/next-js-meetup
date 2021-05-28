import { Container, Heading } from "@chakra-ui/layout";
import PageHeading from "../../components/ui/PageHeading";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  function handleNewMeetup(data) {
    console.log(data);
  }
  return (
    <Container maxW="container.md" pt="4">
      <PageHeading>
        <Heading as="h2">New Meetup</Heading>
      </PageHeading>
      <NewMeetupForm onAddMeetup={handleNewMeetup} />
    </Container>
  );
}
export default NewMeetup;
