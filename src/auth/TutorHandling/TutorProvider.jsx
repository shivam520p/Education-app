import React, { createContext, useState } from 'react'
import axiosInstance from '../api/AxiosInstance';

export const TutorContext = createContext();
export const TutorProvider = ({children}) => {
  const [tutorDetails, setTutorDetails] = useState(null);

  const getTutorDetails = async () => {
    try {
      const response = await axiosInstance.get("student/alltutorDetails");
      
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    
    
  }
  return (
    <TutorContext.Provider value={{tutorDetails, setTutorDetails, getTutorDetails}}>
      {children}
    </TutorContext.Provider>
  )
}
