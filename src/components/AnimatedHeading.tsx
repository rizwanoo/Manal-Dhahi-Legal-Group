import React from 'react';
import { motion } from 'motion/react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span';
  delay?: number;
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  className = '',
  as = 'h2',
  delay = 0
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 18,
        stiffness: 120
      }
    },
    hidden: {
      opacity: 0,
      y: 18,
      transition: {
        type: 'spring' as const,
        damping: 18,
        stiffness: 120
      }
    }
  };

  const Component = motion[as];

  return (
    <Component
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block tracking-tight"
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
};
