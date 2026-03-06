import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMessageSquare } from 'react-icons/fi'
import { TESTIMONIALS_CONTENT } from '../constants'

function TestimonialCard({ testimonial, index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="glass-card p-8 flex flex-col items-center text-center group h-full"
        >
            {/* Quote Icon */}
            <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center mb-6 text-teal-400 group-hover:scale-110 transition-transform duration-300">
                <FiMessageSquare size={20} />
            </div>

            {/* Quote Content */}
            <p className="text-white/80 text-base leading-relaxed mb-8 italic font-light relative flex-grow">
                "{testimonial.quote}"
            </p>

            {/* Author Section */}
            <div className="mt-auto pt-6 border-t border-white/5 w-full">
                <h4 className="text-white font-bold text-lg font-['Outfit'] mb-1">
                    {testimonial.author}
                </h4>
                <div className="text-teal-400 text-sm font-medium mb-1">
                    {testimonial.designation}
                </div>
                <div className="text-white/40 text-xs uppercase tracking-widest font-semibold">
                    {testimonial.company}
                </div>
            </div>
        </motion.div>
    )
}

export default function Testimonials() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section
            id="testimonials"
            className="section-padding relative"
            style={{
                background: 'linear-gradient(135deg, #060f1c 0%, #0d2137 50%, #071726 100%)',
            }}
        >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-6 flex flex-col gap-12 md:gap-20">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <span className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold rounded-full uppercase tracking-widest mb-5">
                        {TESTIMONIALS_CONTENT.badge}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] text-white mb-4">
                        {TESTIMONIALS_CONTENT.titleMain}
                        <span className="gradient-text">{TESTIMONIALS_CONTENT.titleHighlight}</span>
                    </h2>
                    {/* <p className="text-white/55 max-w-2xl mx-auto text-base">
                        {TESTIMONIALS_CONTENT.description}
                    </p> */}
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {TESTIMONIALS_CONTENT.testimonials.map((t, i) => (
                        <div key={i} className="h-full">
                            <TestimonialCard testimonial={t} index={i} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
