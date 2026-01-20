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
        { name: 'LinkedIn', href: '#', icon: Linkedin },
        { name: 'Instagram', href: '#', icon: Instagram },
        { name: 'Facebook', href: '#', icon: Facebook },
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

            <Container className="relative pt-20 pb-8">
                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20 rounded-2xl border border-white/10 bg-gradient-to-br from-primary/10 to-primary/5 p-8 lg:p-12"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-3">
                                Fique por dentro das novidades
                            </h3>
                            <p className="text-gray-400">
                                Receba as últimas atualizações, dicas de atendimento e inovações do Flow2work direto no seu email.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="seu@email.com"
                                className="flex-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all duration-300 group"
                            >
                                <span className="flex items-center gap-2">
                                    Inscrever
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Main Footer Content */}
                <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                src="/Brand.svg" 
                                alt="Dashboard do Flow2work"
                                className="w-40 h-full object-cover"
                            />  
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed mb-6">
                            Transformando a comunicação empresarial com inteligência e eficiência.
                        </p>
                        
                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <a href="mailto:support@flow2work.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors group">
                                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                sac@flow2work.com
                            </a>
                            <p className="text-xs text-gray-500">Resposta em até 72 horas</p>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-xs text-gray-500"
                        >
                            © 2026 Flow2work. Todos os direitos reservados. • Todos os sistemas operacionais • Última atualização: há 2 horas
                        </motion.p>
                        <div className="flex justify-end gap-4 text-xs text-gray-500">
                            <a href="#" className="hover:text-gray-300 transition-colors">
                                Status do Sistema
                            </a>
                            <span>•</span>
                            <a href="#" className="hover:text-gray-300 transition-colors">
                                Contato: support@flow2work.com
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
