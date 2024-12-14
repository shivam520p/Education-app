import React, { createContext, useState } from "react";
import axiosInstance from "../api/AxiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const DataProvider = createContext();
export const UserVerification = ({ children }) => {
  const navigate = useNavigate();
  // Student Register API fetching start
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    role: "1",
  });
  const [otpVisible, setOtpVisible] = useState(false);
  const [otp, setOtp] = useState({
    fullName: registerData.fullName,
    email: registerData.email,
    mobile: registerData.mobile,
    password: registerData.password,
    role: "1",
    otp: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [tutorRegisterData, setTutorRegisterData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    role: "2",
  });
  const [tutorOtp, setTutorOtp] = useState({
    fullName: tutorRegisterData.fullName,
    email: tutorRegisterData.email,
    mobile: tutorRegisterData.mobile,
    password: tutorRegisterData.password,
    role: "2",
  });
  const [tutorLoginData, setTutorLoginData] = useState({
    email: "",
    password: "",
  });


  const getUserData = async () => {
    try {
      const response = await axiosInstance.get("/users/getuser");
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userData", JSON.stringify(response.data.user));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };
  const submitRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "/users/register",
        registerData
      );
      console.log(response);
      if (response.status === 200) {
        toast.success("OTP Sent Successfully...!!");
        setOtpVisible(true);
      }
    } catch (error) {
      toast.error("Something went wrong...!!");
      console.log(error);
    }
  };
  const handleChangeOtp = (e) => {
    const { name, value } = e.target;
    setOtp({
      fullName: registerData.fullName,
      email: registerData.email,
      mobile: registerData.mobile,
      password: registerData.password,
      role: registerData.role,
      otp: value,
    });
  };
  const submitOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/register", otp);
      console.log(response);
      if (response.status === 201) {
        toast.success("You Have Been Registered Successfully...!!");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        navigate("/");
        getUserData();
      }
    } catch (error) {
      toast.error("Something went wrong...!!");
      console.log(error);
    }
  };
  const loginHandleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/login", loginData);
      console.log(response);
      if (response.status === 201) {
        toast.success("You Have Been Logged In Successfully...!!");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        navigate("/");
        getUserData();
      }
    } catch (error) {
      toast.error("Something went wrong...!!");
      console.log(error);
    }
  };
  // Student Register API fetching end

  // Tutor Register API fetching start
  
  const tutorHandleChange = (e) => {
    const { name, value } = e.target;
    setTutorRegisterData({ ...tutorRegisterData, [name]: value });
  };
  const tutorSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "/users/register",
        tutorRegisterData
      );
      console.log(response);
      if(response.status === 200){
        toast.success("OTP Sent Successfully...!!");
        setOtpVisible(true);
      }
    } catch (error) {
      toast.error("Something went wrong...!!");
      console.log(error);
    }
  };
  const tutorHandleOtp = (e) => {
    const { name, value } = e.target;
    setTutorOtp({
      fullName: tutorRegisterData.fullName,
      email: tutorRegisterData.email,
      mobile: tutorRegisterData.mobile,
      password: tutorRegisterData.password,
      role: tutorRegisterData.role,
      otp: value,
    });
  };
  const tutorSubmitOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/register", tutorOtp);
      console.log(response);
      if(response.status === 201){
        toast.success("You Have Been Registered Successfully...!!");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        navigate("/");
        getUserData();
      }
    } catch (error) {
      toast.error("Something went wrong...!!");
      console.log(error);
    }
  };
  const tutorLoginHandleChange = (e) => {
    const { name, value } = e.target;
    setTutorLoginData({ ...tutorLoginData, [name]: value });
  };
  const tutorLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/login", tutorLoginData);
      console.log(response);
      if(response.status===201){
        toast.success("You Have Been Logged In Successfully...!!");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        navigate("/");
        getUserData();
      }
    } catch (error) {
      toast.error("Something went wrong...!!");
      console.log(error);
    }
  };
  // Tutor Register API fetching end

  // Tutor Login API fetching start

  // Tutor Login API fetching end

  return (
    <DataProvider.Provider
      value={{
        registerData,
        setRegisterData,
        otp,
        setOtp,
        loginData,
        setLoginData,
        handleChangeRegister,
        submitRegister,
        handleChangeOtp,
        submitOtp,
        loginHandleChange,
        submitLogin,
        otpVisible,
        tutorRegisterData,
        setTutorRegisterData,
        tutorOtp,
        setTutorOtp,
        tutorLoginData,
        setTutorLoginData,
        tutorHandleChange,
        tutorSubmitRegister,
        tutorHandleOtp,
        tutorSubmitOtp,
        tutorLoginHandleChange,
        tutorLoginSubmit,
      }}
    >
      {children}
    </DataProvider.Provider>
  );
};