import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image"

export default function Header() {

    return (
        <header className="bg-background-bold/80 fixed z-50 w-full h-16 lg:h-[80px] shadow-lg  backdrop-blur-lg">
            <div className="w-full h-full max-w-5xl mx-auto flex justify-between items-center px-3.5 lg:px-0">
                <Link
                    href={"/"}>
                    <Image
                        src={"/logo.png"}
                        width={90}
                        height={50}
                        className="w-[65px] h-auto lg:w-[90px]"
                        alt="Logo do site"
                    />
                </Link>
                <nav>
                    <ul className="flex gap-8 lg:gap-12">
                        <li>
                            <Link href={"https://oiviana.vercel.app/"}
                                className="font-jetbrains hover:text-green-main transition-colors"
                            >
                                Sobre mim
                            </Link>
                        </li>
                        <li className="flex lg:hidden">
                            <Link href={"https://www.linkedin.com/in/lucasviana80/"}

                                className="font-jetbrains hover:text-green-main transition-colors"
                            >
                                <FaLinkedin
                                    className="text-white-main mt-0.5"
                                    size={22}
                                />
                            </Link>
                        </li>
                        <li className="hidden lg:flex">
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