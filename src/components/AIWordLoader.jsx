import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIWordLoader = () => {
  const aiWords = [
    'Initializing', 'Learning', 'Thinking', 'Reasoning', 'Analyzing',
    'Computing', 'Processing', 'Training', 'Optimizing', 'Predicting',
    'Inferring', 'Generating', 'Synthesizing', 'Encoding', 'Decoding',
    'Classifying', 'Clustering', 'Modeling', 'Simulating', 'Evaluating'
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % aiWords.length);
    }, 700); // Change word every 700ms

    return () => clearInterval(interval);
  }, [aiWords.length]);

  return (
    <div className="flex items-center justify-center min-h-[1.5em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="inline-block text-center"
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >
          {aiWords[currentWordIndex]}...
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AIWordLoader;
