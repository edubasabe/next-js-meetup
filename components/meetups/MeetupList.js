import { UnorderedList } from "@chakra-ui/layout";
import MeetupItem from "./MeetupItem";
export default function MeetupList(props) {
  return (
    <UnorderedList styleType="none" m="0" d="flex">
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          description={meetup.description}
        />
      ))}
    </UnorderedList>
  );
}
