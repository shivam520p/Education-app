import React, { createContext, useState } from "react";
import axiosInstance from "../api/AxiosInstance";
import { toast } from "react-hot-toast";

export const AdminContext = createContext();
export const AdminProvider = ({ children }) => {
  const [popUp, setPopUp] = useState(false);
  const [allTutor, setAllTutor] = useState([]);
  const [allStudent, setAllStudent] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [tutorCourses, setTutorCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    image: "",
  });
  const [allSubjects, setAllSubjects] = useState([]);
  const [newSubjects, setNewSubjects] = useState({
    subjectName: "",
    image: "",
  });

  const [allClasses, setAllClasses] = useState([]);
  const [newClasses, setNewClasses] = useState({
    className: "",
    image: "",
  });
  const [allLanguage, setAllLanguage] = useState([]);
  const [newLanguage, setNewLanguage] = useState({
    languageName: "",
  });
  const [allContactUs, setAllContactUs] = useState([]);
  const [quoteForm, setQuoteFrom] = useState({
    titleName: "",
    titleContent: "",
  });

  const [allTitle, setAllTile] = useState([]);
  const [selectedClass, setSelectedClass] = useState({
    classId: "",
    subjectName: [],
    mode: "",
    details: {
      fullName: "",
      mobile: "",
      email: "",
    },
    addressDetails: {
      street: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
    },
  });
  const [mode, setMode] = useState("");
  const [allLeads, setAllLeads] = useState([]);

  const courseHandleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0]; // Get the file directly
      if (file) {
        // Optional: Add file type validation
        if (file.type.startsWith("image/")) {
          setNewCourse({ ...newCourse, image: file });
        } else {
          toast.error("Please select an image file");
        }
      }
    } else {
      setNewCourse({ ...newCourse, [name]: value }); // Use dynamic key for all non-image fields
    }
  };

  const addCourse = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!newCourse.title.trim() || !newCourse.image) {
      toast.error("Please fill all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", newCourse.title.trim());
    formData.append("image", newCourse.image);

    try {
      const response = await axiosInstance.post(
        "/admin/createcourse",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setPopUp(false);
        toast.success("Course added successfully..!!");
        // Clear the form
        setNewCourse({
          title: "",
          image: "",
        });
        // Optionally refresh the courses list
        getAllCourses();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const subjectHandleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      if (file) {
        if (file.type.startsWith("image/")) {
          setNewSubjects({ ...newSubjects, image: file });
        } else {
          toast.error("Please select an image file");
        }
      }
    } else {
      setNewSubjects({ ...newSubjects, [name]: value });
    }
  };

  const languageHandleChange = (e) => {
    const { name, value } = e.target;
    setNewLanguage({ ...newLanguage, [name]: value });
  };

  const addLanguage = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "/admin/createlanguage",
        newLanguage
      );

      if (response.status === 200) {
        toast.success("Language added successfully..!!");
        setPopUp(false);
        setNewLanguage({
          languageName: "",
        });
        getAllLanguage();
      }
    } catch (err) {
      console.error(err);
    }
  };
  const getAllLanguage = async () => {
    try {
      const response = await axiosInstance.get("/admin/getlanguage");
      if (response.status === 200) {
        setAllLanguage(response.data.languages);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const deleteLanguage = async (id) => {
    try {
      const response = await axiosInstance.delete(
        `/admin/removeLanguage/${id}`
      );
      if (response.status === 200) {
        toast.success("Language deleted successfully!");
        getAllLanguage();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addSubject = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!newSubjects.subjectName || !newSubjects.image) {
      toast.error("Please fill all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("subjectName", newSubjects.subjectName);
    formData.append("image", newSubjects.image);

    try {
      const response = await axiosInstance.post(
        "/admin/createsubject",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        setPopUp(false);
        toast.success("Subject added successfully!");
        // Clear the form
        setNewSubjects({
          subjectName: "",
          image: "",
        });
        // Refresh the subjects list
        getAllSubjects();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getAllSubjects = async () => {
    try {
      const response = await axiosInstance.get("/admin/getsubject");
      if (response.status === 200) {
        setAllSubjects(response.data.subjects);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteSubject = async (id) => {
    try {
      const response = await axiosInstance.delete(`/admin/removesubject/${id}`);
      if (response.status === 200) {
        toast.success("Subject deleted successfully!");
        getAllSubjects();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const classHandleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      if (file) {
        if (file.type.startsWith("image/")) {
          setNewClasses({ ...newClasses, image: file });
        } else {
          toast.error("Please select an image file");
        }
      }
    } else {
      setNewClasses({ ...newClasses, [name]: value });
    }
  };

  const addClass = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!newClasses.className || !newClasses.image) {
      toast.error("Please fill all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("className", newClasses.className);
    formData.append("image", newClasses.image);

    try {
      const response = await axiosInstance.post(
        "/admin/createclass",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        setPopUp(false);
        toast.success("Class added successfully!");
        setNewClasses({
          className: "",
          image: "",
        });
        getAllClasses();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getAllClasses = async () => {
    try {
      const response = await axiosInstance.get("/admin/getclass");
      if (response.status === 200) {
        setAllClasses(response.data.classes);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteClass = async (id) => {
    try {
      const response = await axiosInstance.delete(`/admin/removeclass/${id}`);
      if (response.status === 200) {
        toast.success("Class deleted successfully!");
        getAllClasses();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteCourse = async (id) => {
    try {
      const response = await axiosInstance.delete(`/admin/removecourse/${id}`);
      if (response.status === 200) {
        toast.success("Course deleted successfully!");
        getAllCourses();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getAllCourses = async () => {
    try {
      const response = await axiosInstance.get("/admin/getcourseDetails");
      if (response.status === 200) {
        setAllCourses(response.data.course_Data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getAllUsers = async () => {
    try {
      const response = await axiosInstance.get("/admin/getallDetails");
      console.log(response.data)
      if (response.status === 200) {
        setAllStudent(response.data.student_Data);
        setAllTutor(response.data.Tutor_Data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const tutorDelete = async (id) => {
    try {
      const response = await axiosInstance.delete(`/admin/removeTutor/${id}`);
      if (response.status === 200) {
        toast.success("Tutor deleted successfully...!!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const deleteStudent = async (id) => {
    try {
      const response = await axiosInstance.delete(`/admin/removestudent/${id}`);
      if (response.status === 200) {
        toast.success("Student deleted successfully...!!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getAllContactUs = async () => {
    try {
      const response = await axiosInstance.get("/admin/getallcontactsmessages");
      if (response.status === 200) {
        setAllContactUs(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getAllSessionBook = async () => {
    try {
      const response = await axiosInstance.get("/tutor/getbooksession");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const getTutorCourses = async () => {
    try {
      const response = await axiosInstance.get("/tutor/getourcourses");

      if (response.status === 200) {
        setTutorCourses(response.data.coursesByCreateUser);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const tutorVerify = async (id) => {
    try {
      const response = await axiosInstance.put(`/admin/updatestatus/${id}`);
      console.log(response);
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };

  const submitQuary = async (e) => {
    console.log(selectedClass);
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "lead/postleads",
        selectedClass
      );
      if (response.status === 201) {
        toast.success(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getAllLeadsFromUser = async () => {
    try {
      const response = await axiosInstance.get("lead/getleads");
      if (response.status === 200) {
        setAllLeads(response?.data?.lead);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const quoteHandleChange = (e) => {
    const { name, value } = e.target;
    setQuoteFrom({ ...quoteForm, [name]: value });
  };
  const quoteSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/title/posttitle", quoteForm);
      console.log(response);
      if (response.status === 201) {
        toast.success(response.data.message);
        setQuoteFrom({ titleName: "", titleContent: "" });
        setPopUp(false);
      }
    } catch (err) {
      toast.error("All Fields are required..!!");
      console.log(err);
    }
  };
  const getAllQuotes = async () => {
    try {
      const response = await axiosInstance.get("/title/getalltitle");
      if (response.status === 200) {
        setAllTile(response.data.titles);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteQuotes = async (id) => {
    try {
      const response = await axiosInstance.delete(`/title/removetitle/${id}`);
      if (response.status === 200) {
        toast.success("Quotes deleted successfully...!!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteLeads = async (id) => {
    try {
      const response = await axiosInstance.delete(`/lead/removeLead/${id}`);
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        getAllUsers,
        allStudent,
        allTutor,
        tutorDelete,
        deleteStudent,
        allCourses,
        getAllCourses,
        popUp,
        setPopUp,
        newCourse,
        courseHandleChange,
        addCourse,
        deleteCourse,
        subjectHandleChange,
        addSubject,
        allSubjects,
        getAllSubjects,
        newSubjects,
        deleteSubject,
        addClass,
        allClasses,
        getAllClasses,
        newClasses,
        classHandleChange,
        deleteClass,
        allLanguage,
        getAllLanguage,
        newLanguage,
        languageHandleChange,
        addLanguage,
        deleteLanguage,
        allContactUs,
        getAllContactUs,
        getAllSessionBook,
        tutorCourses,
        setTutorCourses,
        getTutorCourses,
        tutorVerify,
        selectedClass,
        setSelectedClass,
        mode,
        setMode,
        quoteForm,
        setQuoteFrom,
        quoteHandleChange,
        quoteSubmit,
        allTitle,
        setAllTile,
        getAllQuotes,
        deleteQuotes,
        submitQuary,
        allLeads,
        setAllLeads,
        getAllLeadsFromUser,
        deleteLeads,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
