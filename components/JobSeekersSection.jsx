import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
    },
  },
};

const JobSeekersSection = () => {
  const router = useRouter();
  
  return (
    <motion.div 
      initial="offscreen" 
      whileInView="onscreen" 
      viewport={{ once: true, amount: 0.4 }} 
      className="container mx-auto flex flex-col md:flex-row gap-5 max-w-[1250px] px-4"
      variants={cardVariants}
      style={{ marginBottom: '20px' }}
    >
      <div className="w-full md:w-1/2 flex items-center">
        <motion.img
          loading="lazy"
          src="/images/home/job-seekers-banner.png"
          className="w-full rounded-md lg:px-16 object-cover"
          alt="Job Seekers Banner"
        />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2 text-slate-800">
        <div className='md:w-10/12 md:mx-auto px-4 py-4'>
          <h2 className="text-3xl md:text-4xl font-spline font-medium mb-4 leading-tight">
            Tailored Interview <br /> Preparation for Job Seekers
          </h2>
          <img
            loading="lazy"
            src="/images/home/HomeLine.png"
            className="mt-1.5 max-w-full aspect-[14.29] w-[307px]"
          />
          {/* Content including ticks and texts */}
          <div className="mt-8 space-y-4">
          <div className="flex items-center gap-2">
            <img
              loading="lazy"
              src="/images/home/rounded-tick-icon.png"
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">Realistic Mock Interviews</span>
          </div>
          <p className="font-light">Experience job-like interview scenarios and questions.</p>
          <div className="flex items-center gap-2 mt-4">
            <img
              loading="lazy"
               src="/images/home/rounded-tick-icon.png"
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">AI Feedback</span>
          </div>
          <p className="font-light">Receive instant, AI-driven feedback on your answers and delivery.</p>
          <div className="flex items-center gap-2 mt-4">
            <img
              loading="lazy"
              src="/images/home/rounded-tick-icon.png"
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">Progress Tracking</span>
          </div>
          <p className="font-light">Watch your interview skills improve with detailed analytics.</p>
        </div>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="flex items-center cursor-pointer justify-center self-start lg:self-start w-2/3 lg:w-2/3 py-2 mt-9 text-sm text-white bg-sky-500 rounded-md border border-sky-500 transition-transform duration-300"
            onClick={() => router.push('/signUp', { state: { activeTab: 'individual' } })}
          >
            <span>Start Preparing Today</span>
            <FaArrowRight className="ml-2" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobSeekersSection;
