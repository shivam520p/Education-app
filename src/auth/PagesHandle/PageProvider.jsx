import React, { createContext } from "react";
import { useState } from "react";
import axiosInstance from "../api/AxiosInstance";
import { toast } from "react-hot-toast";

export const PageContext = createContext();
export const PageProvider = ({ children }) => {
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [bookSession,setBookSession]=useState({
    date:"",
    startTime:"",
    endTime:"",
  });

  const contactHandleChange = (e) => {
    const {name,value}=e.target;
    setContactForm({...contactForm,[name]:value});
  };
  const contactHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/contact", contactForm);
      if(response.status===200){
        toast.success(response.data.message);
        setContactForm({fullName:"",email:"",subject:"",message:""});
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const bookSessionHandleChange = (e) => {
    const {name,value}=e.target;
    console.log(name,value);
    setBookSession({...bookSession,[name]:value});
  };
  const bookSessionHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/student/booksession/67611af5edc3f3ecb35b40fc", bookSession);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <>
      <PageContext.Provider
        value={{
          contactForm,
          setContactForm,
          contactHandleChange,
          contactHandleSubmit,
          bookSession,
          setBookSession,
          bookSessionHandleChange,
          bookSessionHandleSubmit,
        }}
      >
        {children}
      </PageContext.Provider>
    </>
  );
};
