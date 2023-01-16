import { useState } from "react";

export default function FeedbackForm() {
  const [text, setText] = useState("abc");
  const [isSending, SetIsSending] = useState(false);
  const [isSent, SetIsSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    SetIsSending(true);
    await setMessage(text);
    SetIsSending(false);
    SetIsSent(true);
  }

  // if (isSent) {
  //   return <h1>Thanks for feedback</h1>;
  // }

  function setMessage(text) {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  return isSent ? (
    <h1>Thanks for feedback</h1>
  ) : (
    <div className="App">
      <h1>Day-43-React-Router</h1>
      <form onSubmit={(e) => handleSubmit(e)} action="">
        <h3>Та текстээ оруулна уу?</h3>
        <textarea
          value={text}
          disabled={isSending}
          onChange={(e) => setText(e.target.value)}
          name=""
          id=""
          cols="20"
          rows="3"
        ></textarea>
        <br />
        <button>Send</button>
        {isSending && <p>Sending...</p>}
      </form>
    </div>
  );
}
