import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Linkedin, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import GlassCard from './GlassCard';

const testimonials = [
    {
        name: 'Aninda Ghosh',
        role: 'MS CS @ NYU | Ex-Anheuser-Busch InBev',
        relation: 'Aditya’s Team Mentor & Manager @ AB InBev',
        avatarText: 'AG',
        text: "Aditya joined my team and project as a part of his internship program at AB InBev GCC Digital Solutions. He hit the ground running, surprising me with his tenacious nature towards problem-solving. He would often turn around the tasks at hand faster than expected. His desire to find a balance with learning the business processes while developing solutions was a big positive, something that really struck a positive chord with our stakeholders. His contributions to the technical and product discussions always offered a refreshing take on the problem at hand... These attributes enabled Aditya to successfully convert his internship to a full-time role within the team, where he took the lead for developing one of the most complex hyperautomations we built in the finance domain for account reconciliations."
    },
    {
        name: 'Nishtha Ghosh',
        role: 'Product Manager | Digital Transformation',
        relation: 'Senior Product Manager @ AB InBev Squad',
        avatarText: 'NG',
        text: "Aditya has always displayed a phenomenal attitude of 'Can do, Can build'. No problem has been too complex and his solution-driven mindset is a great asset to any team or organization he is a part of. I have worked with him on my squad on an extremely complex financial tool and his keen insights in bringing the vision to life using database architecture principles was a key contribution, while he also double-hatted in ensuring the application was secure digitally. Aditya is a pleasure to have on any team and an invaluable asset."
    }
];

const TestimonialsSection = () => {
    return (
        <section id="recommendations" className="py-12 px-4 max-w-5xl mx-auto w-full">
            <GlassCard className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
                    <div>
                        <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-1">
                            <MessageSquareQuote size={14} /> Peer Endorsements
                        </div>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                            Recommendations
                        </h2>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-full self-start md:self-auto border border-slate-700/60">
                        LinkedIn Verified Feedback
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.4 }}
                            className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-6 relative flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 p-0.5 shadow-md">
                                            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-mono font-bold text-xs text-indigo-300">
                                                {testimonial.avatarText}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-white leading-tight">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-xs text-slate-400 font-medium">
                                                {testimonial.relation}
                                            </p>
                                        </div>
                                    </div>
                                    <Quote size={28} className="text-indigo-500/20 shrink-0" />
                                </div>

                                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-normal italic">
                                    "{testimonial.text}"
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                                <span className="text-[11px] font-mono text-indigo-400 font-semibold">
                                    {testimonial.role}
                                </span>
                                <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-mono font-medium">
                                    <CheckCircle2 size={13} />
                                    <span>Verified</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </GlassCard>
        </section>
    );
};

export default TestimonialsSection;
