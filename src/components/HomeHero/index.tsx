import Image from "next/image"

export default function HomeHero() {
  return (
    <section className="mx-auto mt-8 flex w-full max-w-5xl flex-col items-center gap-6 rounded  bg-background-light/40 p-5 lg:mt-4 lg:flex-row lg:gap-8 lg:p-7">
      <div className="rounded-full border-2 border-green-main bg-background p-1 shadow-[0_0_24px_rgba(137,216,58,0.22)]">
        <Image
          src="/hero.jpg"
          alt="Foto de Lucas Viana"
          width={176}
          height={176}
          priority
          className="aspect-square rounded-full object-cover"
        />
      </div>

      <div className="text-center lg:text-left">
        <span className="font-jetbrains text-sm font-semibold uppercase text-green-main">
          Viana Archives
        </span>
        <h1 className="mt-2 font-raleway text-2xl font-semibold text-white-main lg:text-3xl">
          Oi, eu sou Lucas Viana.
        </h1>
        <p className="mt-4 max-w-2xl font-lora text-lg leading-8 text-white-secondary">
          Escrevo sobre desenvolvimento, carreira e tecnologia de um jeito direto, com
          anotações práticas do que estudo, construo e aprendo no caminho.
        </p>
      </div>
    </section>
  )
}
