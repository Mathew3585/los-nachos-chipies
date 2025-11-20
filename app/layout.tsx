import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Los Nachos Chipies - Serveur Minecraft RP",
  description: "Rejoignez Los Nachos Chipies, un serveur Minecraft RP avec des thèmes qui changent chaque saison. Plongez dans une aventure unique !",
  keywords: ["Minecraft", "Serveur RP", "Los Nachos Chipies", "Jeu de rôle", "Communauté"],
  icons: {
    icon: "/image/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
