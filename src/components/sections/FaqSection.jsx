import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';

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
      answer: "Not at all! HireGround is designed for people at all career stages."
    },
    // {
    //   question: "How much does it cost to attend?",
    //   answer: "HireGround offers various ticket options to make the event accessible to everyone. We have early bird discounts, student rates, and group packages. Check our pricing section for current rates and special offers."
    // },
    // {
    //   question: "What's included in my ticket?",
    //   answer: "Your ticket includes access to all keynote sessions, breakout workshops, networking sessions, career coaching corners, CV review sessions, mock interviews, lunch, refreshments, and exclusive career resources and templates."
    // },
    // {
    //   question: "Will I get materials or resources to take home?",
    //   answer: "Absolutely! All attendees receive a comprehensive career toolkit including CV templates, interview checklists, salary negotiation guides, networking templates, and exclusive access to our online resource portal for 6 months post-event."
    // },
    {
      question: "Can I network with other attendees and speakers?",
      answer: "Yes! Networking is a key component of HireGround. We have dedicated networking sessions, lunch breaks, and informal meet-and-greet opportunities. You'll connect with like-minded professionals, potential mentors, and industry leaders."
    },
    {
      question: "Will there be job opportunities available?",
      answer: "While HireGround focuses on career development rather than direct recruitment, many of our partner companies and speakers often share job openings. Plus, the networking opportunities frequently lead to job referrals and career opportunities."
    },
    {
      question: "How do I prepare for the event?",
      answer: "Come with an open mind and specific career goals in mind. Dress corporately to make a great first impression. Bring copies of your CV for review sessions, prepare questions for speakers, and don't forget your business cards or LinkedIn QR code for networking. We'll send a detailed preparation guide closer to the event date."
    },
    // {
    //   question: "Is lunch and refreshments provided?",
    //   answer: "Yes! Your ticket includes a networking lunch, coffee breaks, and light refreshments throughout the day. We cater to various dietary requirements - just let us know when registering."
    // },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Intro and contact */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <h2 className="section-title mb-5">Got questions?</h2>
            <p className="lede mb-10">
              Find answers to common questions about HireGround, our career development event designed to transform your professional journey.
            </p>

            <div className="border-t border-line pt-8">
              <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
              <p className="text-muted mb-5">
                Our team is here to help! Reach out to us and we'll get back to you within 24 hours.
              </p>
              <a href="mailto:hireground@thelightutors.com" className="btn btn-secondary">
                Contact Support
              </a>
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="lg:col-span-7 border-t border-ink">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={index} className="border-b border-line">
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={open}
                  className="w-full py-6 text-left flex items-start justify-between gap-6 group"
                >
                  <span className="text-lg sm:text-xl font-semibold text-ink group-hover:text-ember-deep transition-colors">
                    {faq.question}
                  </span>
                  <span className={`shrink-0 w-8 h-8 rounded-md flex items-center justify-center transition-colors ${open ? 'bg-ember text-ink' : 'bg-mist text-ink'}`}>
                    {open ? <HiMinus className="w-5 h-5" /> : <HiPlus className="w-5 h-5" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-14 text-ink/80 leading-relaxed text-base sm:text-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
