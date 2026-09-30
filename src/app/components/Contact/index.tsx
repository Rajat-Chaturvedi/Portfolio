"use client";
import React from "react";
import styles from "./contact.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { SITE_CONTENT, UI_CONTENT } from "../../constants";

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
    window.location.href = `mailto:${SITE_CONTENT.email}?subject=${formData.subject}&body=${formData.message},(${formData.email})`;
  };

  return (
    <section className={styles.mainContainer} id="contact">
      <div>
        <h2>{UI_CONTENT.contact.title}</h2>
        <div className={styles.Wrapper}>
          <div className={styles.formContainer}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.contactForm}
            >
              <div>
                <h4>{UI_CONTENT.contact.prompt}</h4>
                <h5>{UI_CONTENT.contact.response}</h5>
              </div>
              <div className={styles.inputContainers}>
                <label>{UI_CONTENT.contact.name}</label>
                <input
                  {...register("name")}
                  placeholder={UI_CONTENT.contact.name}
                  type="text"
                  className=""
                />
              </div>

              <div className={styles.inputContainers}>
                <label>{UI_CONTENT.contact.email}</label>
                <input
                  {...register("email")}
                  placeholder={UI_CONTENT.contact.email}
                  type="email"
                  className=""
                />
              </div>

              <div className={styles.inputContainers}>
                <label>{UI_CONTENT.contact.subject}</label>
                <input
                  placeholder={UI_CONTENT.contact.subject}
                  {...register("subject")}
                  className=""
                  type="text"
                />
              </div>

              <div className={styles.inputContainers}>
                <label>{UI_CONTENT.contact.message}</label>
                <textarea
                  {...register("message")}
                  placeholder={UI_CONTENT.contact.message}
                  className=""
                ></textarea>
              </div>

              <div>
                <button type="submit" className={styles.submitBtn}>
                  {UI_CONTENT.contact.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
