import { MongoClient, ObjectId } from "mongodb";
import Head from 'next/head';
import MeetupDetail from "../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
		<>
			<Head>
				<title>{props.meetupData.title}</title>
				<meta name="description" content={props.meetupData.description} />
			</Head>
			<MeetupDetail
				image={props.meetupData.image}
				title={props.meetupData.title}
				address={props.meetupData.address}
				description={props.meetupData.description}
			/>
		</>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://jmeanchoff:NeCgz4Z7mZMy@cluster0.w7gw7jx.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetups = db.collection("meetups");

  const allMeetups = await meetups.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: allMeetups?.map((meetup) => ({
      params: { slug: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;

  const client = await MongoClient.connect(
    "mongodb+srv://jmeanchoff:NeCgz4Z7mZMy@cluster0.w7gw7jx.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetups = db.collection("meetups");

  const selectedMeetup = await meetups.findOne({ _id: new ObjectId(slug) });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
				image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
