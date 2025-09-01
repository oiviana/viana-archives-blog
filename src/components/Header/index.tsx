import Link from "next/link";

export default function Header() {

    return (
        <header className="bg-background-bold/80 fixed z-50 w-full h-10 lg:h-[70px] shadow-lg  backdrop-blur-lg">
            <div className="w-full h-full max-w-5xl mx-auto flex justify-between items-center">
                <span>Logo</span>
                <nav>
                    <ul className="flex gap-12">
                        <li>
                            <Link href={"https://oiviana.vercel.app/"}
                            className="font-jetbrains hover:text-green-main transition-colors"
                            >
                                Sobre mim
                            </Link>
                        </li>
                            <li>
                            <Link href={"https://www.linkedin.com/in/lucasviana80/"}
                            className="font-jetbrains hover:text-green-main transition-colors"
                            >
                                Linkedin
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}