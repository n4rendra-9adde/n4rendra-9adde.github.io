import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaShieldAlt, FaCode, FaNetworkWired, FaTools } from 'react-icons/fa';

const skillCategories = [
    {
        title: 'Cloud Security',
        icon: <FaCloud />,
        skills: ['Azure Firewall', 'Microsoft Sentinel', 'Security Center', 'Entra ID', 'ADFS', 'PTA']
    },
    {
        title: 'Cyber Tools',
        icon: <FaShieldAlt />,
        skills: ['Burp Suite', 'Qualys', 'Nessus', 'Nmap', 'Wireshark', 'Metasploit', 'Defender']
    },
    {
        title: 'Scripting',
        icon: <FaCode />,
        skills: ['Python', 'Bash', 'PowerShell', 'C']
    },
    {
        title: 'Networking',
        icon: <FaNetworkWired />,
        skills: ['VLANs', 'DHCP', 'Routing', 'Switching', 'DWDM']
    },
    {
        title: 'Operations',
        icon: <FaTools />,
        skills: ['Postman', 'JIRA', 'BMC Remedy', 'GCP']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(10,10,10,1)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
                >
                    <span className="text-neon-cyan">&lt;</span> Skill_Matrix <span className="text-neon-cyan">/&gt;</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-card-bg/40 backdrop-blur-md border border-gray-800 p-6 rounded-xl hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,243,255,0.1)] transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-lg bg-neon-cyan/10 text-neon-cyan group-hover:bg-neon-cyan group-hover:text-black transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white tracking-wide">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-mono rounded border border-gray-700 text-gray-300 group-hover:border-neon-cyan/30 group-hover:text-neon-cyan transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
