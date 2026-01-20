import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

export function Toast({ message, type = 'success', onClose }) {
    return (
        <AnimatePresence>
            {message && (
                <motion.div
                    initial={{ opacity: 0, y: 20, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 20, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    <div className={`rounded-lg px-6 py-4 shadow-lg border backdrop-blur-sm flex items-center gap-4 ${
                        type === 'success'
                            ? 'bg-green-500/10 border-green-500/30 text-green-100'
                            : 'bg-red-500/10 border-red-500/30 text-red-100'
                    }`}>
                        <div className={`flex-none ${
                            type === 'success'
                                ? 'text-green-400'
                                : 'text-red-400'
                        }`}>
                            {type === 'success' ? (
                                <Check className="w-6 h-6" />
                            ) : (
                                <X className="w-6 h-6" />
                            )}
                        </div>
                        
                        <div className="flex-1">
                            <p className="font-semibold text-sm">
                                {type === 'success' ? 'Inscrição realizada!' : 'Erro ao inscrever'}
                            </p>
                            <p className="text-xs opacity-90 mt-1">
                                {message}
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onClose}
                            className="flex-none opacity-70 hover:opacity-100 transition-opacity"
                        >
                            <X className="w-5 h-5" />
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
