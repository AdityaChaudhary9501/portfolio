import React from 'react';
import { motion } from 'framer-motion';
import { Quote, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import GlassCard from './GlassCard';
import { SketchUnderline } from './SketchDoodleStroke';

const testimonials = [
    {
        name: 'Aninda Ghosh',
        role: 'MS CS @ NYU | Ex-Anheuser-Busch InBev',
        relation: "Aditya's Team Mentor & Manager @ AB InBev",
        avatarText: 'AG',
        text: "Aditya joined my team and project as a part of his internship program at AB InBev GCC Digital Solutions. He hit the ground running, surprising me with his tenacious nature towards problem-solving. He would often turn around the tasks at hand faster than expected. His desire to find a balance with learning the business processes while developing solutions was a big positive... These attributes enabled Aditya to successfully convert his internship to a full-time role within the team, where he took the lead for developing one of the most complex hyperautomations we built in the finance domain for account reconciliations."
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
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-amber-800/25">
                    <div>
                        <div className="flex items-center gap-2 text-amber-500/70 font-mono text-xs uppercase tracking-widest mb-1">
                            <MessageSquareQuote size={13} /> Peer Endorsements
                        </div>
                        <h2 className="font-sketch text-4xl md:text-5xl font-bold text-amber-100">Recommendations</h2>
                        <SketchUnderline className="w-48 text-amber-400" />
                    </div>
                    <span className="sketch-pill px-3 py-1.5 text-xs font-mono text-amber-300/70 self-start md:self-auto">LinkedIn Verified</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {testimonials.map((testimonial, index) => (
                        <motion.div key={testimonial.name}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.4 }}
                            className="bg-[#14120E]/70 border border-amber-800/25 rounded-sm p-6 flex flex-col justify-between hover:border-amber-600/40 transition-all"
                            style={{ boxShadow: '2px 2px 0 rgba(212,168,83,0.06)' }}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-sm bg-amber-900/30 border border-amber-700/40 flex items-center justify-center font-sketch font-bold text-sm text-amber-300 shrink-0">
                                            {testimonial.avatarText}
                                        </div>
                                        <div>
                                            <h3 className="font-sketch text-lg font-bold text-amber-100 leading-tight">{testimonial.name}</h3>
                                            <p className="text-[10px] text-amber-600/70 font-mono">{testimonial.relation}</p>
                                        </div>
                                    </div>
                                    <Quote size={26} className="text-amber-700/20 shrink-0" />
                                </div>

                                <p className="text-[#B8AF9A] text-xs md:text-sm leading-relaxed mb-6 italic font-normal">
                                    "{testimonial.text}"
                                </p>
                            </div>

                            <div className="pt-4 border-t border-amber-800/20 flex items-center justify-between">
                                <span className="text-[11px] font-sketch text-amber-400/80">{testimonial.role}</span>
                                <div className="flex items-center gap-1.5 text-amber-500/70 text-xs font-mono">
                                    <CheckCircle2 size={12} />
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
