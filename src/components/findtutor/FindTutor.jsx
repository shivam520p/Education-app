import React from "react";
import Tutors from "./Tutors";

export const FindTutor = () => {
  return (
    <>
      <section className="mt-24 px-4 bg-blue-50">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5 py-16">
          <h1 className="text-5xl font-bold text-gray-700">Instructors</h1>
          <div className="flex justify-center items-center gap-2 text-lg">
            <a href="#home">
              <i class="fa-solid fa-house mr-2"></i>Home
            </a>
            <em>
              <i class="fa-solid fa-chevron-right"></i>
            </em>
            <a href="#contact" className="text-amber-500">
            Instructors
            </a>
          </div>
        </div>
      </section>
      <Tutors />
    </>
  );
};
