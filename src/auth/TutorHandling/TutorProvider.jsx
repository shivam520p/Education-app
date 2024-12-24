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
  const [tutor, setTutor] = useState(null);
  const [tutorName, setTutorName] = useState({
    fullName: "",
    email: "",
    avatar: "",
  });
  const [studentName, setStudentName] = useState({
    fullName: "",
    email: "",
    avatar: "",
  });
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
  const [allSessionBook, setAllSessionBook] = useState([]);

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
  const [tutorCourses, setTutorCourses] = useState({
    course_title: "",
    video_title: "",
    video: "",
    description: "",
    duration: "",
    coursePrice: "",
    courseImage: "",
  });

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
    if (studentProfile.gender) {
      try {
        const response = await axiosInstance.put(
          "/student/updatestudentdetails",
          studentProfile
        );
        if (response.status === 200) {
          toast.success(response?.data?.message);
          setProfileEdit(true);
        }
      } catch (err) {
        toast.error(toast.success.message);
        console.log(err);
      }
    } else {
      try {
        const response = await axiosInstance.post(
          "/student/addstudentdetails",
          studentProfile
        );
        if (response.status === 201) {
          toast.success(response?.data?.message);
          setProfileEdit(true);
        }
      } catch (err) {
        toast.error(err);
        console.log(err);
      }
    }
  };
  const getStudentProfileDetails = async () => {
    try {
      const response = await axiosInstance.get("/student/getourDetails");
      if (response.status === 200) {
        setStudentProfile({
          gender: response.data.date.gender,
          dateOfBirth: response.data.date.dateOfBirth,
          language: response.data.date.language,
          city: response.data.date.address.city,
          country: response.data.date.address.country,
          state: response.data.date.address.state,
          pinCode: response.data.date.address.pinCode,
          about: response.data.date.about,
        });
        setStudentName({
          fullName: response.data.date.userId.fullName,
          email: response.data.date.userId.email,
          avatar: response.data.date.userId.avatar,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const tutorProfileHandleChange = (e) => {
    const { name, value } = e.target;
    setTutorProfile({ ...tutorProfile, [name]: value });
  };
  const tutorProfileUpdate = async (e) => {
    e.preventDefault();
    if (!tutorProfile.gender) {
      try {
        const response = await axiosInstance.post(
          "/tutor/addTutorDetails",
          tutorProfile
        );
        if (response.status === 200) {
          setProfileEdit(true);
          toast.success(response.data.message);
        }
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
    } else {
      try {
        const response = await axiosInstance.put(
          "/tutor/updatetutordetails",
          tutorProfile
        );
        console.log(response);
        if (response.status === 200) {
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
    if (!educationDetails.degree) {
      try {
        const response = await axiosInstance.post(
          "/tutor/addTutorDetails",
          educationDetails
        );
        if (response.status === 200) {
          setProfileEdit(true);
          toast.success(response.data.message);
        }
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
    } else {
      try {
        const response = await axiosInstance.put(
          "/tutor/updatetutordetails",
          educationDetails
        );
        if (response.status === 200) {
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
    if (!experienceDetails.role) {
      try {
        const response = await axiosInstance.post(
          "/tutor/addTutorDetails",
          experienceDetails
        );
        if (response.status === 200) {
          setProfileEdit(true);
          toast.success(response.data.message);
        }
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
    } else {
      try {
        const response = await axiosInstance.put(
          "/tutor/updatetutordetails",
          experienceDetails
        );
        if (response.status === 200) {
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

    if (!certificatesDetails.name) {
      try {
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
          setProfileEdit(true);
        }
      } catch (err) {
        toast.error("An error occurred: " + err.response.data.message);
        console.log(err);
      }
    } else {
      try {
        const response = await axiosInstance.put(
          "/tutor/updatetutordetails",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          toast.success("Certificate details have been updated successfully!");
          setProfileEdit(true);
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
    setLoading(true);
    try {
      const response = await axiosInstance.put("/users/addavatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        toast.success(response.data.message);
        setTutorName({
          avatar: response.data.data.avatar,
        });
        setStudentName({
          avatar: response.data.data.avatar,
        });
      }
    } catch (err) {
      toast.error(err.response?.data?.message);
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
      const response = await axiosInstance.get("tutor/getourdetails");
      if (response.status === 200) {
        setTutorName(response?.data?.data?.userId);
        setTutorProfile({
          type: "address",
          gender: response.data.data.address.gender,
          dateOfBirth: response.data.data.address.dateOfBirth,
          state: response.data.data.address.state,
          city: response.data.data.address.city,
          pinCode: response.data.data.address.pinCode,
          country: response.data.data.address.country,
          language: response.data.data.address.language,
          about: response.data.data.address.about,
        });
        setEducationDetails({
          type: "qualifications",
          degree: response?.data?.data?.qualifications[0]?.degree,
          institution: response?.data?.data?.qualifications[0]?.institution,
          country: response?.data?.data?.qualifications[0]?.country,
          city: response?.data?.data?.qualifications[0]?.city,
          startDate: response?.data?.data?.qualifications[0]?.startDate,
          yearOfCompletion:
            response?.data?.data?.qualifications[0]?.yearOfCompletion,
        });
        setExperienceDetails({
          type: "experience",
          role: response?.data?.data?.experience[0]?.role,
          employmentType: response?.data?.data?.experience[0]?.employmentType,
          institutionName: response?.data?.data?.experience[0]?.institutionName,
          location_Type: response?.data?.data?.experience[0]?.location_Type,
          city: response?.data?.data?.experience[0]?.city,
          country: response?.data?.data?.experience[0]?.country,
          startDate: response?.data?.data?.experience[0]?.startDate,
          endDate: response?.data?.data?.experience[0]?.endDate,
        });
        setCertificatesDetails({
          type: "certifications",
          certificationPic:
            response?.data?.data?.certifications[0]?.certificationPic,
          name: response?.data?.data?.certifications[0]?.name,
          issuingOrganization:
            response?.data?.data?.certifications[0]?.issuingOrganization,
          issuedDate: response?.data?.data?.certifications[0]?.issuedDate,
          expireDate: response?.data?.data?.certifications[0]?.expireDate,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const [allTutorDetails, setAllTutorDetails] = useState([]);
  const getTutorToDisplay = async () => {
    try {
      const response = await axiosInstance.get("/admin/getTutorDetails");
      if (response.status === 200) {
        setAllTutorDetails(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCourseChange = (e) => {
    const { name } = e.target;
    if (e.target.type === "file") {
      setTutorCourses((prev) => ({
        ...prev,
        [name]: e.target.files[0],
      }));
    } else {
      setTutorCourses((prev) => ({
        ...prev,
        [name]: e.target.value,
      }));
    }
  };
  const addTutorCourses = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("video_title", tutorCourses.video_title);
    formData.append("video", tutorCourses.video);
    formData.append("course_title", tutorCourses.course_title);
    formData.append("description", tutorCourses.description);
    formData.append("duration", tutorCourses.duration);
    formData.append("coursePrice", tutorCourses.coursePrice);
    formData.append("courseImage", tutorCourses.courseImage);

    try {
      const response = await axiosInstance.post("/course/addcourse", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      if (response.status === 200) {
        toast.success("Course added successfully!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add course");
      console.error("Error adding course:", error);
    }
  };

  const getAllSessionBook = async () => {
    try {
      const response = await axiosInstance.get("/tutor/getbooksession");
      if (response.status === 200) {
        setAllSessionBook(response.data.findUsers);
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
        getStudentProfileDetails,
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
        tutor,
        tutorName,
        studentName,
        setTutor,
        studentProfile,
        setStudentProfile,
        studentProfileHandleChange,
        studentProfileUpdate,
        tutorCourses,
        setTutorCourses,
        addTutorCourses,
        handleCourseChange,
        allSessionBook,
        setAllSessionBook,
        getAllSessionBook,
        allTutorDetails,
        getTutorToDisplay,
      }}
    >
      {children}
    </TutorContext.Provider>
  );
};
