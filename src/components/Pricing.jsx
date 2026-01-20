import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const plans = [
    {
        name: 'Basic',
        price: 'R$ 299',
        period: '/mês',
        description: 'Ideal para pequenas empresas',
        features: ['Até 5 usuários', '1 canal', 'WhatsApp Oficial', 'Mensagens automáticas', 'Fluxo de automação'],
        highlight: false,
        icon: '🚀',
    },
    {
        name: 'Pro Max',
        price: 'R$ 799',
        period: '/mês',
        description: 'O plano mais popular',
        features: ['Até 20 usuários', '3 canais', 'WhatsApp Oficial', 'Mensagens automáticas', 'Fluxo de automação'],
        highlight: true,
        icon: '⭐',
    },
    {
        name: 'Smart',
        price: 'R$ 1.499',
        period: '/mês',
        description: 'Para empresas em expansão',
        features: ['Até 30 usuários', '5 canais', 'Todos os recursos anteriores'],
        highlight: false,
        icon: '💎',
    },
    {
        name: 'Enterprise',
        price: 'Sob Consulta',
        period: '',
        description: 'Soluções personalizadas',
        features: ['Usuários sob medida', '10 canais', 'Consultoria estratégica', 'Planejamento de vendas', 'Acompanhamento mensal'],
        highlight: false,
        icon: '🏢',
    },
];

export function Pricing() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
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
        <div className="relative isolate overflow-hidden bg-[#0A0A0A] py-24 lg:py-32" id='pricing'>
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
                        <span className="text-sm font-medium">Planos Flexíveis</span>
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        Escolha o plano ideal para{' '}
                        <span className="text-primary">o seu negócio</span>
                    </h2>
                    
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Planos escaláveis que crescem com sua empresa. Sem compromissos de longo prazo, cancele quando quiser.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1 lg:gap-1 items-stretch"
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            variants={cardVariants}
                            className={clsx(
                                'group relative flex flex-col rounded-2xl border backdrop-blur-sm transition-all duration-300',
                                plan.highlight
                                    ? 'lg:row-span-2 xl:row-auto bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-primary/50 shadow-2xl shadow-primary/20 hover:shadow-primary/30 hover:border-primary lg:scale-100'
                                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                            )}
                        >
                            {/* Badge para plano destaque */}
                            {plan.highlight && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                                >
                                    <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                                        Mais Popular
                                    </div>
                                </motion.div>
                            )}

                            <div className={clsx(
                                'flex flex-col h-full',
                                plan.highlight ? 'p-8 lg:p-10 lg:pt-12' : 'p-8 lg:p-10'
                            )}>
                                {/* Plan Icon & Name */}
                                <div className="mb-8">
                                    <div className="text-4xl mb-4">{plan.icon}</div>
                                    <h3 className="text-4xl font-bold text-white mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className={clsx(
                                        'text-sm leading-relaxed mb-4',
                                        plan.highlight ? 'text-gray-300' : 'text-gray-400'
                                    )}>
                                        {plan.description}
                                    </p>
                                </div>

                                {/* Pricing */}
                                <div className="mb-8">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl lg:text-4xl font-bold text-white">
                                            {plan.price}
                                        </span>
                                        {plan.period && (
                                            <span className="text-gray-400 text-sm font-medium">
                                                {plan.period}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Features List */}
                                <ul role="list" className="mb-8 space-y-4 flex-1">
                                    {plan.features.map((feature, idx) => (
                                        <motion.li
                                            key={feature}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-3"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.2 }}
                                                className="flex-none mt-1"
                                            >
                                                <Check className={clsx(
                                                    'w-5 h-5 flex-none',
                                                    plan.highlight ? 'text-primary' : 'text-primary/70'
                                                )} />
                                            </motion.div>
                                            <span className={clsx(
                                                'text-sm leading-relaxed',
                                                plan.highlight ? 'text-gray-200' : 'text-gray-400'
                                            )}>
                                                {feature}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="mt-auto"
                                >
                                    <Button
                                        variant={plan.highlight ? 'primary' : 'outline'}
                                        className={clsx(
                                            'w-full justify-center gap-2 group',
                                            plan.highlight && 'shadow-lg shadow-primary/50'
                                        )}
                                    >
                                        {plan.highlight ? 'Assinar Agora' : 'Começar Agora'}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </motion.div>

                                {/* Additional info */}
                                <p className="text-xs text-gray-500 text-center mt-4">
                                    Teste grátis por 7 dias. Sem cartão de crédito.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* FAQ / Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center max-w-2xl mx-auto"
                >
                    <p className="text-gray-400 mb-8">
                        Dúvidas sobre qual plano escolher?
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 text-primary font-semibold border border-primary/30 hover:border-primary/50 hover:bg-primary/20 transition-all duration-300 group"
                    >
                        Fale com nosso time de vendas
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>
            </Container>
        </div>
    );
}
