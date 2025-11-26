import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
                >
                    <span className="text-neon-cyan">&lt;</span> Contact_Me <span className="text-neon-cyan">/&gt;</span>
                </motion.h2>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold mb-6 text-white">Get In Touch</h3>
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            I'm currently open to new opportunities in Cloud Security and Network Automation.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:narendragadde34@gmail.com" className="flex items-center gap-4 p-4 rounded-lg border border-gray-800 bg-card-bg hover:border-neon-cyan/50 transition-all group">
                                <div className="p-3 rounded-full bg-neon-cyan/10 text-neon-cyan group-hover:bg-neon-cyan group-hover:text-black transition-colors">
                                    <FaEnvelope size={20} />
                                </div>
                                <span className="font-mono text-gray-300 group-hover:text-white transition-colors">narendragadde34@gmail.com</span>
                            </a>

                            <a href="https://linkedin.com/in/narendrag18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg border border-gray-800 bg-card-bg hover:border-neon-cyan/50 transition-all group">
                                <div className="p-3 rounded-full bg-neon-cyan/10 text-neon-cyan group-hover:bg-neon-cyan group-hover:text-black transition-colors">
                                    <FaLinkedin size={20} />
                                </div>
                                <span className="font-mono text-gray-300 group-hover:text-white transition-colors">linkedin.com/in/narendrag18</span>
                            </a>

                            <a href="https://github.com/n4rendra-9adde" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg border border-gray-800 bg-card-bg hover:border-neon-cyan/50 transition-all group">
                                <div className="p-3 rounded-full bg-neon-cyan/10 text-neon-cyan group-hover:bg-neon-cyan group-hover:text-black transition-colors">
                                    <FaGithub size={20} />
                                </div>
                                <span className="font-mono text-gray-300 group-hover:text-white transition-colors">github.com/n4rendra-9adde</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                        action="https://formsubmit.co/narendragadde34@gmail.com"
                        method="POST"
                    >
                        {/* FormSubmit Configuration - Hidden Fields */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://n4rendra-9adde.github.io/#/success" />
                        <input type="hidden" name="_subject" value="New Contact Form Submission from Portfolio!" />
                        <input type="hidden" name="_template" value="table" />

                        <div>
                            <label htmlFor="name" className="block text-sm font-mono text-neon-cyan mb-2">var name =</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full p-3 rounded-lg bg-card-bg border border-gray-800 text-white focus:border-neon-cyan focus:outline-none transition-colors font-mono"
                                placeholder='"Your Name"'
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-mono text-neon-cyan mb-2">var email =</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full p-3 rounded-lg bg-card-bg border border-gray-800 text-white focus:border-neon-cyan focus:outline-none transition-colors font-mono"
                                placeholder='"your@email.com"'
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-mono text-neon-cyan mb-2">function message() {'{'}</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="w-full p-3 rounded-lg bg-card-bg border border-gray-800 text-white focus:border-neon-cyan focus:outline-none transition-colors font-mono resize-none"
                                placeholder='"Your message..."'
                            ></textarea>
                            <div className="text-right text-sm font-mono text-neon-cyan mt-1">{'}'}</div>
                        </div>
                        <button type="submit" className="w-full py-3 bg-neon-cyan text-black font-bold font-mono hover:bg-neon-green transition-colors uppercase tracking-widest">
                            Execute_Send()
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
