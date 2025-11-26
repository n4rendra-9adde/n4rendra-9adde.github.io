import React from 'react';
import { motion } from 'framer-motion';
import { FaMedium, FaArrowRight } from 'react-icons/fa';

const blogPosts = [
    {
        id: 1,
        title: 'Securing Azure Cloud Environments',
        excerpt: 'Best practices for implementing network security groups and firewalls in Azure.',
        date: 'Nov 15, 2025',
        readTime: '5 min read'
    },
    {
        id: 2,
        title: 'Automating Network Operations with Python',
        excerpt: 'How to use Python and UiPath to streamline ITIL processes and reduce manual effort.',
        date: 'Oct 28, 2025',
        readTime: '7 min read'
    },
    {
        id: 3,
        title: 'Understanding Zero Trust Architecture',
        excerpt: 'A deep dive into the principles of Zero Trust and how to apply them in modern enterprises.',
        date: 'Sep 10, 2025',
        readTime: '6 min read'
    }
];

const Blog = () => {
    return (
        <section id="blog" className="py-20 relative">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(10,10,10,1)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
                >
                    <span className="text-neon-cyan">&lt;</span> Security_Logs <span className="text-neon-cyan">/&gt;</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6 rounded-xl border border-gray-800 bg-card-bg hover:border-neon-green/50 transition-all cursor-pointer group"
                        >
                            <div className="flex justify-between items-center text-xs font-mono text-gray-500 mb-3">
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-green transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                {post.excerpt}
                            </p>
                            <span className="text-neon-green font-mono text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                Read_More <FaArrowRight size={12} />
                            </span>
                        </motion.article>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="https://medium.com/@narendragadde34"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 border border-gray-600 text-gray-400 font-mono hover:border-neon-green hover:text-neon-green transition-all duration-300 uppercase tracking-widest"
                    >
                        <FaMedium /> View All Articles
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Blog;
