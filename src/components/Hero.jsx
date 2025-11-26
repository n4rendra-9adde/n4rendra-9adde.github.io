import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload, FaCloud, FaLock, FaShieldAlt, FaCode, FaServer, FaKey, FaTerminal } from 'react-icons/fa';

const Hero = () => {
    // Floating symbols configuration
    const floatingSymbols = [
        // Cloud symbols
        { Icon: FaCloud, delay: 0, duration: 20, x: '10%', y: '20%', size: 'text-4xl', color: 'text-neon-cyan/20' },
        { Icon: FaCloud, delay: 5, duration: 25, x: '80%', y: '15%', size: 'text-3xl', color: 'text-neon-cyan/15' },
        { Icon: FaCloud, delay: 10, duration: 30, x: '60%', y: '70%', size: 'text-5xl', color: 'text-neon-cyan/10' },
        { Icon: FaCloud, delay: 3, duration: 22, x: '25%', y: '80%', size: 'text-3xl', color: 'text-neon-cyan/20' },

        // Security symbols
        { Icon: FaLock, delay: 2, duration: 18, x: '15%', y: '40%', size: 'text-3xl', color: 'text-neon-green/20' },
        { Icon: FaShieldAlt, delay: 7, duration: 24, x: '85%', y: '50%', size: 'text-4xl', color: 'text-neon-green/15' },
        { Icon: FaKey, delay: 4, duration: 21, x: '70%', y: '30%', size: 'text-2xl', color: 'text-neon-green/25' },
        { Icon: FaLock, delay: 9, duration: 26, x: '40%', y: '10%', size: 'text-3xl', color: 'text-neon-green/15' },
        { Icon: FaShieldAlt, delay: 1, duration: 19, x: '90%', y: '80%', size: 'text-3xl', color: 'text-neon-green/20' },

        // Coding symbols
        { Icon: FaCode, delay: 6, duration: 23, x: '30%', y: '60%', size: 'text-3xl', color: 'text-purple-400/20' },
        { Icon: FaTerminal, delay: 8, duration: 27, x: '75%', y: '45%', size: 'text-4xl', color: 'text-purple-400/15' },
        { Icon: FaServer, delay: 11, duration: 20, x: '50%', y: '25%', size: 'text-3xl', color: 'text-purple-400/20' },
        { Icon: FaCode, delay: 3.5, duration: 28, x: '20%', y: '90%', size: 'text-2xl', color: 'text-purple-400/25' },
        { Icon: FaTerminal, delay: 5.5, duration: 22, x: '95%', y: '35%', size: 'text-3xl', color: 'text-purple-400/15' },
    ];

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Floating Background Symbols */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {floatingSymbols.map((symbol, index) => (
                    <motion.div
                        key={index}
                        className={`absolute ${symbol.size} ${symbol.color}`}
                        style={{ left: symbol.x, top: symbol.y }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 15, 0],
                            rotate: [0, 5, -5, 0],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: symbol.duration,
                            repeat: Infinity,
                            delay: symbol.delay,
                            ease: "easeInOut",
                        }}
                    >
                        <symbol.Icon />
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12 z-10">
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-neon-cyan font-mono mb-2 tracking-widest">SYSTEM_INIT_USER:</h2>
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white glitch-text" data-text="Narendra Gadde">
                            Narendra Gadde
                        </h1>

                        <div className="text-xl md:text-2xl text-gray-400 font-mono mb-6 h-8">
                            <span>&gt; </span>
                            <span className="text-neon-green">
                                <Typewriter
                                    words={['Cybersecurity Pro', 'Cloud Security Enthusiast', 'Network Automator', 'CEH Certified']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </div>

                        <p className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed border-l-2 border-neon-cyan pl-4">
                            Dedicated to securing modern cloud environments.
                            <br />
                            <span className="text-neon-cyan text-sm">Target: Azure & AWS Security Roles</span>
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a href="https://drive.google.com/file/d/1dG1efIMCXis36mIrWj4pzGerm07lqzAD/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-neon-cyan border border-neon-cyan text-black font-bold font-mono hover:bg-transparent hover:text-neon-cyan transition-all duration-300 uppercase tracking-widest flex items-center gap-2">
                                <FaDownload /> Download Resume
                            </a>
                            <a href="#projects" className="px-8 py-3 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan font-mono hover:bg-neon-cyan hover:text-black transition-all duration-300 uppercase tracking-widest">
                                View Work
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 border-2 border-neon-cyan rounded-full animate-pulse-slow"></div>
                        <div className="absolute inset-2 border border-neon-green rounded-full opacity-50"></div>
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-[0_0_30px_rgba(0,243,255,0.3)]">
                            <img src="/profile.jpg" alt="Narendra Gadde" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
