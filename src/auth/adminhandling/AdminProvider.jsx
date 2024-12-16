import React, { createContext, useState } from "react";
import axiosInstance from "../api/AxiosInstance";
import { toast } from "react-toastify";

export const AdminContext = createContext();
export const AdminProvider = ({ children }) => {
  const [popUp, setPopUp]=useState(false);
  const [allTutor, setAllTutor]=useState([]);
  const [allStudent, setAllStudent]=useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    image: "",
  });

  const courseHandleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];  // Get the file directly
      if (file) {
        // Optional: Add file type validation
        if (file.type.startsWith('image/')) {
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
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        setPopUp(false);
        toast.success("Course added successfully!");
        // Clear the form
        setNewCourse({
          title: "",
          image: "",
        });
        // Optionally refresh the courses list
        getAllCourses();
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add course");
      console.error(err);
    }
  };
  
  const deleteCourse = async (id) => {
    try {
      const response = await axiosInstance.delete(
        `/admin/removecourse/${id}`
      );
      if (response.status === 200) {
        toast.success("Course deleted successfully!");
        // Update the courses list by removing the deleted course
        setAllCourses(prevCourses => prevCourses.filter(course => course._id !== id));
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete course");
      console.error(err);
    }
  };

  const getAllCourses = async () => {
    try {
      const response = await axiosInstance.get("/admin/getcourse");
      if (response.status === 200) {
        setAllCourses(response.data.courses);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getAllUsers = async () => {
    try {
      const response = await axiosInstance.get("/admin/getallDetails");
      console.log(response)
      if(response.status===200){
        toast.success(response.data.message);
        setAllStudent(response.data.student_Data);
        setAllTutor(response.data.Tutor_Data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const tutorDelete=async(id)=>{
    try {
      console.log(id);
      const response = await axiosInstance.delete(
        `/admin/removeTutor/${id}`
      );
      if(response.status === 200){
        toast.success("Tutor deleted successfully...!!");
      }
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
  }
  const deleteStudent = async (id) => {
    try {
      const response = await axiosInstance.delete(
        `/admin/removestudent/${id}`
      );
      if(response.status === 200){
        toast.success("Tutor deleted successfully...!!");
      }
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
  };
  return (
    <AdminContext.Provider
      value={
        {getAllUsers,
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
          deleteCourse
        }
      }
    >
      {children}
    </AdminContext.Provider>
  );
};
