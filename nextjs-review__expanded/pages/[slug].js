import MeetupDetail from "../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://images.pexels.com/photos/18822502/pexels-photo-18822502/free-photo-of-lausitzer-gebirge.jpeg"
      title="First Meetup"
      address="Mooby's House"
      description="Meetup at Mooby's House"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          slug: "m1",
        },
      },
      {
        params: {
          slug: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;

  return {
    props: {
      meetupData: {
        image:
          "https://images.pexels.com/photos/18822502/pexels-photo-18822502/free-photo-of-lausitzer-gebirge.jpeg",
        id: slug,
        title: "First Meetup",
        address: "Mooby's House",
        description: "Meetup at Mooby's House",
      },
    },
  };
}

export default MeetupDetails;