import React from "react";
import styles from "./projects.module.scss";
import Project from "../Project";

const Projects = () => {
  const projects = [
    {
      id: "0",
      name: "PisaStone",
      image: "/assets/images/pisastone.png",
      description: "PisaStone offers high-quality engineered and natural stone surfaces for residential and commercial use. Their products blend durability with aesthetic appeal for various interior and exterior applications.",
      link:'https://www.pisastone.co.uk/',
      techStack: ["nexjts 14", "TS" ,"mongoDB", "rest API", "sass"],
    },
    {
      id: "1",
      name: " CMS PisaStone",
      image: "/assets/images/cms-pisa.png",
      description: "Inhouse CMS for managing product listings, reviews, orders, and other website content of Pisastone.",
      link:'https://cms.pisastone.co.uk/',
      techStack: ["nexjts 14", "mongoDB", "bootstrap cms", "rest API"],
    },
    {
      id: "2",
      name: "Wasalt",
      image: "/assets/images/wasalt.png",
      description: "Wasalt is the first-ever AI-powered real estate platform in Saudi Arabia that deals in both residential as well as commercial real estate properties.",
      link:'https://wasalt.com/en',
      techStack: ["nexjts", "strapi", "antDesign"],
    },
    {
      id: "3",
      name: "Wasalt Auction",
      image: "/assets/images/auction.png",
      description: "A web platform for browsing and buy commercial or residential assets from wasalt auctions via live biddings. Wasalt auctions are your home base for real estate investing in Saudi Arabia.",
      link:'https://auction.wasalt.com/en',
      techStack: ["nextjs", "strapi", "sass"],
    },
    {
      id: "4",
      name: "Wasalt Auction Console",
      image: "/assets/images/auction-console.png",
      description: "A web platform enabling super admins and admins to manage auction data and monitor statistics through dashboards. Users, based on their roles, can view, edit, and upload infath auction data.",
      link:'https://auction-console.wasalt.com/en',
      techStack: ["nextjs", "refine", "antDesign"],
    },
    {
      id: "5",
      name: "UMS BackOffice",
      image: "/assets/images/ums.png",
      description: "A web platform enabling super admins and admins to manage auction data and monitor statistics through dashboards. Users, based on their roles, can view, edit, and upload private auction data.",
      link:'https://ums.wasalt.com/en',
      techStack: ["nextjs", "refine", "antDesign"],
    },
    {
      id: "6",
      name: "Vougish",
      image: "/assets/images/vougish.png",
      description: "A headless e-commerce web application for lifestyle and accessory products, leveraging Next.js for the frontend and Magento 2 for the backend to deliver a seamless and dynamic shopping experience.",
      link:'https://voguish.vercel.app/',
      techStack: ["nexjts", "magento2", "MUI"],
    },
    {
      id: "7",
      name: "Yexpedite",
      image: "/assets/images/yexpedite.png",
      description: "Yexpedite is a dynamic website designed to streamline and enhance the logistics and shipping processes for businesses.",
      link:'https://www.yexpedite.com/stores',
      techStack: ["nexjts", "magento2", "middleware"],
    },
    {
      id: "8",
      name: "HRMS",
      image: "/assets/images/hrms.png",
      description: "Created an advanced Human Resource Management System (HRMS) using Next.js, TypeScript, MongoDB, Prism ORM, GraphQL, and other cutting-edge technologies, combining robust data handling with a user-friendly interface.",
      link:'https://drive.google.com/file/d/1RpCpx4My2xDNqXRYpWoyr-zL9QmUaybo/view?usp=drive_link',
      techStack: ["nexjts", "graphql", "MongoDB"],
    },
  ];
  return (
    <section className={styles.mainContainer} id='projects'>
      <div className={styles.contentContainer}>
        <h2>Projects</h2>
        <div className={styles.Wrapper}>
          {projects?.map((item) => (
            <Project key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
