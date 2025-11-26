import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: 'Ericsson India Pvt. Ltd.',
        role: 'Automated Operation Engineer',
        period: 'Jul 2024 – Jul 2025',
        description: [
            'Built RPA bots using UiPath and Python for ITIL process automation.',
            'Conducted validation and SLA compliance tracking for automation tools.',
            'Supported cloud-integrated ITSM and CI/CD environments.'
        ]
    },
    {
        company: 'Atria Convergence Technologies Ltd.',
        role: 'NOC Engineer | DWDM Associate',
        period: 'Jul 2023 – Jun 2024',
        description: [
            'Managed Palo Alto firewalls, TACACS+, and AAA for secure access.',
            'Configured enterprise-grade switching and VLAN environments.',
            'Designed optical networks using DWDM and OTDR analysis.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
                >
                    <span className="text-neon-cyan">&lt;</span> Experience_Log <span className="text-neon-cyan">/&gt;</span>
                </motion.h2>

                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-neon-cyan via-neon-green to-transparent opacity-50 shadow-[0_0_10px_#00f3ff]"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            <div className="absolute left-[-6px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-dark-bg border-2 border-neon-cyan shadow-[0_0_10px_#00f3ff] z-10 mt-6"></div>

                            <div className="md:w-1/2"></div>

                            <div className="md:w-1/2 pl-8 md:pl-0 md:pr-0">
                                <div className={`p-6 rounded-xl border border-gray-800 bg-card-bg/50 backdrop-blur-sm hover:border-neon-cyan/50 transition-all duration-300 group ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                                    }`}>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">{exp.role}</h3>
                                        <span className="text-xs font-mono text-neon-green border border-neon-green/30 px-2 py-1 rounded">{exp.period}</span>
                                    </div>
                                    <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
                                    <ul className="space-y-2 text-gray-300 text-sm">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-neon-cyan mt-1">▹</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
