import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ilgilisineImg from "@/public/ilgilisine.svg";
import hotelneredeImg from "@/public/hotelnerede.jpg";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Süleyman Demirel University",
    location: "Isparta/Türkiye",
    description:
      "I graduated from Süleyman Demirel University as a computer engineer in 2019.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Intern Engineer",
    location: "Ankara/ Türkiye",
    description:
      "As a computer engineer, I did an internship at a company called Icm Yazılım",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Bootcamp-İşkur",
    location: "Ankara/ Türkiye",
    description:
      "I attended a 6-month fullstack software course. My stack includes C#, Bootstrap, Html, Css ",
    icon: React.createElement(FaReact),
    date: "2019-2020",
  },
  {
    title: "Fullstack Engineer - Fernus",
    location: "Ankara/ Türkiye",
    description:
      "I got my first job. I used technologies such as PHP, Bootstrap, Html, Css. ",
    icon: React.createElement(FaReact),
    date: "2020-2021",
  },
  {
    title: "Fullstack Engineer- Bitsody",
    location: "Ankara/ Türkiye",
    description:
      "In this work experience, I used technologies such as react, react native, nextjs.",
    icon: React.createElement(FaReact),
    date: "2021-2022",
  },
  {
    title: "Freelancer",
    location: "Ankara/ Türkiye",
    description:
      "I have been developing websites and mobile applications as a freelancer since 2022.",
    icon: React.createElement(FaReact),
    date: "2022-continue",
  },
] as const;

export const projectsData = [
  {
    title: "İlgilisine(Mobile application)",
    description:
      "I worked as a frontend developer in this mobile application project. You can download the application from Google Play",
    tags: ["React", "Expo", "MongoDB"],
    imageUrl: ilgilisineImg,
  },
  {
    title: "Hotel Nerede",
    description:
      "As a freelancer, I make all the frontend developments and admin panel of hotelnerede.com using JS, Ajax, html css, bootstrapp technologies.",
    tags: ["Javascript", "Bootstrapp", "Html", "Css"],
    imageUrl: hotelneredeImg,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "C#",
  "Tailwind",
  "MongoDB",
  "Python",
  "HTML",
  "CSS",
  "Bootstrap",
  "Node.js",

] as const;
