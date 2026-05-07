import { motion } from 'framer-motion'
import { achievements } from '../data/portfolio'

const icons = ['🏆', '☕', '⚙️', '🔐']

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-3">Achievements</p>
        <h2 className="text-4xl font-bold text-white mb-12">Certifications & Awards</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-6 hover:border-blue-500/30 transition-colors duration-300"
            >
              <span className="text-2xl mb-4 block">{icons[i]}</span>
              <h3 className="text-white font-semibold text-base mb-2">{a.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{a.description}</p>
              <div className="flex flex-wrap gap-2">
                {a.tags.map(tag => (
                  <span key={tag} className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
