import { useState, useEffect } from "react";
import classes from "./contact-form.module.css";
import Notification from "../../UI/notification";

async function sendContactData(contactDetails) {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }
}

function ContactForm() {
  const [enteredEmail, setEmail] = useState("");
  const [enteredName, setName] = useState("");
  const [enteredMessage, setMessage] = useState("");
  const [reqStatus, setReqStatus] = useState(); // pending/success/error
  const [reqError, setReqError] = useState();

  useEffect(() => {
    if (reqStatus === "success" || reqStatus === "error") {
      const timer = setTimeout(() => {
        setReqStatus(null);
        setReqError(null);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [reqStatus]);

  async function sendMessageHandler(e) {
    e.preventDefault();

    setReqStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setReqStatus("success");
      setEmail("");
      setName("");
      setMessage("");
    } catch (err) {
      setReqStatus("error");
      setReqError(err.message);
    }
  }

  let notifData;

  if (reqStatus === "pending") {
    notifData = {
      status: "pending",
      title: "Sending message",
      message: "Your Message is on its way",
    };
  }

  if (reqStatus === "success") {
    notifData = {
      status: "success",
      title: "Success",
      message: "Your Message sent successfully",
    };
  }

  if (reqStatus === "error") {
    notifData = {
      status: "error",
      title: "Error",
      message: reqError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              row="5"
              id="message"
              required
              value={enteredMessage}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notifData && (
        <Notification
          status={notifData.status}
          title={notifData.title}
          message={notifData.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
