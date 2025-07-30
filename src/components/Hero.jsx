import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroImageUrl =
    'https://images.unsplash.com/photo-1511068797325-6083f0f872b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="relative bg-ntc-light-gray min-h-screen flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-6 py-24 md:py-32">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-ntc-dark leading-tight mb-6"
              variants={itemVariants}
            >
              Transformamos sua visão em{' '}
              <span className="gradient-text">realidade</span> na construção
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-ntc-text max-w-xl mx-auto md:mx-0 mb-8"
              variants={itemVariants}
            >
              Construção com qualidade, inovação e comprometimento – essa é a
              nossa marca. Realizamos projetos que inspiram e perduram.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a href="#contact" className="btn btn-primary text-lg group">
                Discuta seu Projeto
                <ArrowRight
                  className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  size={20}
                />
              </a>
            </motion.div>
          </div>
          <motion.div
            className="relative h-80 md:h-auto"
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ntc-blue to-blue-300 rounded-3xl transform -rotate-3"></div>
            <img
              src={heroImageUrl}
              alt="Arquitetura moderna de um prédio"
              className="relative w-full h-full object-cover rounded-3xl shadow-strong"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
