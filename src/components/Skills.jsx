import { motion } from 'framer-motion'
import { skills, learning } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-3">Skills</p>
        <h2 className="text-4xl font-bold text-white mb-12">Tech Stack</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#111118] border border-[#1E1E2E] rounded-xl p-5 hover:border-blue-500/40 transition-colors duration-300"
            >
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">{category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="text-slate-300 text-sm bg-[#0A0A0F] border border-[#1E1E2E] px-3 py-1 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#111118] border border-blue-500/20 rounded-xl p-5">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">Currently Learning</p>
          <div className="flex flex-wrap gap-2">
            {learning.map(item => (
              <span key={item} className="text-blue-300 text-sm bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md">
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
