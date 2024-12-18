import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className='flex flex-col items-start justify-start'>
            <h3 className="text-4xl font-bold mb-4">Education</h3>
            <p className="text-lg">
              Your company description goes here. <br />Add a brief overview of your business.
            </p>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col items-start justify-start'>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/findtutor" className="hover:underline">Find Tutor</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/tutorsection" className="hover:underline">Become a Tutor</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className='flex flex-col items-start justify-start'>
            <h3 className="text-xl font-bold mb-4">Availability</h3>
            <ul className="space-y-2">
              <li><a href="/findtutor" className="hover:underline">All Tutors</a></li>
              <li><a href="/courses" className="hover:underline">All Courses</a></li>
              <li><a href="/courses/subjects" className="hover:underline">All Subjects</a></li>
              <li><a href="/courses/classes" className="hover:underline">All Classes</a></li>
              <li><a href="/courses/languages" className="hover:underline">All Languages</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='flex flex-col items-start justify-start'>
            <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-lg">
              <li>Email: info@company.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Street Name, City, Country</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-4 pt-4 text-center">
          <p className="text-lg">
           Copyright © {new Date().getFullYear()} NeraSoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer