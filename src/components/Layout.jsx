import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [init, setInit] = useState(false);
    const location = useLocation();

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const navLinks = [
        { name: 'Home', path: '#hero' },
        { name: 'About', path: '#about' },
        { name: 'Experience', path: '#experience' },
        { name: 'Skills', path: '#skills' },
        { name: 'Projects', path: '#projects' },
        { name: 'Blog', path: '#blog' },
        { name: 'Contact', path: '#contact' },
    ];

    const handleNavClick = (e, path) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const id = path.substring(1);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Global Particle Background */}
            {init && (
                <Particles
                    id="tsparticles-global"
                    options={{
                        fullScreen: { enable: false },
                        background: { color: { value: "transparent" } },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: { enable: true, mode: "push" },
                                onHover: { enable: true, mode: "repulse" },
                                resize: true,
                            },
                            modes: {
                                push: { quantity: 4 },
                                repulse: { distance: 100, duration: 0.4 },
                            },
                        },
                        particles: {
                            color: { value: ["#00f3ff", "#0aff00", "#ffffff"] },
                            links: {
                                color: "#00f3ff",
                                distance: 150,
                                enable: true,
                                opacity: 0.3,
                                width: 1,
                            },
                            collisions: { enable: true },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: { default: "bounce" },
                                random: false,
                                speed: 1.5,
                                straight: false,
                            },
                            number: {
                                density: { enable: true, area: 800 },
                                value: 80,
                            },
                            opacity: { value: 0.6 },
                            shape: {
                                type: ["circle", "triangle", "edge"],
                            },
                            size: { value: { min: 3, max: 7 } },
                        },
                        detectRetina: true,
                    }}
                    className="fixed inset-0 -z-10"
                />
            )}

            {/* Scanline Overlay */}
            <div className="scanlines"></div>

            <header className="fixed w-full top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-neon-cyan/20">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="#" onClick={(e) => handleNavClick(e, '#hero')} className="text-2xl font-bold font-mono text-neon-cyan tracking-tighter hover:text-neon-green transition-colors">
                        &lt;NG/&gt;
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={(e) => handleNavClick(e, link.path)}
                                className="font-mono text-sm text-gray-400 hover:text-neon-cyan transition-colors uppercase tracking-widest cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-neon-cyan p-2">
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="md:hidden overflow-hidden bg-dark-bg border-b border-neon-cyan/20"
                        >
                            <div className="flex flex-col p-4 gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.path}
                                        onClick={(e) => handleNavClick(e, link.path)}
                                        className="font-mono text-gray-300 hover:text-neon-cyan"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </header>

            <main className="flex-grow pt-20">
                {children}
            </main>

            <footer className="py-8 border-t border-neon-cyan/20 bg-dark-bg/50 mt-auto relative z-10">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 font-mono text-sm">
                        &copy; {new Date().getFullYear()} Narendra Gadde. <span className="text-neon-cyan">System Secure.</span>
                    </p>
                    <div className="flex gap-6">
                        <a href="https://linkedin.com/in/narendrag18" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-400 hover:text-neon-cyan transition-colors"><FaLinkedin /></a>
                        <a href="https://github.com/n4rendra-9adde" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-400 hover:text-neon-cyan transition-colors"><FaGithub /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
