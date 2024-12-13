import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is GharPeShiksha.com?",
      answer:
        "GharPeShiksha.com is an educational company indulged in providing Teaching Jobs, Teacher Vacancy to persons interested in providing Home Tuitions, and fulfilling the need for a Home Tutor for students.",
      isOpen: false,
    },
    {
      question: "How Does it work?",
      answer:
        "Tutor register themselves with us and after the verification process, we share the contact details of needy students with them so that they can communicate and start teaching.",
      isOpen: false,
    },
    {
      question: "What are the charges we need to pay?",
      answer:
        "GharPeShiksha is free to use service for the students, they just need to sign up and fill their details so that we can find tutors in their locality. However, the tutor needs to buy our membership plan to start using services.",
      isOpen: false,
    },
    {
      question: "In which cities GharPeShiksha is available?",
      answer:
        "Our Home Tuition services are available in Delhi, NCR, Mumbai and nearby, Hyderabad, Jaipur, Ahmedabad. Our Online classes services are in PAN India.",
      isOpen: false,
    },
    {
      question: "How can I start earning?",
      answer:
        "You can start earning by enrolling yourself as a tutor so that we can find parents who are willing to hire a home tutor for their child.",
      isOpen: false,
    },
    {
      question: "What documents are needed for verification?",
      answer:
        "The tutors are required to upload One clearly visible photo, academic certificates, proof of residency and Aadhar Card.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : faq.isOpen,
      }))
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 flex flex-col items-center bg-blue-50 px-4 sm:px-8"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-normal pb-8 text-center"
      >
        FAQ - Home Tuition
      </motion.h1>

      <div className="w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`border-2 rounded-lg overflow-hidden shadow-md ${
                faq.isOpen ? "bg-blue-100" : "hover:bg-blue-50"
              }`}
            >
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex justify-between items-center px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white w-full"
                onClick={() => toggleFAQ(index)}
                aria-expanded={faq.isOpen}
                aria-controls={`faq-${index}`}
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: faq.isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {faq.isOpen ? (
                    <MinusIcon className="w-6 h-6 text-purple-600" />
                  ) : (
                    <PlusIcon className="w-6 h-6 text-purple-600" />
                  )}
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {faq.isOpen && (
                  <motion.div
                    id={`faq-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-gray-50 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const PlusIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
);

const MinusIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 12H4"
    />
  </svg>
);

export default FAQ;
