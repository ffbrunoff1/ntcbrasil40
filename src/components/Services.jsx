import React from 'react';
import { motion } from 'framer-motion';
import {
  Building,
  HardHat,
  ClipboardCheck,
  DraftingCompass,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Building className="h-8 w-8 text-white" />,
      title: 'Construção Residencial',
      description:
        'Projetos de alto padrão, desde a fundação até o acabamento, criando lares com design e funcionalidade.',
    },
    {
      icon: <HardHat className="h-8 w-8 text-white" />,
      title: 'Edificações Comerciais',
      description:
        'Soluções completas para espaços comerciais, lojas e escritórios, focadas em otimização e impacto visual.',
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-white" />,
      title: 'Gerenciamento de Obras',
      description:
        'Coordenação total do seu projeto, garantindo o cumprimento de prazos, orçamentos e padrões de qualidade.',
    },
    {
      icon: <DraftingCompass className="h-8 w-8 text-white" />,
      title: 'Consultoria e Planejamento',
      description:
        'Análise de viabilidade, planejamento estratégico e consultoria técnica para garantir o sucesso do seu empreendimento.',
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="section-padding bg-ntc-light-gray">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ntc-dark mb-4">
            Nossa <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-ntc-text max-w-3xl mx-auto">
            Oferecemos um portfólio de serviços completo para atender às
            diversas necessidades do mercado da construção, sempre com a marca
            de qualidade da NTC Brasil.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-xl overflow-hidden text-white flex flex-col justify-between min-h-[300px] bg-ntc-dark"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-ntc-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

              <div className="relative z-20">
                <div className="p-4 bg-white/10 rounded-lg inline-block mb-4 backdrop-blur-sm">
                  {service.icon}
                </div>
              </div>

              <div className="relative z-20">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
