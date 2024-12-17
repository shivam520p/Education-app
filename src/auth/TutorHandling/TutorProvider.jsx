import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../api/AxiosInstance";
import { toast } from "react-hot-toast";

export const TutorContext = createContext();
export const TutorProvider = ({ children }) => {
  const [popUp, setPopUp] = useState(false);
  const [profileEdit, setProfileEdit] = useState(false);
  useEffect(() => {
    setProfileEdit(true);
  }, []);
  const [allTutorDetails, setAllTutorDetails] = useState([]);
  const [tutor, setTutor] = useState(null);
  const [studentProfile, setStudentProfile] = useState({
    gender: "",
    dateOfBirth: "",
    state: "",
    city: "",
    pinCode: "",
    country: "",
    studentSubject: "",
    about: "",
  });
  
  const [tutorProfile, setTutorProfile] = useState({
    type: "address",
    gender: "",
    dateOfBirth: "",
    state: "",
    city: "",
    pinCode: "",
    country: "",
    language: "",
    about: "",
  });

  const [educationDetails, setEducationDetails] = useState({
    type: "qualifications",
    degree: "",
    institution: "",
    country: "",
    city: "",
    startDate: "",
    yearOfCompletion: "",
  });

  const [experienceDetails, setExperienceDetails] = useState({
    type: "experience",
    role: "",
    employmentType: "",
    institutionName: "",
    location_Type: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
  });

  const [certificatesDetails, setCertificatesDetails] = useState({
    type: "certifications",
    certificationPic: "",
    name: "",
    issuingOrganization: "",
    issuedDate: "",
    expireDate: "",
  });

  const [newPassword, setNewPassword] = useState({
    Password: "",
    newPassword: "",
  });

  const passwordHandleChange = (e) => {
    const { name, value } = e.target;
    setNewPassword({
      ...newPassword,
      [name]: value,
    });
  };
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const changePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(
        "/users/changepassword",
        newPassword
      );
      if (response.status === 200) {
        toast.success("Your password has been changed successfully");
      }
      console.log(response);
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
  };

  const studentProfileHandleChange = (e) => {
    const { name, value } = e.target;
    setStudentProfile({ ...studentProfile, [name]: value });
  };
  const studentProfileUpdate = async (e) => {
    e.preventDefault();
    const profileEdit = localStorage.getItem("profileEdit");
    if (profileEdit) {
      try {
        const response = await axiosInstance.put(
          "/student/updatestudentdetails",
          studentProfile
        );
        if (response.status === 200) {
          toast.success("Your profile is updated successfully...!!");
          setProfileEdit(true);
          localStorage.setItem("profileEdit", JSON.stringify(studentProfile));
        }
        console.log(response);
      } catch (err) {
        toast.error(err);
        console.log(err);
      }
    } else {
      try {
        const response = await axiosInstance.post(
          "/student/addstudentdetails",
          studentProfile
        );
        console.log(response);
        if (response.status === 201) {
          toast.success("Your profile is added successfully...");
          setProfileEdit(true);
          localStorage.setItem("edit", profileEdit);
          localStorage.setItem("profileEdit", JSON.stringify(studentProfile));
        }
      } catch (err) {
        toast.error(err);
        console.log(err);
      }
    }
  };


  const tutorProfileHandleChange = (e) => {
    const { name, value } = e.target;
    setTutorProfile({ ...tutorProfile, [name]: value });
  };
  const tutorProfileUpdate = async (e) => {
    e.preventDefault();
    const tutorDetails = localStorage.getItem("tutorDetails");
    console.log(tutorDetails);
    if (!tutorDetails) {
      try {
        console.log("hello post");
        const response = await axiosInstance.post(
          "/tutor/addTutorDetails",
          tutorProfile
        );
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem(
            "tutorDetails",
            JSON.stringify(response.data.createTutor.address)
          );
          setProfileEdit(true);
          toast.success(response.data.message);
        }
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
    } else {
      try {
        console.log("hello put");
        const response = await axiosInstance.put(
          "/tutor/updatetutordetails",
          tutorProfile
        );
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem(
            "tutorDetails",
            JSON.stringify(response.data.updatedTutor.address)
          );
          setProfileEdit(true);
          toast.success(response.data.message);
        }
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
    }
  };

  const educationDetailsHandleChange = (e) => {
    const { name, value } = e.target;
    setEducationDetails({ ...educationDetails, [name]: value });
  };

  const educationDetailsUpdate = async (e) => {
    e.preventDefault();
    const education = localStorage.getItem("education");
    console.log(education);
    if (!education) {
      try {
        console.log("hello post");
        const response = await axiosInstance.post(
          "/tutor/addTutorDetails",
          educationDetails
        );
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem(
            "education",
            JSON.stringify(response.data.createTutor.qualifications)
          );
          setProfileEdit(true);
          toast.success(response.data.message);
        }
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
    } else {
      try {
        console.log("hello put");
        const response = await axiosInstance.put(
          "/tutor/updatetutordetails",
          educationDetails
        );
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem(
            "education",
            JSON.stringify(response.data.updatedTutor.qualifications)
          );
          setProfileEdit(true);
          toast.success(response.data.message);
        }
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
    }
  };

  const experienceDetailsHandleChange = (e) => {
    const { name, value } = e.target;
    setExperienceDetails({ ...experienceDetails, [name]: value });
  };

  const experienceDetailsUpdate = async (e) => {
    e.preventDefault();
    const experience = localStorage.getItem("experience");
    console.log(experience);
    if (!experience) {
      try {
        console.log("hello post");
        const response = await axiosInstance.post(
          "/tutor/addTutorDetails",
          experienceDetails
        );
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem(
            "experience",
            JSON.stringify(response.data.createTutor.experience)
          );
          setProfileEdit(true);
          toast.success(response.data.message);
        }
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
    } else {
      try {
        console.log("hello put");
        const response = await axiosInstance.put(
          "/tutor/updatetutordetails",
          experienceDetails
        );
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem(
            "experience",
            JSON.stringify(response.data.updatedTutor.experience)
          );
          setProfileEdit(true);
          toast.success(response.data.message);
        }
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
    }
  };

  const certificateHandleChange = (e) => {
    const { name, value } = e.target;
    console.log("Handling change for:", name, "with value:", value); // Debug log

    if (name === "certificationPic") {
      const file = e.target.files[0];
      setCertificatesDetails((prev) => ({
        ...prev,
        [name]: file,
      }));
    } else {
      setCertificatesDetails((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const certificatesDetailsUpdate = async (e) => {
    e.preventDefault();
    const cer = JSON.parse(localStorage.getItem("certificate"));
    const formData = new FormData();
    // Add type
    formData.append("type", "certifications");
    // Add all fields individually
    formData.append("name", certificatesDetails.name);
    formData.append(
      "issuingOrganization",
      certificatesDetails.issuingOrganization
    );
    formData.append("issuedDate", certificatesDetails.issuedDate);
    formData.append("expireDate", certificatesDetails.expireDate);
    // Add the file if it exists
    if (certificatesDetails.certificationPic) {
      formData.append("certificationPic", certificatesDetails.certificationPic);
    }
    // // Debug: Check what's in the FormData
    // for (let pair of formData.entries()) {
    //   console.log('FormData entry:', pair[0] + ': ' + pair[1]);
    // }

    if (!cer) {
      try {
        console.log("hello post");
        const response = await axiosInstance.post(
          "/tutor/addTutorDetails",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          toast.success(
            "Certificate details have been submitted successfully!"
          );
          localStorage.setItem(
            "certificate",
            JSON.stringify(response.data.createTutor.certifications)
          );
        }
        console.log(response);
      } catch (err) {
        toast.error("An error occurred: " + err.response.data.message);
        console.log(err);
      }
    } else {
      try {
        console.log("hello put");
        const response = await axiosInstance.put(
          "/tutor/updatetutordetails",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);
        if (response.status === 200) {
          toast.success("Certificate details have been updated successfully!");
          localStorage.setItem(
            "certificate",
            JSON.stringify(response.data.updatedTutor.certifications)
          );
        }
      } catch (err) {
        toast.error("An error occurred: " + err.message);
        console.log(err);
      }
    }
  };


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }
    const formData = new FormData();
    formData.append("avatar", file);
    console.log(file)
    setLoading(true);
    try {
      console.log(formData)
      const response = await axiosInstance.put("/users/addavatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      if (response.status === 200) {
        toast.success(response.data.message);
        localStorage.setItem("userImg", JSON.stringify(response.data.updateUserImage.avatar));
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const editAgainProfile = () => {
    setProfileEdit(false);
  };

  const [tutorDetails, setTutorDetails] = useState(null);

  const getTutorDetails = async () => {
    try {
      const response = await axiosInstance.get("admin/getTutorDetails");
      console.log(response);
      if (response.status === 200) {
        setAllTutorDetails(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TutorContext.Provider
      value={{
        popUp,
        setPopUp,
        tutorDetails,
        setTutorDetails,
        getTutorDetails,
        tutorProfile,
        setTutorProfile,
        tutorProfileHandleChange,
        tutorProfileUpdate,
        editAgainProfile,
        profileEdit,
        educationDetails,
        setEducationDetails,
        educationDetailsHandleChange,
        educationDetailsUpdate,
        experienceDetails,
        setExperienceDetails,
        experienceDetailsHandleChange,
        experienceDetailsUpdate,
        certificatesDetails,
        setCertificatesDetails,
        certificatesDetailsUpdate,
        certificateHandleChange,
        changePassword,
        passwordHandleChange,
        newPassword,
        setNewPassword,
        handleFileChange,
        handleSubmit,
        loading,
        error,
        allTutorDetails,
        tutor,
        setTutor,
        studentProfile,
        setStudentProfile,
        studentProfileHandleChange,
        studentProfileUpdate,
      }}
    >
      {children}
    </TutorContext.Provider>
  );
};
