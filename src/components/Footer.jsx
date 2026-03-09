import { Container } from './ui/Container';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Phone, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const navigation = {
    product: [
        { name: 'Funcionalidades', href: '#features' },
        { name: 'Integrações', href: '#integrations' },
        { name: 'Planos', href: '#pricing' },
    ],
    legal: [],
    social: [
        { name: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=551155200485', icon: FaWhatsapp },
        { name: 'Instagram', href: 'https://www.instagram.com/flow2work/', icon: Instagram },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/company/levelupconsultoria/', icon: Linkedin },
    ],
};

export function Footer() {
    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="relative isolate overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-black" id='contact'>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
            
            {/* Background Gradient Blobs */}
            <div
                className="absolute left-0 top-0 -z-10 h-[800px] w-[800px] opacity-10 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
                }}
            />
            
            <div
                className="absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] opacity-5 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
                }}
            />

            <Container className="relative pt-16 pb-12">


                {/* Main Footer Content */}
                <div className="mb-16 grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 col-span-2"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                src="/Brand.svg" 
                                alt="Dashboard do Flow2work"
                                className="w-40 h-full object-cover"
                            />  
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed mb-6">
                            Centralize CRM e atendimento por chatbot em uma única plataforma.
                        </p>
                        
                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <a href="tel:+551155200485" className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors group underline">
                                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                +55 11 5520-0485
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {navigation.social.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        target='_blank'
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                                    >
                                        <span className="sr-only">{item.name}</span>
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Product Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-widest">Produto</h4>
                        <ul className="space-y-3">
                            {navigation.product.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className="text-sm text-gray-400 hover:text-primary transition-colors group flex items-center gap-1"
                                    >
                                        {item.name}
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-widest">Comece Agora</h4>
                        <p className="text-sm text-gray-400 leading-relaxed mb-6">
                            Pronto para transformar seu atendimento?
                        </p>
                        <a
                            href="#pricing"
                            onClick={(e) => handleNavClick(e, '#pricing')}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                        >
                            Veja os Planos
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>

                </div>

                {/* Bottom Footer */}
                <div className="border-t border-white/10 pt-8">
                    <div className="text-center">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-xs text-gray-500 tracking-wide"
                        >
                            © 2026 Level UP. Todos os direitos reservados.
                        </motion.p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
