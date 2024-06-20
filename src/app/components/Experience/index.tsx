import React from "react";
import styles from "./experience.module.scss";
import Image from "next/image";

const Experience = () => {
  const cardsData = [
    {
      name: "Software Engineer at Quara Holdings",
      image:
        "data:image/png;base64,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",
      title: "Software Engineer at Quara Holdings",
      startDate: "July 2023",
      endDate: "Current",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
    {
      name: "Software Developer at Webkul",
      image:
        "https://media.licdn.com/dms/image/D4D0BAQE8H56E5G9ytA/company-logo_200_200/0/1692777591673/webkul_logo?e=2147483647&v=beta&t=4v0OBzru7f8ITd3yrjEjvPQAbYv9GDPl24KnamQjrh8",
      startDate: "January 2023",
      endDate: "June 2023",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
    {
      name: "Programmer Analyst at Cognizant",
      image:
        "https://logosandtypes.com/wp-content/uploads/2022/03/Cognizant.png",
      startDate: "March 2021",
      endDate: "January 2023",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <h2>Experience</h2>
        <div className={styles.cardWrapper}>
          {cardsData?.map((item, index) => (
            <div className={styles.cardContainer} key={index}>
              <div className={styles.imgContainer}>
                <img src={item?.image} alt={item?.name} />
              </div>
              <h4>{item?.name}</h4>
              <h5>{`${item?.startDate} - ${item?.endDate}`}</h5>
              <ul className={styles.bullets}>
                {item?.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
