import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus, HiQuestionMarkCircle, HiSparkles } from 'react-icons/hi';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Academy-focused FAQ data
  const faqs = [
    {
      question: "What is HireGround Academy?",
      answer: "HireGround Academy is a 6-week employability and skills development program designed to prepare early-career professionals and graduates for the job market. It focuses on employability training, soft skills, career readiness, CV/LinkedIn support, and connects you with our talent pool for job opportunities."
    },
    {
      question: "Is HireGround Academy really free?",
      answer: "Yes! Cohort 1 is completely free as a pilot program to support a small group of participants. This is a unique opportunity to get professional career development support at no cost."
    },
    {
      question: "Who should apply to HireGround Academy?",
      answer: "The Academy is designed for students, recent graduates, early-career professionals, and job seekers looking for structure and guidance. If you're willing to learn and participate consistently, you're a great fit!"
    },
    {
      question: "How does the application process work?",
      answer: "It's simple: 1) Complete the registration form and short pre-assessment, 2) Shortlisted applicants will be invited to submit a brief video introduction, 3) Final participants will be contacted via email with program details."
    },
    {
      question: "Is the program in-person or virtual?",
      answer: "HireGround Academy is 100% virtual! You can participate from anywhere with an internet connection. This makes it accessible for everyone regardless of location."
    },
    {
      question: "What will I learn in the program?",
      answer: "You'll gain practical skills in employability training, workplace readiness, soft skills development, CV writing, LinkedIn optimization, interview preparation, and career planning. You'll also receive personalized feedback and mentorship."
    },
    {
      question: "What happens after the program?",
      answer: "Upon completion, you'll have the opportunity to be added to HireGround's talent pool for future job and internship recommendations. We'll help connect you with employers who are looking for candidates with your skills."
    },
    {
      question: "How many spots are available?",
      answer: "Cohort 1 has only 50 spots available. Applications are open for a limited time, so we encourage you to apply as soon as possible to secure your place."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-orange-50/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/15 to-purple-200/15 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ff7300 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full border border-orange-200 mb-8"
          >
            <HiQuestionMarkCircle className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-orange-800 font-medium text-sm sm:text-base">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-gray-900">Got </span>
            <span
              className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
              style={{ color: '#ff7300' }}
            >
              questions?
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Find answers to common questions about HireGround Academy and kickstart your career journey.
          </motion.p>
        </motion.div>

        {/* FAQ Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg border border-orange-100/50 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between group hover:bg-orange-50/50 transition-all duration-300"
                >
                  <span className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-orange-700 transition-colors duration-300 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                    className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center"
                  >
                    <HiPlus className="w-5 h-5 text-white" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6">
                        <div className="pt-4 border-t border-orange-100">
                          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 lg:p-12 shadow-2xl" style={{ backgroundColor: '#ff7300' }}>
            <div className="space-y-6">
              <div className="flex items-center justify-center mb-4">
                <HiSparkles className="w-8 h-8 text-white mr-3" />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Still have questions?
                </h3>
              </div>

              <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                Our team is here to help! Reach out to us and we'll get back to you within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <a href="mailto:hireground@thelightutors.com">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Contact Support
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;