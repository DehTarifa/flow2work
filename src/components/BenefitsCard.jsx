import { Container } from './ui/Container';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Shield, KeyRound } from 'lucide-react';

export function BenefitsCard() {
    const benefits = [
        {
            id: 1,
            icon: Lock,
            title: 'Organização total das conversas',
            description: 'Chega de mensagens perdidas, atendimentos duplicados ou informações espalhadas. Centralize todas as conversas do WhatsApp em um único painel e tenha histórico completo de cada atendimento, do início ao fim.',
            color: 'from-primary/20 to-primary/5',
        },
        {
            id: 2,
            icon: Shield,
            title: 'Redução de custos operacionais',
            description: 'Automatize processos, direcione atendimentos corretamente e elimine tarefas repetitivas. O Flow2work permite atender mais clientes com a mesma equipe, sem a necessidade de múltiplos números ou ferramentas paralelas.',
            color: 'from-blue-500/20 to-blue-500/5',
        },
        {
            id: 3,
            icon: KeyRound,
            title: 'Visibilidade e controle da equipe',
            description: 'Acompanhe em tempo real o volume de conversas, filas de atendimento e a atuação de cada colaborador. Tenha dados claros para tomar decisões, corrigir gargalos e elevar o padrão de qualidade do atendimento.',
            color: 'from-purple-500/20 to-purple-500/5',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <div className="relative isolate overflow-hidden bg-[#0A0A0A] py-24 lg:py-32 pt-0 lg:pt-32" id='benefits'>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
            
            {/* Background Gradient Blobs */}
            <div
                className="absolute left-0 top-0 -z-10 h-[800px] w-[800px] opacity-20 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
                }}
            />
            
            <div
                className="absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] opacity-10 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
                }}
            />

            <Container className="relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-primary/10 text-primary ring-1 ring-primary/20 mb-6">
                        <span className="text-sm font-medium">Benefícios Exclusivos</span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6">
                        Descubra como o Flow2work transforma a forma como sua equipe gerencia conversas e atende clientes.
                    </h2>
                    
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {benefits.map((benefit) => {
                        const IconComponent = benefit.icon;
                        
                        return (
                            <motion.div
                                key={benefit.id}
                                variants={cardVariants}
                                className="group relative"
                            >
                                {/* Card Background */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.color} border border-white/5 backdrop-blur-sm`} />
                                
                                {/* Hover Border Glow */}
                                <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-zinc-50/10 transition-all duration-300" />

                                {/* Card Content */}
                                <div className="relative p-8 lg:p-10 h-full flex flex-col justify-between">
                                    {/* Icon Container */}
                                    <div className="mb-6">
                                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/10">
                                            <IconComponent className="w-7 h-7 text-white" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-4 ">
                                        {benefit.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                                        {benefit.description}
                                    </p>

                                    {/* CTA with Arrow */}
                                    <motion.a
                                        href="#"
                                        whileHover={{ x: 5 }}
                                        className="inline-flex items-center gap-2 text-white font-semibold"
                                    >
                                        Saiba mais
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
                                        </motion.div>
                                    </motion.a>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Container>
        </div>
    );
}
