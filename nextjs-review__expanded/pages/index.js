import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://images.pexels.com/photos/18822502/pexels-photo-18822502/free-photo-of-lausitzer-gebirge.jpeg",
    address: "Someguy 5, 12334 Some City",
    description: "Cool guys only",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://images.pexels.com/photos/18822502/pexels-photo-18822502/free-photo-of-lausitzer-gebirge.jpeg",
    address: "Someguy 10, 12334 Some City",
    description: "Cool guys only v2",
  },
];

function Home() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default Home;
