import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaGraduationCap, FaCertificate } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
                >
                    <span className="text-neon-cyan">&lt;</span> About_System <span className="text-neon-cyan">/&gt;</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Terminal Window */}
                    <div className="bg-card-bg border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
                        {/* Terminal Header */}
                        <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-800">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-gray-500 font-mono text-xs">user@narendra-portfolio:~</div>
                            <div className="w-16"></div>
                        </div>

                        {/* Terminal Content */}
                        <div className="p-6 md:p-8 font-mono text-sm md:text-base">
                            <div className="mb-6">
                                <span className="text-neon-green">user@narendra-portfolio:~$</span> <span className="text-white">cat about_me.txt</span>
                            </div>

                            <p className="text-gray-300 mb-8 leading-relaxed">
                                I am a highly driven <span className="text-neon-cyan">Cybersecurity enthusiast</span> with two years of hands-on experience in <span className="text-neon-green">Networking and Network Automation</span>, dedicated to securing modern cloud environments.
                                I am particularly passionate about <span className="text-neon-cyan">Cloud Security</span>, holding foundational and specialized certifications including <span className="text-purple-400">Azure AZ-900</span> and <span className="text-purple-400">SC-200</span>, alongside the <span className="text-neon-green">Certified Ethical Hacker (CEH)</span> designation from EC-Council.
                                Currently advancing my expertise through a Master's in Cybersecurity, my professional goal is to transition fully into a <span className="text-neon-cyan font-bold">Cloud Security role within Azure or AWS</span>.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <div className="mb-2">
                                        <span className="text-neon-green">user@narendra-portfolio:~$</span> <span className="text-white">ls ./education</span>
                                    </div>
                                    <ul className="space-y-4 text-gray-300">
                                        <li className="flex items-start gap-3">
                                            <FaGraduationCap className="text-neon-cyan mt-1" />
                                            <div>
                                                <div className="text-white font-bold">Masters in Cybersecurity</div>
                                                <div className="text-gray-500 text-xs">RACE, Reva University</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaGraduationCap className="text-neon-cyan mt-1" />
                                            <div>
                                                <div className="text-white font-bold">BE in Electronics & Comm.</div>
                                                <div className="text-gray-500 text-xs">SDM Institute of Technology</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="mb-2">
                                        <span className="text-neon-green">user@narendra-portfolio:~$</span> <span className="text-white">check_certs --list</span>
                                    </div>
                                    <ul className="space-y-4 text-gray-300">
                                        <li className="flex items-start gap-3">
                                            <FaCertificate className="text-neon-green mt-1" />
                                            <div>
                                                <div className="text-white font-bold">CEH v13</div>
                                                <div className="text-gray-500 text-xs">Certified Ethical Hacker</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaCertificate className="text-neon-cyan mt-1" />
                                            <div>
                                                <div className="text-white font-bold">Azure SC-200</div>
                                                <div className="text-gray-500 text-xs">Security Operations Analyst</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaCertificate className="text-neon-cyan mt-1" />
                                            <div>
                                                <div className="text-white font-bold">Azure AZ-900</div>
                                                <div className="text-gray-500 text-xs">Azure Fundamentals</div>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaCertificate className="text-neon-cyan mt-1" />
                                            <div>
                                                <div className="text-white font-bold">Oracle Cloud Infrastructure</div>
                                                <div className="text-gray-500 text-xs">Certified Security Professional</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 animate-pulse">
                                <span className="text-neon-green">user@narendra-portfolio:~$</span> <span className="inline-block w-2 h-4 bg-neon-green align-middle"></span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
