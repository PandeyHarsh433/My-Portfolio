import React, { useRef } from "react";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wdht41u",
        "template_y0rk2nc",
        form.current,
        "TB2yEPt5el_Ahizlm"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent...!");
          Swal.fire("Message sent..!", "Thanks for contacting...!", "success");
          document.getElementById("nameInput").value = "";
          document.getElementById("emailInput").value = "";
          document.getElementById("messageInput").value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="contactContainer" id="Contact me">
        <div className="contactHead">
          <h2>Contact me</h2>
        </div>
        <div className="contactInput">
          <input
            type="text"
            placeholder="Enter Your Name"
            name="user_name"
            id="nameInput"
          />
          <input
            type="text"
            placeholder="Enter Your email...!"
            name="user_email"
            id="emailInput"
          />
          <input
            type="text"
            placeholder="Write the message..."
            name="message"
            id="messageInput"
          />
          <button type="submit" className="sendBlock">
            <span style={{ fontSize: "1.5rem" }}>Send</span>
            <SendIcon style={{ fontSize: "2rem", paddingLeft: "0.2rem" }} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
