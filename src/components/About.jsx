import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

export function About() {
    return (
        <Section className="bg-white text-gray-900 border-t border-gray-100">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-primary font-semibold mb-2">Sobre o Flow2work</h2>
                        <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                            A evolução do atendimento via WhatsApp
                        </p>
                        <p className="text-lg leading-8 text-gray-600">
                            O Flow2work não é apenas um chatbot. É uma plataforma completa de gestão de conversas que transforma o WhatsApp em um canal de vendas e suporte profissional, organizado e escalável para empresas de todos os tamanhos.
                        </p>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
