import React from "react";

const AllLanguage = () => {
  return (
    <>
      <section className="mt-20 px-4 bg-blue-50">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5 py-16">
          <h1 className="text-5xl font-bold text-gray-700">Languages</h1>
          <div className="flex justify-center items-center gap-2 text-lg">
            <a href="/">
              <i class="fa-solid fa-house mr-2"></i>Home
            </a>
            <em>
              <i class="fa-solid fa-chevron-right"></i>
            </em>
            <a href="/courses/languages" className="text-amber-500">
              Languages
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllLanguage;
