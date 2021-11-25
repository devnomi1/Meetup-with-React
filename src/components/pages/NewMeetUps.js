import {useHistory} from 'react-router-dom'
import NewMeetupForm from '../meetups/NewMeetupForm'

function NewMeetUps() {
    const history = useHistory();
    function addMeetupHandler(meetupData) {
        fetch(
            "https://react-getting-started-d9fea-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(() => {
            history.replace('/')
        });
    }
    return (
			<section>
				<h1>Add New Meetup</h1>
				<NewMeetupForm onAddMeetupData={addMeetupHandler} />
			</section>
		);
}

export default NewMeetUps
