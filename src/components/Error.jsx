import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="mb-8"
                    >
                        <FaExclamationTriangle className="text-red-500 text-8xl mx-auto" />
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        <span className="text-neon-cyan">&lt;</span> Error_Occurred <span className="text-neon-cyan">/&gt;</span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-4 font-mono">
                        <span className="text-red-500">Oops!</span> Something went wrong.
                    </p>

                    <p className="text-gray-400 mb-8 leading-relaxed">
                        There was an issue sending your message. Please try again or contact me directly at{' '}
                        <a href="mailto:narendragadde34@gmail.com" className="text-neon-cyan hover:underline">
                            narendragadde34@gmail.com
                        </a>
                    </p>

                    <div className="flex gap-4 justify-center">
                        <Link
                            to="/#contact"
                            className="inline-block px-8 py-3 bg-neon-cyan text-black font-bold font-mono hover:bg-neon-green transition-colors uppercase tracking-widest"
                        >
                            Try_Again()
                        </Link>
                        <Link
                            to="/"
                            className="inline-block px-8 py-3 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan font-mono hover:bg-neon-cyan hover:text-black transition-all uppercase tracking-widest"
                        >
                            Return_Home()
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Error;
