import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Linkedin } from 'lucide-react';
import GlassCard from './GlassCard';

const testimonials = [
    {
        name: 'Aninda Ghosh',
        role: 'Actively Seeking Spring 2026 Internships | MS CS @NYU | Ex - Anheuser-Busch InBev',
        relation: 'April 3, 2025, Aninda was Aditya’s mentor',
        text: "Aditya joined my team and project as a part of his internship program at AB InBev GCC Digital Solutions. He hit the ground running, surprising me with his tenacious nature towards problem-solving. He would often turn around the tasks at hand faster than expected. His desire to find a balance with learning the business processes while developing it into the solutions was a big positive, something that really struck a positive chord with our stakeholders. His contributions to the technical and product discussions always offered a refreshing take on the problem at hand, constructively providing solutions while breaking down the problem fundamentally. These attributes enabled Aditya to successfully convert his internship to a full-time role of Junior Developer within the team, where he took the lead for helping us develop one of the most complex hyperautomations we built in the finance domain for account reconciliations. Aditya's commitment, innovative insights, and ability to navigate complex challenges make him an invaluable asset to any team and a driving force behind the project's success."
    },
    {
        name: 'Nishtha Ghosh',
        role: 'Product Manager | Driving Digital Transformation and Project Success',
        relation: "August 29, 2024, Nishtha was senior to Aditya but didn't manage Aditya directly",
        text: "Aditya has always displayed a phenomenal attitude of Can do, Can build. No problem has been too complex and his solution driven mindset is a great asset to any team or organization he is a part of. I have worked with him on my squad on an extremely complex financial tool and his keen insights in brining the vision to life using database architecture principals was a key contribution, while he also double hatted in ensuring the application was secure digitally. Aditya is a pleasure to have on any team and an invaluable asset"
    }
];

const HearFromCoaches = () => {
    return (
        <div className="py-20 px-4 max-w-5xl mx-auto">
            <GlassCard className="p-8 md:p-12">
                <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-widest">HEAR FROM COACHES</h2>

                <div className="space-y-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gray-900/40 border border-gray-700/50 rounded-xl p-8 relative"
                        >
                            <Quote className="absolute top-6 right-6 text-arsenal-gold/20" size={48} />

                            <div className="relative z-10">
                                <p className="text-gray-300 italic mb-6 leading-relaxed text-lg">
                                    "{testimonial.text}"
                                </p>

                                <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-gray-700/50 pt-4 mt-4">
                                    <div>
                                        <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                                        <p className="text-arsenal-red text-sm font-medium mb-1">{testimonial.role}</p>
                                        <p className="text-gray-500 text-xs">{testimonial.relation}</p>
                                    </div>
                                    <div className="mt-4 md:mt-0">
                                        <div className="flex items-center gap-2 text-blue-400 text-sm">
                                            <Linkedin size={16} />
                                            <span>Linked In Verified</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
};

export default HearFromCoaches;
