import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const PHONE = '551155200485';
const MESSAGE = 'Olá! Vim pelo site da Flow2work e gostaria de saber mais sobre a plataforma.';
const HREF = `https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(MESSAGE)}`;

export function WhatsAppButton() {
    return (
        <motion.a
            href={HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
        >
            <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" aria-hidden="true" />
            <FaWhatsapp className="relative w-7 h-7" />
        </motion.a>
    );
}
