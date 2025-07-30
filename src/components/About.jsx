import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lightbulb, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-ntc-blue" />,
      title: 'Qualidade Incomparável',
      description:
        'Nosso compromisso é com a excelência em cada detalhe, utilizando materiais de ponta e processos rigorosos para garantir durabilidade e segurança.',
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-ntc-blue" />,
      title: 'Inovação Constante',
      description:
        'Adotamos as mais recentes tecnologias e métodos construtivos para otimizar prazos, custos e entregar soluções inteligentes e sustentáveis.',
    },
    {
      icon: <Users className="h-10 w-10 text-ntc-blue" />,
      title: 'Parceria e Confiança',
      description:
        'Construímos mais do que edifícios; construímos relacionamentos sólidos baseados na transparência, comunicação e dedicação total ao sucesso do seu projeto.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="section-padding bg-ntc-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ntc-dark mb-4">
            Sobre a <span className="gradient-text">NTC Brasil</span>
          </h2>
          <p className="text-lg text-ntc-text max-w-3xl mx-auto">
            Somos uma empresa de construção dedicada a transformar ideias em
            estruturas sólidas e funcionais. Com uma equipe experiente e um foco
            incansável na satisfação do cliente, a NTC Brasil é sua parceira
            ideal para todos os desafios da construção civil.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-ntc-light-gray p-8 rounded-xl shadow-subtle hover:shadow-strong hover:-translate-y-2 transition-all duration-300 flex flex-col"
              variants={itemVariants}
            >
              <div className="mb-6 bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-ntc-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-ntc-text flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
