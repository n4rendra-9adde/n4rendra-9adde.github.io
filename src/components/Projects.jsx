import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';

const projects = [
    {
        title: 'Azure Secure Cloud Architecture',
        category: 'Cloud Security',
        description: 'Multi-VNet environment with NSGs, Azure Firewall (DNAT/App rules), VM segmentation, and compliance setup.',
        tags: ['Azure', 'Firewall', 'NSG']
    },
    {
        title: 'Azure AD Connect with PTA',
        category: 'Identity & Access',
        description: 'Seamless authentication with certificate-based trust and redundancy.',
        tags: ['Azure AD', 'PTA', 'Identity']
    },
    {
        title: 'Hybrid Identity Solution',
        category: 'Identity & Access',
        description: 'Secure SSO for Office 365 using load-balanced ADFS setup.',
        tags: ['ADFS', 'SSO', 'Office 365']
    },
    {
        title: 'Ethical Hacking & Pentesting',
        category: 'Security Testing',
        description: 'Conducted Nmap scans, packet analysis via Wireshark, and privilege escalation using Metasploit.',
        tags: ['Nmap', 'Wireshark', 'Metasploit']
    },
    {
        title: 'Linux & OS Security',
        category: 'System Security',
        description: 'File permissions, ACL management, encryption/decryption, and NFS configurations.',
        tags: ['Linux', 'ACL', 'Encryption']
    },
    {
        title: 'Hybrid Cloud Implementation',
        category: 'Cloud Infrastructure',
        description: 'Configured Azure–AWS S2S VPN and P2S connectivity for secure cross-cloud integration.',
        tags: ['Azure', 'AWS', 'VPN']
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
                >
                    <span className="text-neon-cyan">&lt;</span> Project_Database <span className="text-neon-cyan">/&gt;</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative bg-card-bg border border-gray-800 rounded-xl overflow-hidden hover:border-neon-cyan transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/10 to-transparent translate-y-[-100%] group-hover:animate-scanline pointer-events-none z-10"></div>

                            <div className="p-6 h-full flex flex-col relative z-20">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-mono text-neon-green border border-neon-green/30 px-2 py-1 rounded uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    <div className="flex gap-3 text-gray-400">
                                        <FaGithub className="hover:text-white cursor-pointer" />
                                        <FaExternalLinkAlt className="hover:text-white cursor-pointer" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-800">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-mono text-gray-500">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="https://github.com/n4rendra-9adde/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 border border-gray-600 text-gray-400 font-mono hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 uppercase tracking-widest"
                    >
                        View All Projects <FaArrowRight />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
