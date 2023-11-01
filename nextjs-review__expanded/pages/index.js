import { MongoClient } from "mongodb";
import Head from "next/head";

import MeetupList from "../components/meetups/MeetupList";

function Home(props) {
  return (
		<>
			<Head>
				<title>React Meetups</title>
				<meta name="description" content="Browse a huge list of highly active React meetups!" />
			</Head>
      <MeetupList meetups={props.meetups} />
		</>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://jmeanchoff:NeCgz4Z7mZMy@cluster0.w7gw7jx.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetups = db.collection("meetups");

  const allMeetups = await meetups.find().toArray();

  client.close();

  return {
    props: {
      meetups: allMeetups?.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS
// 		}
// 	};
// }

export default Home;
