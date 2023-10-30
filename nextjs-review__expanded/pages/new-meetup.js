import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetup() {
	function addMeetup(enteredMeetupData) {
		console.log(enteredMeetupData);
	}

	return <NewMeetupForm onAddMeetup={addMeetup} />;
}

export default NewMeetup;
