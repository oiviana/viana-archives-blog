import Header from "@/components/Header"
import { Logo } from "@/components/Logo"
import Link from "next/link"
import { IoArrowBack } from "react-icons/io5"

type NotFoundContentProps = {
  title: string
  description: string
}

export default function NotFoundContent({ title, description }: NotFoundContentProps) {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center px-4 pb-16 pt-28">
        <section className="w-full max-w-[640px] text-center">
          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded border border-background-extralight bg-background-light/60">
            <Logo className="w-14" />
          </div>

          <span className="font-jetbrains text-base font-semibold uppercase tracking-[0.25em] text-green-main">
            404
          </span>
          <h1 className="mt-4 font-raleway text-4xl font-semibold text-white-main lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-[520px] font-lora text-lg leading-8 text-white-secondary">
            {description}
          </p>

          <Link
            href="/"
            className="mx-auto mt-9 inline-flex items-center justify-center gap-3 rounded border border-green-main bg-green-main px-5 py-3 font-jetbrains text-sm font-semibold text-background transition-colors hover:bg-transparent hover:text-green-main"
          >
            <IoArrowBack size={18} />
            Voltar para a página principal
          </Link>
        </section>
      </main>
    </>
  )
}
