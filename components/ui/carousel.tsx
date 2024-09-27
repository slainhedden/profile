"use client";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const Carousel = ({ children }: { children: React.ReactNode[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === children.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? children.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-screen-lg">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center items-center"
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>
      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4">
        <button
          onClick={handlePrevious}
          className="bg-blue-500 text-white p-2 rounded-full shadow hover:bg-blue-600 transition-colors"
          aria-label="Previous"
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white p-2 rounded-full shadow hover:bg-blue-600 transition-colors"
          aria-label="Next"
        >
          <FaArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};