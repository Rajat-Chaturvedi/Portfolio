"use client";
import React from "react";
import styles from "./contact.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";

// Define the interface for form data
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  // Pass the FormData type to useForm
  const { register, handleSubmit } = useForm<FormData>();

  // Define the onSubmit function with the correct type
  const onSubmit: SubmitHandler<FormData> = (formData) => {
    window.location.href = `mailto:chaturvedirajat36@gmail.com?subject=${formData.subject}&body=${formData.message},(${formData.email})`;
  };

  return (
    <section className={styles.mainContainer}>
      <div>
        <h2>Contact</h2>
        <div className={styles.formContainer}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.contactForm}
          >
            <div>
                <h4>Connect for any query</h4>
            </div>
            <div className={styles.inputContainers}>
              <label>Name</label>
              <input
                {...register("name")}
                placeholder="Name"
                type="text"
                className=""
              />
            </div>

            <div className={styles.inputContainers}>
              <label>Email</label>
              <input
                {...register("email")}
                placeholder="Email"
                type="email"
                className=""
              />
            </div>

            <div className={styles.inputContainers}>
              <label>Subject</label>
              <input
                placeholder="Subject"
                {...register("subject")}
                className=""
                type="text"
              />
            </div>

            <div className={styles.inputContainers}>
              <label>Message</label>
              <textarea
                {...register("message")}
                placeholder="Message"
                className=""
              ></textarea>
            </div>

            <div>
              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
