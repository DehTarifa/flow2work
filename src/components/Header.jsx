import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Integrações', href: '#integrations' },
    { name: 'Planos', href: '#pricing' },
    { name: 'Contato', href: '#contact' },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    const handleNavClick = (href) => {
        setActiveLink(href);
        setMobileMenuOpen(false);
        // Scroll suave para a seção
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5">
            <Container className="py-0">
                <nav className="flex items-center justify-between h-20" aria-label="Global">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#home');
                        }}
                        className="flex items-center gap-2 group cursor-pointer mr-10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-xl font-bold text-white tracking-tight hidden sm:inline">
                            <img
                                src="/Brand.svg" 
                                alt="Dashboard do Flow2work"
                                className="w-40 h-full object-cover"
                            />  
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navigation.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                }}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className={clsx(
                                    'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer',
                                    activeLink === item.href
                                        ? 'text-primary'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                )}
                            >
                                {item.name}
                                {activeLink === item.href && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <motion.div
                        className="hidden lg:flex lg:flex-1 lg:justify-end"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button 
                            variant="primary"
                            className="gap-2"
                            onClick={() => handleNavClick('#pricing')}
                        >
                            Começar Grátis
                        </Button>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        type="button"
                        className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="sr-only">
                            {mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        </span>
                        <AnimatePresence mode="wait">
                            {mobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="h-6 w-6 text-white" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="h-6 w-6 text-white" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </nav>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden overflow-hidden border-t border-white/5"
                    >
                        <Container className="py-6">
                            <div className="space-y-2 mb-6">
                                {navigation.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.href);
                                        }}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className={clsx(
                                            'flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer',
                                            activeLink === item.href
                                                ? 'bg-primary/10 text-primary border border-primary/20'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        )}
                                    >
                                        <span className="font-medium">{item.name}</span>
                                        {activeLink === item.href && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="w-2 h-2 rounded-full bg-primary"
                                            />
                                        )}
                                    </motion.a>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35 }}
                                className="pt-6 border-t border-white/10"
                            >
                                <Button 
                                    variant="primary" 
                                    className="w-full justify-center"
                                    onClick={() => handleNavClick('#pricing')}
                                >
                                    Começar Grátis
                                </Button>
                            </motion.div>

                            {/* Mobile Menu Footer Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-gray-500"
                            >
                                <p>Teste grátis por 7 dias</p>
                                <p className="mt-2">Sem cartão de crédito necessário</p>
                            </motion.div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
