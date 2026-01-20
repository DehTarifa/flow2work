import { useState } from 'react';
import { Container } from './ui/Container';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { LayoutDashboard, Users, Zap, MessageSquare, ArrowRight } from 'lucide-react';

const tabs = [
    { 
        id: 'dashboard', 
        name: 'Dashboard', 
        icon: LayoutDashboard,
        description: 'Visualize todas as conversas em tempo real e acompanhe métricas importantes',
        image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1TfTJi.img?w=696&h=464&m=6&x=212&y=123&s=213&d=169' 
    },
    { 
        id: 'teams', 
        name: 'Gestão de Equipes', 
        icon: Users,
        description: 'Organize sua equipe, distribua atendimentos e acompanhe performance',
        image: 'Team Management Preview' 
    },
    { 
        id: 'automation', 
        name: 'Fluxos de Automação', 
        icon: Zap,
        description: 'Crie fluxos inteligentes para automatizar respostas e processos',
        image: 'Automation Builder Preview' 
    },
    { 
        id: 'history', 
        name: 'Histórico e Colaboração', 
        icon: MessageSquare,
        description: 'Mantenha registro completo de todas as conversas e colabore em tempo real',
        image: 'Chat History Preview' 
    },
];

export function InterfacePreview() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-24 lg:py-32 pt-0 lg:pt-0 ">
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
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-primary/10 text-primary ring-1 ring-primary/20 mb-6">
                        <span className="text-sm font-medium">Interface Poderosa</span>
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                        Mude a forma como você{' '}
                        <span className="text-primary">atende seus clientes</span>
                    </h2>
                    
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Interface intuitiva e poderosa que transforma o gerenciamento de conversas em uma experiência simples e eficiente.
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-16"
                >
                    {tabs.map((tab) => {
                        const IconComponent = tab.icon;
                        const isActive = activeTab.id === tab.id;
                        
                        return (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(tab)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={clsx(
                                    'inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300',
                                    isActive
                                        ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                        : 'bg-white text-gray-700 border border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                                )}
                            >
                                <IconComponent className="w-5 h-5" />
                                {tab.name}
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Tab Description */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-center mb-8"
                    >
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {activeTab.description}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* Preview Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="relative w-full max-w-6xl mx-auto aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                {/* Image Background */}
                                {activeTab.image.startsWith('http') ? (
                                    <img
                                        src={activeTab.image}
                                        alt={activeTab.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center flex-col gap-4">
                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20">
                                            {tabs.find(t => t.id === activeTab.id)?.icon && 
                                                (() => {
                                                    const IconComponent = tabs.find(t => t.id === activeTab.id).icon;
                                                    return <IconComponent className="w-10 h-10 text-primary" />;
                                                })()
                                            }
                                        </div>
                                        <p className="text-xl font-semibold text-gray-300">{activeTab.name}</p>
                                        <p className="text-sm text-gray-500">Prévia da Interface</p>
                                    </div>
                                )}

                                {/* Overlay gradient para melhor legibilidade */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Corner decorative element */}
                        <div className="absolute top-4 right-4 flex gap-2 z-10">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-blue-500 opacity-0 group-hover:opacity-10 blur transition duration-1000 -z-10" />
                </motion.div>

            </Container>
        </div>
    );
}
