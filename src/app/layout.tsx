import type { Metadata } from "next";
import { Lora, JetBrains_Mono, Bitter, Playfair_Display, Oswald, Raleway } from "next/font/google";
import "./globals.css";


const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jet",
  subsets: ["latin"],
});

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Viana Archives",
  description: "Desenvolvedor full-stack",
  openGraph: {
    description: "Desenvolvedor full-stack",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${lora.variable} ${jetbrains.variable} ${bitter.variable}  ${playfair.variable} ${oswald.variable}  ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
