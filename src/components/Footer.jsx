import { Container } from './ui/Container';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const navigation = {
    product: [
        { name: 'Funcionalidades', href: '#features' },
        { name: 'Integrações', href: '#integrations' },
        { name: 'Planos', href: '#pricing' },
    ],
    company: [
        { name: 'Sobre', href: '#' },
        { name: 'Contato', href: '#' },
    ],
    legal: [
        //{ name: 'Privacidade', href: '#' },
        //{ name: 'Termos', href: '#' },
        //{ name: 'Cookie Policy', href: '#' },
        //{ name: 'Acessibilidade', href: '#' },
    ],
    social: [
        { name: 'Instagram', href: 'https://www.instagram.com/flow2work/', icon: Instagram },
    ],
};

export function Footer() {
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

            <Container className="relative pt-8 pb-8">


                {/* Main Footer Content */}
                <div className="mb-16 grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
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
                            <a href="https://api.whatsapp.com/send?phone=551155200485" className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors group underline">
                                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                +55 11 5520-0485
                            </a>
                            <p className="text-xs text-gray-500"></p>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {navigation.social.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
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
                                        className="text-sm text-gray-400 hover:text-primary transition-colors group flex items-center gap-1"
                                    >
                                        {item.name}
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-widest">Empresa</h4>
                        <ul className="space-y-3">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-sm text-gray-400 hover:text-primary transition-colors group flex items-center gap-1"
                                    >
                                        {item.name}
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Legal Links */}
                    {/*<motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-widest">Legal</h4>
                        <ul className="space-y-3">
                            {navigation.legal.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-sm text-gray-400 hover:text-primary transition-colors group flex items-center gap-1"
                                    >
                                        {item.name}
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div> */}

                    {/* Resources / Support */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-widest">Suporte</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors group flex items-center gap-1">
                                    Documentação
                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors group flex items-center gap-1">
                                    API Reference
                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors group flex items-center gap-1">
                                    Status
                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors group flex items-center gap-1">
                                    Community
                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                                </a>
                            </li>
                        </ul>
                    </motion.div> */}
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
