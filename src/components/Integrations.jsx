import { Container } from './ui/Container';
import { motion } from 'framer-motion';
import { Code2, Zap, ArrowRight } from 'lucide-react';

const integrations = [
    {
        id: 1,
        title: 'Integrações via API',
        description: 'Integre outras ferramentas ao Flow2work através de API. Conecte com seus sistemas favoritos e tenha muito mais funcionalidades.',
        icon: Code2,
        features: ['REST API', 'Webhooks', 'SDK JavaScript', 'Documentação completa'],
        color: 'from-blue-500/20 to-blue-500/5',
        iconColor: 'bg-blue-100',
    },
    {
        id: 2,
        title: 'IA com ChatGPT',
        description: 'Utilize o poder do ChatGPT para criar respostas inteligentes e personalizadas. Automatize atendimentos com inteligência artificial avançada.',
        icon: Zap,
        features: ['Respostas Inteligentes', 'Aprendizado contínuo', 'Personalização', 'Análise de sentimento'],
        color: 'from-purple-500/20 to-purple-500/5',
        iconColor: 'bg-purple-100',
    },
];

export function Integrations() {
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <div className="relative isolate overflow-hidden bg-white py-24 lg:py-32 pt-0 lg:pt-0 " id='integrations'>
            {/* Background Pattern - subtle */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
            
            {/* Background Gradient Blobs */}
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
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-primary/10 text-primary ring-1 ring-primary/20 mb-6">
                        <span className="text-sm font-medium">Conectividade Total</span>
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                        Integre com suas{' '}
                        <span className="text-primary">ferramentas favoritas</span>
                    </h2>
                    
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                        Conecte o Flow2work com qualquer ferramenta através de APIs ou potencialize seu atendimento com inteligência artificial.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12"
                >
                    {integrations.map((integration) => {
                        const IconComponent = integration.icon;
                        
                        return (
                            <motion.div
                                key={integration.id}
                                variants={cardVariants}
                                className="group relative h-full"
                            >
                                {/* Card Background */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${integration.color} border border-gray-200 backdrop-blur-sm`} />

                                {/* Card Content */}
                                <div className="relative p-8 lg:p-10 h-full flex flex-col justify-between">
                                    {/* Icon Container */}
                                    <div>
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${integration.iconColor} group-hover:shadow-lg transition-all duration-300 mb-6`}>
                                            <IconComponent className="w-8 h-8 text-gray-900" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 ">
                                            {integration.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-700 leading-relaxed mb-8">
                                            {integration.description}
                                        </p>
                                    </div>

                                    {/* Features List */}
                                    <div className="mb-8">
                                        <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-4">
                                            Principais recursos
                                        </p>
                                        <ul className="space-y-3">
                                            {integration.features.map((feature, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="flex items-center gap-3 text-gray-700"
                                                >
                                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                                    <span className="text-sm">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>


                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </Container>
        </div>
    );
}
