export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mx-auto mt-16 w-full max-w-5xl border-t border-white/8 px-4 py-8 pb-0 text-center font-jetbrains text-sm text-white-secondary lg:mt-20">
      <span>
        {currentYear} © Viana Archives
      </span>
    </footer>
  )
}
