import { useRef } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import Card from "../ui/Card";

export default function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const meetupData = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    };

    console.log("form data!", meetupData);
    props.onAddMeetup(meetupData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card mx="auto" p="5" border="1px" borderColor="gray.200">
          <FormControl id="title" mb="4">
            <FormLabel>Meetup title</FormLabel>
            <Input
              type="text"
              placeholder="Enter the meetup title"
              ref={titleInputRef}
            />
          </FormControl>

          <FormControl id="image">
            <FormLabel>Meetup image</FormLabel>
            <Input
              type="url"
              required
              placeholder="Enter the meetup image url"
              ref={imageInputRef}
            />
          </FormControl>

          <FormControl id="address" mb="4">
            <FormLabel>Meetup address</FormLabel>
            <Input
              type="text"
              placeholder="Enter the meetup address"
              ref={addressInputRef}
            />
          </FormControl>

          <FormControl id="description" mb="4">
            <FormLabel>Meetup description</FormLabel>
            <Textarea
              ref={descriptionInputRef}
              placeholder="Enter a meetup description"
              required
            />
          </FormControl>
          <Flex justify="flex-end">
            <Button colorScheme="pink" type="submit">
              Add Meetup
            </Button>
          </Flex>
        </Card>
      </form>
    </div>
  );
}
