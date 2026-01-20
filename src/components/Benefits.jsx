import { Container } from './ui/Container';
import { MessageSquare, TrendingDown, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    {
        name: 'Organização total das conversas',
        description: 'Chega de mensagens perdidas, atendimentos duplicados ou informações espalhadas. Centralize todas as conversas do WhatsApp em um único painel e tenha histórico completo de cada atendimento, do início ao fim.',
        icon: MessageSquare,
        color: 'text-primary',
        bgColor: 'bg-primary/10',
    },
    {
        name: 'Redução de custos operacionais',
        description: 'Automatize processos, direcione atendimentos corretamente e elimine tarefas repetitivas. O Flow2work permite atender mais clientes com a mesma equipe, sem a necessidade de múltiplos números ou ferramentas paralelas.',
        icon: TrendingDown,
        color: 'text-blue-600',
        bgColor: 'bg-blue-100',
    },
    {
        name: 'Visibilidade e controle da equipe',
        description: 'Acompanhe em tempo real o volume de conversas, filas de atendimento e a atuação de cada colaborador. Tenha dados claros para tomar decisões, corrigir gargalos e elevar o padrão de qualidade do atendimento.',
        icon: Users,
        color: 'text-purple-600',
        bgColor: 'bg-purple-100',
    },
];

export function Benefits() {
    return (
        <div className="relative isolate overflow-hidden bg-white py-24 lg:py-32" id='features'>
            {/* Background Pattern - subtle */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
            
            {/* Background Gradient Blobs - subtle light colors */}
            <div
                className="absolute left-0 top-0 -z-10 h-[800px] w-[800px] opacity-5 blur-3xl"
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

            <Container className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Image/Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Mockup Container */}
                        <div>
                            <div>
                                {/* Placeholder melhorado */}
                                <div className="text-center">
                                    <img
                                        src="/content-img.png" 
                                        alt="Dashboard do Flow2work"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/10 blur-2xl opacity-40" />
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-blue-400/10 blur-2xl opacity-40" />
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col"
                    >
                        {/* Header */}
                        <div className="mb-8">
                            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-primary/10 text-primary ring-1 ring-primary/20 mb-6">
                                <span className="text-sm font-medium">Benefícios Exclusivos</span>
                            </div>
                            
                            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                                Tudo o que você precisa para{' '}
                                <span className="text-primary">escalar seu atendimento</span>
                            </h2>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Descubra todos os recursos que tornam o Flow2work a solução completa para gestão de conversas.
                            </p>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-6">
                            {benefits.map((benefit, index) => {
                                const IconComponent = benefit.icon;
                                
                                return (
                                    <motion.div
                                        key={benefit.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.15 }}
                                        className="group flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200"
                                    >
                                        {/* Icon */}
                                        <div className="flex-none pt-1">
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className={`flex h-12 w-12 items-center justify-center rounded-lg ${benefit.bgColor} group-hover:shadow-lg transition-all duration-300`}
                                            >
                                                <IconComponent className={`h-6 w-6 ${benefit.color}`} />
                                            </motion.div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                                {benefit.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                                                {benefit.description}
                                            </p>
                                        </div>

                                        {/* Arrow on hover */}
                                        <div className="flex-none opacity-0 group-hover:opacity-100 transition-opacity pt-1">
                                            <ArrowRight className="w-5 h-5 text-primary" />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* CTA Button */}
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
