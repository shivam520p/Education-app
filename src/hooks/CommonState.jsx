import React, { createContext, useState } from "react";
import instructor1 from "../assets/images/instructor-img1.png";
import instructor2 from "../assets/images/instructor-img2.png";
import instructor3 from "../assets/images/instructor-img3.png";

export const CommonComponent = createContext();

const CommonState = ({ children }) => {
  const [commonState, setCommonState] = useState("Home");
  
  const instructors = [
    {
      name: "Devon Lane",
      role: "Web Developer",
      courses: 7,
      students: "15k",
      specialty: "Web Developer",
      rating: 4.6,
      reviews: "2.4k",
      image: instructor1,
      phone: "1234567890",
      email: "devonlane@gmail.com",
      address: "1234567890",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      name: "John Doe",
      role: "WordPress Expert",
      courses: 6,
      students: "55k",
      rating: 4.6,
      reviews: "2.4k",
      specialty: "WordPress Expert",
      image: instructor2,
      phone: "1234567890",
      email: "devonlane@gmail.com",
      address: "1234567890",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",

    },
    {
      name: "Alexandar",
      role: "UI/UX Designer",
      courses: 12,
      students: "36k",
      rating: 4.6,
      reviews: "2.4k",
      specialty: "UI/UX Designer",
      image: instructor3,
      phone: "1234567890",
      email: "devonlane@gmail.com",
      address: "1234567890",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      name: "Alexandar",
      role: "UI/UX Designer",
      courses: 12,
      students: "36k",
      specialty: "UI/UX Designer",
      rating: 4.6,
      reviews: "2.4k",
      image: instructor3,
      phone: "1234567890",
      email: "devonlane@gmail.com",
      address: "1234567890",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",

    },
    {
      name: "Alexandar",
      role: "UI/UX Designer",
      courses: 12,
      students: "36k",
      specialty: "UI/UX Designer",
      rating: 4.6,
      reviews: "2.4k",
      image: instructor3,
      phone: "1234567890",
      email: "devonlane@gmail.com",
      address: "1234567890",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",

    },
    {
      name: "Alexandar",
      role: "UI/UX Designer",
      courses: 12,
      students: "36k",
      specialty: "UI/UX Designer",
      rating: 4.6,
      reviews: "2.4k",
      image: instructor3,
      phone: "1234567890",
      email: "devonlane@gmail.com",
      address: "1234567890",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",

    },
  ];
  return (
    <>
      <CommonComponent.Provider
        value={{ commonState, setCommonState, instructors }}
      >
        {children}
      </CommonComponent.Provider>
    </>
  );
};

export default CommonState;
