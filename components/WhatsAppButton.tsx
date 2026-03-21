'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = "55119XXXXXXXX"; // TODO: Substituir pelo número real
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre as soluções da AiProspera.");

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, boxShadow: '0 0 25px rgba(37, 211, 102, 0.5)' }}
      whileTap={{ scale: 0.9 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: '#25D366',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        border: 'none',
      }}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} fill="white" strokeWidth={1} />
    </motion.a>
  );
}
