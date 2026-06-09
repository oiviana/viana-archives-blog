"use client"

import { useEffect, useRef, useState } from "react"
import { IoChevronUp } from "react-icons/io5"

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    function handleScroll() {
      const currentScrollY = window.scrollY
      const isPastSecondFold = currentScrollY > window.innerHeight * 2
      const isScrollingUp = currentScrollY < lastScrollY.current

      setIsVisible(isPastSecondFold && isScrollingUp)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      onClick={scrollToTop}
      className={`cursor-pointer fixed bottom-5 right-3 z-40 flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-green-main bg-background-light text-green-main shadow-[0_0_18px_rgba(137,216,58,0.24)] transition-all duration-300 hover:bg-green-main hover:text-background lg:bottom-8 lg:right-8 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <IoChevronUp aria-hidden="true" size={24} />
    </button>
  )
}
