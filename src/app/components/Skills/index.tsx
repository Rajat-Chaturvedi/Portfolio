import React from "react";
import Skill from "../Skill";
import styles from "./skills.module.scss";

const Skills = () => {
  const skills = [
    {
      id: "0",
      skill: "HTML",
      type: [
        {
          image: "/assets/images/html5.png",
          subType: "HTML5",
        },
        {
          image: "/assets/images/react.png",
          subType: "JSX",
        },
      ],
    },
    {
      id: "1",
      skill: "CSS",
      type: [
        {
          image: "/assets/images/css3.png",
          subType: "CSS3",
        },
        {
          image: "/assets/images/sass.png",
          subType: "SASS",
        },
        {
          image: "/assets/images/bootstrap.png",
          subType: "Bootstrap",
        },
        {
          image: "/assets/images/mui.png",
          subType: "Material UI",
        },
        {
          image: "/assets/images/antdesign.png",
          subType: "Ant Design",
        },
      ],
    },
    {
      id: "2",
      skill: "Javascript",
      type: [
        {
          image: "/assets/images/javascript.png",
          subType: "Javascript",
        },
        {
          image: "/assets/images/typescript.png",
          subType: "Typescript",
        },
        {
          image: "/assets/images/react.png",
          subType: "React JS",
        },
        {
          image: "/assets/images/nextjs.png",
          subType: "Next Js",
        },
        {
          image: "/assets/images/redux.png",
          subType: "Redux",
        },
        {
          image: "/assets/images/magento-pwa.png",
          subType: "Magento PWA",
        },
        {
          image: "/assets/images/pwa.png",
          subType: "PWA",
        },
        {
          image: "/assets/images/node.png",
          subType: "NodeJs",
        },
        {
          image: "/assets/images/reactnative.png",
          subType: "React Native",
        },
      ],
    },
    {
      id: "3",
      skill: "Backend",
      type: [
        {
          image: "/assets/images/mongodb.png",
          subType: "MongoDB",
        },
        {
          image: "/assets/images/graphql.png",
          subType: "GraphQL",
        },
        {
          image: "/assets/images/rest.png",
          subType: "Rest API",
        },
        {
          image: "/assets/images/apollo.png",
          subType: "Apollo",
        },
        {
          image: "/assets/images/prisma.png",
          subType: "Prisma",
        },
        {
          image: "/assets/images/postgresql.png",
          subType: "PostgreSQL",
        },
        {
          image: "/assets/images/sql.png",
          subType: "SQL Server",
        },
      ],
    },
    {
      id: "4",
      skill: "Payment Gateways",
      type: [
        {
          image: "/assets/images/amazonpay.png",
          subType: "Amazon Pay Front",
        },
        {
          image: "/assets/images/applepay.png",
          subType: "Apple Pay",
        },
        {
          image: "/assets/images/checkout.png",
          subType: "Checkout.com",
        },
        {
          image: "/assets/images/stripe.png",
          subType: "Stripe",
        },
        {
          image: "/assets/images/tabby.png",
          subType: "Tabby",
        },
        {
          image: "/assets/images/tamara.png",
          subType: "Tamara",
        },
      ],
    },
    {
      id: "5",
      skill: "CMS",
      type: [
        {
          image: "/assets/images/strapi.png",
          subType: "Strapi",
        },
        {
          image: "/assets/images/magento2.png",
          subType: "Magento 2",
        },
        {
          image: "/assets/images/wordpress.png",
          subType: "Wordpress",
        },
      ],
    },

    {
      id: "6",
      skill: "Analytics & Monitoring",
      type: [
        {
          image: "/assets/images/sentry.png",
          subType: "Sentry",
        },
        {
          image: "/assets/images/sonarqube.png",
          subType: "SonarQube",
        },
        {
          image: "/assets/images/gtm.png",
          subType: "Google Tag Manager",
        },
        {
          image: "/assets/images/ga.png",
          subType: "Google Analytics",
        },
      ],
    },
    {
      id: "7",
      skill: "Cloud & Devops",
      type: [
        {
          image: "/assets/images/cloudflare.png",
          subType: "Cloudflare",
        },
        {
          image: "/assets/images/cloudfront.png",
          subType: "Cloudfront",
        },
        {
          image: "/assets/images/aws.png",
          subType: "AWS",
        },
      ],
    },
    {
      id: "8",
      skill: "Other",
      type: [
        {
          image: "/assets/images/seo.png",
          subType: "SEO",
        },
        {
          image: "/assets/images/figma.png",
          subType: "Figma",
        },
        {
          image: "/assets/images/creatie.png",
          subType: "Creatie",
        },
      ],
    },
    {
      id: "9",
      skill: "Tools",
      type: [
        {
          image: "/assets/images/gitlab.png",
          subType: "Gitlab",
        },
        {
          image: "/assets/images/github.png",
          subType: "Github",
        },
        {
          image: "/assets/images/vscode.webp",
          subType: "VS Code",
        },
        {
          image: "/assets/images/visualstudio.png",
          subType: "Visual Studio",
        },
        {
          image: "/assets/images/devtools.png",
          subType: "Dev Tools",
        },
        {
          image: "/assets/images/postman.png",
          subType: "Postman",
        },
        {
          image: "/assets/images/swagger.png",
          subType: "Swagger",
        },
      ],
    },
  ];

  return (
    <div className={styles.mainContainer} id="skills">
      <h2 className={styles.heading}>Skills</h2>

      <div className={styles.subContainer}>
        <div className={styles.Wrapper}>
          {skills?.map((item) => (
            <Skill key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
