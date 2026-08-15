import React from 'react';
import { motion } from 'framer-motion';
import { Quote, CheckCircle2, MessageSquareQuote, Star } from 'lucide-react';
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
    },
    {
        name: 'Nachiket Galande',
        role: 'Full Stack Developer @ Accenture',
        relation: "Aditya's Teammate @ AB InBev",
        avatarText: 'NG',
        text: "Aditya and I worked together at AB InBev and he was one of the most dependable people on the team. He has a good eye for detail, whether he's building out a UI or designing how data flows through the system, and the work he delivers is always clean and thought through. His code reviews were genuinely useful, the kind where you walk away having actually learned something rather than just addressed a comment. In sprint planning he had a good sense of what was realistic and what wasn't, and was proactive about flagging scope concerns early before they became problems mid-sprint. Beyond the technical side, he's just easy to work with. Highly recommend him."
    }
];

const TestimonialsSection = () => {
    return (
        <section id="recommendations" className="w-full">
            <GlassCard>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-sky-100">
                    <div>
                        <div className="flex items-center gap-2 text-sky-600 font-semibold text-xs uppercase tracking-wider mb-1">
                            <MessageSquareQuote size={14} /> Peer Endorsements
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Manager & Peer Recommendations</h2>
                        <SketchUnderline className="w-56 text-sky-400" />
                    </div>
                    <span className="px-4 py-1.5 text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 rounded-full self-start md:self-auto shadow-sm flex items-center gap-1.5">
                        <CheckCircle2 size={14} className="text-emerald-500" /> LinkedIn Verified
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.name}
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white/90 border border-sky-100 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-lg shadow-sky-500/5 hover:shadow-xl hover:border-sky-300 transition-all relative overflow-hidden"
                        >
                            <div className="absolute top-4 right-4 text-sky-200 pointer-events-none">
                                <Quote size={48} className="opacity-40" />
                            </div>

                            <div>
                                <div className="flex items-center gap-3.5 mb-4 relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 text-white font-extrabold text-base flex items-center justify-center shadow-md shadow-sky-500/20 shrink-0">
                                        {testimonial.avatarText}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg leading-tight">{testimonial.name}</h3>
                                        <p className="text-xs text-sky-600 font-medium mt-0.5">{testimonial.relation}</p>
                                        <div className="flex items-center gap-1 text-amber-400 mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={12} fill="currentColor" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 font-normal italic relative z-10 bg-slate-50/60 p-4 rounded-2xl border border-slate-100">
                                    "{testimonial.text}"
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-xs font-semibold text-slate-500">{testimonial.role}</span>
                                <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-medium bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
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
