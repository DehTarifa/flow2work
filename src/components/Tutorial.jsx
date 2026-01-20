import { Container } from './ui/Container';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowDown } from 'lucide-react';
import { useState } from 'react';

export function Tutorial() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="relative isolate overflow-hidden bg-[#0A0A0A] py-24 lg:py-32">
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
                    className="mx-auto max-w-3xl text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        Veja como funciona o{' '}
                        <span className="text-primary">Flow2work</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-400 leading-relaxed">
                        Assista a uma demonstração completa e veja como nossa plataforma pode transformar o atendimento da sua empresa em questão de minutos.
                    </p>
                </motion.div>

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative mx-auto max-w-5xl"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-gray-800 to-gray-900 aspect-video">
                        {/* Video ou Imagem */}
                        {isPlaying ? (
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                title="Flow2work Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <>
                                {/* Thumbnail/Placeholder */}
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage: 'url(/video-thumbnail.jpg)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                />
                                
                                {/* Overlay escuro */}
                                <div className="absolute inset-0 bg-black/40" />
                                
                                {/* Play Button */}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsPlaying(true)}
                                    className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                                >
                                    <div className="relative">
                                        {/* Pulse animation */}
                                        <div className="absolute inset-0 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors animate-pulse" style={{ width: '80px', height: '80px' }} />
                                        
                                        {/* Play button background */}
                                        <div className="relative w-20 h-18 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary/90 transition-colors shadow-2xl">
                                            <PlayCircle className="w-10 h-10 text-white fill-white" />
                                        </div>
                                    </div>
                                </motion.button>
                            </>
                        )}
                    </div>

                    {/* Decorative glow */}
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-blue-500 opacity-0 group-hover:opacity-20 blur transition duration-1000 -z-10" />
                </motion.div>

            </Container>
        </div>
    );
}
