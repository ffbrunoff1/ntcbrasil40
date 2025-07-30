import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753838750490_0.png';
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Expertise', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="bg-ntc-dark text-ntc-light-gray"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#hero">
              <img src={logoUrl} alt="NTC Brasil Logo" className="h-12 mb-4" />
            </a>
            <p className="max-w-xs text-gray-400">
              Construindo o futuro com solidez, inovação e compromisso.
            </p>
          </div>

          <div className="md:mx-auto">
            <h4 className="font-bold text-white text-lg mb-4">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-ntc-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="tel:+5544991040774"
                  className="hover:text-ntc-blue transition-colors duration-300"
                >
                  +55 44 99104-0774
                </a>
              </li>
              <li>
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="hover:text-ntc-blue transition-colors duration-300"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </li>
              <li>
                <p>Padre Lebret, 801, G05 Bloco 03</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} NTC Brasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
}
