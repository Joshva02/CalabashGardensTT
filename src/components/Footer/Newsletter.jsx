import React, { useState, useRef } from "react"

import SubHeading from "../SubHeading/SubHeading"
import emailjs from "@emailjs/browser"
import "./Newsletter.css"
import FormInput from "../FormInput/FormInput"

const Newsletter = () => {
 const [values, setValues] = useState({
  username: "",
  email: "",
  birthday: "",
  password: "",
  confirmPassword: "",
})

const [modalOpen, setModalOpen] = useState(false)

const inputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Name",
    required: true,
  },

  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "Please Use Valid Email Address!",
    label: "Email",
    required: true,
  },
  {
    id: 3,
    name: "message",
    type: "textarea",
    placeholder: "Leave Message Here...",
    rows: "4",
    label: "Message",
    required: true,
  },
  {
    id: 4,
    name: "date",
    type: "date",
    placeholder: "When would you like to book?",
    label: "Date",
    required: true,
  },
  {
    id: 5,
    name: "time",
    type: "time",
    placeholder: "When would you like to book?",
    label: "Time",
    required: true,
  },
]

const form = useRef()

const sendEmail = (e) => {
  e.preventDefault()

  emailjs
    .sendForm(
      "service_sc8ta5e",
      "template_sb9qyus",
      form.current,
      "7VI1k5sl9bUES7skE"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("SUCCESS!");
      },
      (error) => {
        console.log(error.text);
        alert("FAILED...", error);
      }
    );
};


const [show_confirm_msg, setShowConfirmMsg] = useState(false);

const handleConfirm = (e) => {
  form.current.submit();
};

const handleConfirmMsg = (e) => {
  e.preventDefault();
  setShowConfirmMsg(true);
};


function refreshPage() {
  window.location.reload(false)
}

const onChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value })
}

console.log(values)

return (
  <div className="app__newsletter" id="booking">
    <div className="app__newsletter-heading">
      <SubHeading title="Happier Times Await" />
      <h1 className="headtext__cormorant">Book Venue</h1>
      <p className="p__opensans">The Next Step Starts Here!</p>
    </div>
    <div className="app__newsletter-input flex__center">
    <form
        ref={form}
        onSubmit={sendEmail}
        action="mailto:jrwebdev02@gmail.com"
      >
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
          ))}
          <div className="custom__button">
   
          <button type="submit" class="custom__button">
              Submit
            </button>
          
        </div> 
       </form>
       
      
    </div>
  </div>
)}

export default Newsletter
