import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus, HiQuestionMarkCircle, HiSparkles } from 'react-icons/hi';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Career-focused FAQ data for HireGround
  const faqs = [
    {
      question: "Who should attend HireGround?",
      answer: "HireGround is perfect for recent graduates, job seekers, corps members, career changers, and anyone looking to advance their professional journey. Whether you're just starting out or looking to pivot in your career, our expert speakers and workshops will provide valuable insights for your success."
    },
    {
      question: "What will I learn at HireGround?",
      answer: "You'll gain practical skills in CV writing, interview preparation, personal branding, networking strategies, and career planning. Our sessions cover industry-specific insights, salary negotiation, LinkedIn optimization, and how to stand out in today's competitive job market."
    },
    {
      question: "Do I need prior experience to attend?",
      answer: "Not at all! HireGround is designed for people at all career stages. Our content ranges from beginner-friendly sessions for fresh graduates to advanced strategies for experienced professionals looking to level up their careers."
    },
    {
      question: "How much does it cost to attend?",
      answer: "HireGround offers various ticket options to make the event accessible to everyone. We have early bird discounts, student rates, and group packages. Check our pricing section for current rates and special offers."
    },
    {
      question: "What's included in my ticket?",
      answer: "Your ticket includes access to all keynote sessions, breakout workshops, networking sessions, career coaching corners, CV review sessions, mock interviews, lunch, refreshments, and exclusive career resources and templates."
    },
    {
      question: "Will I get materials or resources to take home?",
      answer: "Absolutely! All attendees receive a comprehensive career toolkit including CV templates, interview checklists, salary negotiation guides, networking templates, and exclusive access to our online resource portal for 6 months post-event."
    },
    {
      question: "Can I network with other attendees and speakers?",
      answer: "Yes! Networking is a key component of HireGround. We have dedicated networking sessions, lunch breaks, and informal meet-and-greet opportunities. You'll connect with like-minded professionals, potential mentors, and industry leaders."
    },
    {
      question: "Are there specific tracks for different industries?",
      answer: "Yes, we offer specialized tracks for Tech, Finance, Healthcare, Creative Industries, Entrepreneurship, and Public Service. Each track features industry-specific speakers and tailored career advice for those sectors."
    },
    {
      question: "Will there be job opportunities available?",
      answer: "While HireGround focuses on career development rather than direct recruitment, many of our partner companies and speakers often share job openings. Plus, the networking opportunities frequently lead to job referrals and career opportunities."
    },
    {
      question: "How do I prepare for the event?",
      answer: "Come with an open mind and specific career goals in mind. Bring copies of your CV for review sessions, prepare questions for speakers, and don't forget your business cards or LinkedIn QR code for networking. We'll send a detailed preparation guide closer to the event date."
    },
    {
      question: "Is lunch and refreshments provided?",
      answer: "Yes! Your ticket includes a networking lunch, coffee breaks, and light refreshments throughout the day. We cater to various dietary requirements - just let us know when registering."
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
            Find answers to common questions about HireGround, our career development event designed to transform your professional journey.
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
                <a href="mailto:bukunmi@thelightutors.com">
                  <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Support
                </motion.button>
                </a>
                <a href="https://bit.ly/vtltcf25" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  Become a Volunteer
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