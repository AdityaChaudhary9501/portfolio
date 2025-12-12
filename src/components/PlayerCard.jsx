import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star } from 'lucide-react';

const PlayerCard = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-20 px-4">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="arsenal-card w-full max-w-2xl p-8 text-center"
            >
                {/* Card Header */}
                <div className="flex justify-between items-start mb-4">
                    <div className="text-left">
                        <div className="text-4xl font-bold text-white">2+</div>
                        <div className="text-sm text-white">YOE</div>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-bold">FULL STACK</div>
                        <div className="text-sm text-white">POS</div>
                    </div>
                </div>

                {/* Player Image */}
                <div className="relative mx-auto w-48 h-48 mb-6 bg-gray-800 rounded-full border-4 border-arsenal-gold overflow-hidden flex items-center justify-center">
                    <img src="./aditya.png" alt="Aditya Chaudhary" className="w-full h-full object-cover" />
                </div>

                {/* Player Info */}
                <h1 className="text-4xl font-bold mb-2 text-white tracking-wider">ADITYA</h1>
                <div className="flex items-center justify-center gap-2 mb-6 text-arsenal-gold">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                </div>

                {/* Key Stats Summary */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-left border-t border-gray-700 pt-6 px-4">
                    <div className="text-white font-bold tracking-wider text-lg">FRONTEND: 2+</div>
                    <div className="text-white font-bold tracking-wider text-lg">BACKEND: 2+</div>
                    <div className="text-white font-bold tracking-wider text-lg">DATABASE: 2+</div>
                    <div className="text-white font-bold tracking-wider text-lg">CLOUD: 2+</div>
                    <div className="text-white font-bold tracking-wider text-lg">AI / ML: 2+</div>
                    <div className="text-white font-bold tracking-wider text-lg">SECURITY: 2+</div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-700 flex justify-center gap-4">
                    <Shield className="w-8 h-8 text-white" />
                    <div className="text-sm text-gray-400 flex items-center">
                        INDIA <span className="ml-2 text-xl">🇮🇳</span>
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default PlayerCard;
