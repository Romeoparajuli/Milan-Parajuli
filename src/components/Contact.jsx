import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
        <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          Open to full-time roles, freelance projects, and collaborations. If you're looking for a backend-focused full stack engineer who can contribute to production systems — let's talk.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Email', value: 'milan@example.com', href: 'mailto:milan@example.com' },
            { label: 'LinkedIn', value: 'linkedin.com/in/milan', href: 'https://linkedin.com' },
            { label: 'GitHub', value: 'github.com/Romeoparajuli', href: 'https://github.com/Romeoparajuli' },
          ].map(c => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="bg-[#111118] border border-[#1E1E2E] hover:border-blue-500/40 rounded-xl p-5 text-center transition-all duration-300 group"
            >
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{c.label}</p>
              <p className="text-slate-300 text-sm group-hover:text-blue-400 transition-colors duration-200">{c.value}</p>
            </a>
          ))}
        </div>

        <a
          href="mailto:milan@example.com"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded text-sm font-medium transition-all duration-200"
        >
          Send a Message →
        </a>

        <p className="text-slate-600 text-sm mt-6">Based in Nepal · Available Remotely</p>
      </motion.div>
    </section>
  )
}
