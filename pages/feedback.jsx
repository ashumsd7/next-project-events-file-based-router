import React, { useState } from "react";

import { useRef } from "react";
function FeedbackForm() {
  const emailRef = useRef();
  const feedbackRef = useRef();
  const [feedbackItems, setFeedbackItems] = useState([]);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const email = emailRef.current.value;
          const feedback = feedbackRef.current.value;
          console.log(email);
          console.log(feedback);

          fetch("/api/feedback/", {
            method: "POST",
            body: JSON.stringify({
              email: email,
              text: feedback,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(function (response) {
            console.log("response", response);
          });
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          gap: "20px",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            style={{
              width: "180px",
            }}
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <label htmlFor="feedback">Feedback</label>
          <textarea ref={feedbackRef} id="feedback" name="feedback" rows="5" />
        </div>
        <button
          style={{
            width: "180px",
            cursor: "pointer",
          }}
          type="submit"
        >
          Send Feedback
        </button>
      </form>
      <hr />
      <button
        onClick={() => {
          fetch("/api/feedback/")
            .then(function (response) {
              // console.log(" after get", response.json());
              return response.json();
            })
            .then((data) => {
              console.log("data", data);
              setFeedbackItems(data);
            });
        }}
      >
        Load Data
      </button>
      Feedback-email
      <hr />
      <ul>
        {feedbackItems?.data?.map((item) => (
          <li>
            {item.text}-{item.email}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default FeedbackForm;
