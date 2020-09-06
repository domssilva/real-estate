import React from 'react';
import { motion } from 'framer-motion';

export default function MotionWrapper({ children}) {
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}
