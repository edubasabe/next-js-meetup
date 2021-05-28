import { useEffect } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetails";

function meetupDetail() {
  // let meetups = window.localStorage.getItem("meetups");
  useEffect(() => {
    console.log("meetups");
  }, []);
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg"
      title="A First Meetup"
      address="110 New York Ave, Lincoln Park, MI"
      description="This is the first meetup"
    />
  );
}

export default meetupDetail;
