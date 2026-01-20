import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

export function Hero() {
    return (
        <div className="relative isolate overflow-hidden" id='home' style={{
                backgroundImage: 'url(/hero-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>

            {/* Background Pattern - Dotted Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
            
            {/* Background Gradient Blob - Top Left */}
            <div
                className="absolute left-0 top-0 -z-10 h-[800px] w-[800px] opacity-20 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
                }}
            />
            
            {/* Background Gradient Blob - Bottom Right */}
            <div
                className="absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] opacity-10 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
                }}
            />

            <Container className="relative py-20 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
                    
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex flex-col justify-center space-y-8 lg:col-span-7"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex self-start"
                        >
                            <div className="rounded-full px-5 py-2 text-sm font-medium leading-6 bg-primary/10 text-primary ring-1 ring-primary/20 backdrop-blur-sm">
                                Gerencie seus atendimentos em um só lugar
                            </div>
                        </motion.div>

                        {/* Headline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-4"
                        >
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                                Organize todos os atendimentos do WhatsApp {' '}
                                <span className="text-primary block mt-2">
                                    em um único lugar
                                </span>
                            </h1>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg lg:text-xl text-gray-300 max-w-2xl"
                        >
                            Uma plataforma de gestão de conversas que centraliza atendimento, distribui mensagens entre equipes e dá visibilidade em tempo real do que está acontecendo no WhatsApp da sua empresa.
                        </motion.p>

                        {/* Feature Pills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-wrap gap-3"
                        >
                            {['Histórico completo,', 'Dashboard em tempo real', 'Gestão de equipes'].map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                                >
                                    <span className="text-primary">✓</span>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <Button 
                                variant="primary" 
                                className="gap-2 text-base px-8 py-6 group"
                            >
                                Entre em contato agora mesmo
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            
                            <Button 
                                variant="outline" 
                                className="gap-2 group border-white/10 hover:border-primary/50"
                            >
                                Confira nossos planos
                                <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </Button>
                        </motion.div>

                        {/* Trust Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="flex items-center gap-2 text-sm text-gray-500 pt-4"
                        >
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-slate-200 ring-2 ring-[#0A0A0A]" />
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-slate-300 ring-2 ring-[#0A0A0A]" />
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-slate-400 ring-2 ring-[#0A0A0A]" />

                            </div>
                            <span>
                                <strong className="text-white font-semibold tracking-wide">+30 empresas</strong> já economizam horas do seu dia a dia.
                            </span>
                        </motion.div>
                    </motion.div>

                </div>
            </Container>
        </div>
    );
}
