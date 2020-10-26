import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Lottie from "react-lottie";

// Styling
import "./index.css";
import Validate from "../../../assets/animation/Validate.json";
import Wrong from "../../../assets/animation/wrong.json";

// Components

const Contact = () => {
  const { handleSubmit, register, errors } = useForm();
  const [isStatus, setIsStatus] = useState("");
  const [handleName, setHandleName] = useState("");
  const [handleEmail, setHandleEmail] = useState("");
  const [handleFeedback, setHandleFeedback] = useState("");

  let email = process.env.REACT_APP_EMAIL;
  let id = process.env.REACT_APP_EMAILJS_USERID;
  let templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID;
  let serviceId = process.env.REACT_APP_EMAILJS_SERVICEID;

  const handleNameChange = (event) => {
    const value = event.target.value;
    setHandleName(value);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setHandleEmail(value);
  };
  const handleFeedbackChange = (event) => {
    const value = event.target.value;
    setHandleFeedback(value);
  };

  const onSubmit = (values, event) => {
    event.preventDefault();

    const templateParams = {
      from_name: handleName,
      from_email: handleEmail,
      to_name: email,
      feedback: handleFeedback,
    };

    emailjs.send(serviceId, templateId, templateParams, id).then(
      function (response) {
        setHandleName("");
        setHandleEmail("");
        setHandleFeedback("");
        setIsStatus(response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  // Lottie files message option
  const validateOptions = {
    loop: false,
    autoplay: true,
    animationData: Validate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const wrongOptions = {
    loop: false,
    autoplay: true,
    animationData: Wrong,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const message = () => {
    if (isStatus === "OK") {
      return (
        <div className="message-wrapper">
          <Lottie options={validateOptions} height={50} width={50} />
          <span>L'Email a bien été envoyé</span>
        </div>
      );
    } else if (isStatus === "error") {
      return (
        <div className="message-wrapper">
          <Lottie options={wrongOptions} height={50} width={50} />
          <span>Une erreur est parvenue</span>
        </div>
      );
    } else {
      setTimeout(() => {
        setIsStatus("");
      }, 10000);
    }
  };
  return (
    <form className="forms-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={handleName}
          onChange={handleNameChange}
          ref={register({
            required: "Required",
          })}
        />
        {errors.name && errors.name.message}
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={handleEmail}
          onChange={handleEmailChange}
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && errors.email.message}
      </div>
      <div>
        <textarea
          name="textarea"
          type="text"
          placeholder="message"
          value={handleFeedback}
          onChange={handleFeedbackChange}
          ref={register({
            required: "Required",
          })}
        ></textarea>
        {errors.textarea && errors.textarea.message}
      </div>
      <div className="form-submit">
        {message()}
        <div>
          <input type="submit" value="Envoyer" />
        </div>
      </div>
    </form>
  );
};

export default Contact;
