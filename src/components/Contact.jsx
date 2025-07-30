import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Loader,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: null,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: null });

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          userEmail: 'ffbrunoff@yahoo.com.br',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitStatus({ success: true, error: null });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus({ success: false, error: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="section-padding bg-ntc-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ntc-dark mb-4">
            Vamos <span className="gradient-text">Construir Juntos</span>
          </h2>
          <p className="text-lg text-ntc-text max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo para discutir seu próximo
            projeto! Estamos prontos para ouvir suas ideias.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 bg-ntc-light-gray p-8 md:p-12 rounded-2xl shadow-subtle"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-ntc-dark">
              Informações de Contato
            </h3>
            <div className="flex items-start space-x-4">
              <div className="bg-ntc-blue/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-ntc-blue" />
              </div>
              <div>
                <h4 className="font-semibold text-ntc-dark">Telefone</h4>
                <a
                  href="tel:+5544991040774"
                  className="text-ntc-text hover:text-ntc-blue"
                >
                  +55 44 99104-0774
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-ntc-blue/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-ntc-blue" />
              </div>
              <div>
                <h4 className="font-semibold text-ntc-dark">E-mail</h4>
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="text-ntc-text hover:text-ntc-blue"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-ntc-blue/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-ntc-blue" />
              </div>
              <div>
                <h4 className="font-semibold text-ntc-dark">Endereço</h4>
                <p className="text-ntc-text">Padre Lebret, 801, G05 Bloco 03</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Seu nome completo"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-ntc-blue focus:border-ntc-blue transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Seu melhor e-mail"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-ntc-blue focus:border-ntc-blue transition"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Telefone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Seu telefone (opcional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-ntc-blue focus:border-ntc-blue transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Conte-nos sobre seu projeto..."
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-ntc-blue focus:border-ntc-blue transition"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full flex items-center justify-center disabled:bg-blue-300 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin mr-2" size={20} />{' '}
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem <Send className="ml-2" size={18} />
                  </>
                )}
              </button>
            </div>
            {submitStatus.success && (
              <div className="flex items-center text-green-600 bg-green-100 p-3 rounded-lg">
                <CheckCircle className="mr-2" /> Mensagem enviada com sucesso!
                Entraremos em contato em breve.
              </div>
            )}
            {submitStatus.error && (
              <div className="flex items-center text-red-600 bg-red-100 p-3 rounded-lg">
                <AlertTriangle className="mr-2" /> Erro: {submitStatus.error}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
