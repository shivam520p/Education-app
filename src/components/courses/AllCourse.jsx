import React from "react";

const AllCourse = () => {
  return (
    <>
     <section className="mt-24 px-4 bg-blue-50">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5 py-16">
          <h1 className="text-5xl font-bold text-gray-700">All Courses</h1>
          <div className="flex justify-center items-center gap-2 text-lg">
            <a href="/">
              <i className="fa-solid fa-house mr-2"></i>Home
            </a>
            <em>
              <i className="fa-solid fa-chevron-right"></i>
            </em>
            <a href="/courses" className="text-amber-500">
              Courses
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllCourse;
