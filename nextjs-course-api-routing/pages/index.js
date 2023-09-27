import { useRef, useState } from "react";

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailRef = useRef();
  const feedbackRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const emailText = emailRef.current.value;
    const feedbackText = feedbackRef.current.value;
    const reqBody = { email: emailText, text: feedbackText };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function loadFeedbackHandler() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => {
        setFeedbackItems(data.feedback);
      });
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Email Address</label>
          <textarea rows="5" id="feedback" ref={feedbackRef} />
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
			<ul>
				{feedbackItems.map(item=><li key={item.id}>{item.text}</li>)}
			</ul>
    </div>
  );
}

export default HomePage;
