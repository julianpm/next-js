import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Head from 'next/head';
import { useRouter } from "next/router";

function NewMeetup() {
  const router = useRouter();

  async function addMeetup(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <>
			<Head>
				<title>Add a New Meetup</title>
				<meta name="description" content="Foo bar cool guy meetups!" />
			</Head>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </>
  );
}

export default NewMeetup;
