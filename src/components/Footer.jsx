export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E2E] py-8 px-6 text-center">
      <p className="text-slate-600 text-sm">
        © {new Date().getFullYear()} Milan Parajuli · Built with React & TailwindCSS
      </p>
    </footer>
  )
}
