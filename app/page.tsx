'use client';

import VideoHeader from '@/components/VideoHeader';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      title: "Lancement de la Saison 1",
      date: "15 Décembre 2024",
      image: "/image/mockup/Lucid_Origin_A_group_of_Minecraft_players_standing_together_an_2.png",
      excerpt: "Découvrez le thème de notre première saison et les nouveautés qui vous attendent !",
      content: "La saison 1 de Los Nachos Chipies est officiellement lancée ! Plongez dans un univers médiéval fantastique avec des quêtes épiques, de nouvelles zones à explorer et des événements exclusifs. Rejoignez-nous pour cette aventure inoubliable !"
    },
    {
      id: 2,
      title: "Nouveau système d'économie",
      date: "10 Décembre 2024",
      image: "/image/mockup/Lucid_Origin_A_group_of_Minecraft_players_standing_together_an_2.png",
      excerpt: "Un système économique complet pour dynamiser vos échanges sur le serveur.",
      content: "Nous avons mis en place un nouveau système économique complet ! Gagnez des Nacho Coins en accomplissant des quêtes, en participant aux événements ou en commercant avec d'autres joueurs. Ouvrez votre propre boutique et devenez le marchand le plus prospère du serveur !"
    },
    {
      id: 3,
      title: "Event communautaire ce week-end",
      date: "5 Décembre 2024",
      image: "/image/mockup/Lucid_Origin_A_group_of_Minecraft_players_standing_together_an_2.png",
      excerpt: "Participez à notre grand événement communautaire avec des récompenses exclusives !",
      content: "Ce week-end, participez à notre grand événement PvP ! Formez des équipes, affrontez vos adversaires et remportez des récompenses exclusives. L'événement se déroulera samedi à 20h, ne le manquez pas !"
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Video Header Section */}
      <VideoHeader />

      {/* About Section */}
      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Bienvenue sur <span className="text-primary-orange">Los Nachos Chipies</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un serveur Minecraft RP unique avec des thèmes qui changent chaque saison
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Rejoignez un serveur Minecraft RP pas comme les autres. Chaque saison apporte
                un nouveau thème, de nouvelles quêtes et des événements exclusifs qui transforment
                complètement votre expérience de jeu.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Créez votre personnage, développez son histoire, nouez des alliances et
                participez à des aventures épiques qui marqueront l'histoire du serveur.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-gradient-to-br from-primary-orange/10 to-transparent border border-primary-orange/20 rounded-xl p-6">
                  <p className="text-4xl font-bold text-primary-yellow mb-2">100+</p>
                  <p className="text-gray-400">Joueurs actifs</p>
                </div>
                <div className="bg-gradient-to-br from-primary-orange/10 to-transparent border border-primary-orange/20 rounded-xl p-6">
                  <p className="text-4xl font-bold text-primary-yellow mb-2">24/7</p>
                  <p className="text-gray-400">En ligne</p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] w-full">
              <Image
                src="/image/mockup/Lucid_Origin_A_group_of_Minecraft_players_standing_together_an_2.png"
                alt="Serveur Minecraft"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-16">
            Ce qui nous rend <span className="text-primary-orange">unique</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-primary-orange/20 rounded-2xl p-8 hover:border-primary-orange/60 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/5 rounded-full blur-3xl group-hover:bg-primary-orange/10 transition-all"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-primary-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Roleplay Immersif</h3>
                <p className="text-gray-400 leading-relaxed">
                  Incarnez votre personnage dans un univers riche avec des règles équilibrées pour une expérience authentique
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-primary-orange/20 rounded-2xl p-8 hover:border-primary-orange/60 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/5 rounded-full blur-3xl group-hover:bg-primary-orange/10 transition-all"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-primary-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Thèmes Saisonniers</h3>
                <p className="text-gray-400 leading-relaxed">
                  Chaque saison apporte un thème unique avec quêtes exclusives et événements spéciaux
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-primary-orange/20 rounded-2xl p-8 hover:border-primary-orange/60 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/5 rounded-full blur-3xl group-hover:bg-primary-orange/10 transition-all"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-primary-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Communauté Active</h3>
                <p className="text-gray-400 leading-relaxed">
                  Une communauté passionnée et accueillante prête à partager de bons moments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-6">
            Feuille de <span className="text-primary-orange">route</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">
            Suivez l'avancement du développement de Los Nachos Chipies
          </p>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-orange via-primary-yellow to-primary-orange"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 - Completed */}
              <div className="relative flex items-center md:justify-start">
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-orange rounded-full border-4 border-[#0a0a0a] z-10 transform -translate-x-1/2"></div>
                <div className="ml-20 md:ml-0 md:w-5/12 md:pr-12 md:text-right">
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-primary-orange rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-2 md:justify-end">
                      <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">TERMINÉ</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Développement du Launcher</h3>
                    <p className="text-gray-400">Création du launcher personnalisé pour faciliter la connexion au serveur</p>
                  </div>
                </div>
              </div>

              {/* Item 2 - In Progress */}
              <div className="relative flex items-center md:justify-end">
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-yellow rounded-full border-4 border-[#0a0a0a] z-10 transform -translate-x-1/2 animate-pulse"></div>
                <div className="ml-20 md:ml-0 md:w-5/12 md:pl-12">
                  <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-primary-yellow rounded-xl p-6 animate-bump-timeline">
                    {/* Aura Effect */}
                    <div className="absolute -inset-4 animate-pulse-glow-timeline pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-radial from-primary-yellow/20 via-primary-yellow/10 to-transparent rounded-xl blur-xl"></div>
                    </div>
                    <div className="absolute -inset-3 animate-pulse-glow-delayed-timeline pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-radial from-primary-orange/15 via-primary-orange/5 to-transparent rounded-xl blur-lg"></div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-primary-yellow text-black text-xs font-bold px-3 py-1 rounded-full">EN COURS</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Choix du Thème Saison 1</h3>
                      <p className="text-gray-400">Sélection et création du thème unique pour la première saison du serveur</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3 - Upcoming */}
              <div className="relative flex items-center md:justify-start">
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gray-600 rounded-full border-4 border-[#0a0a0a] z-10 transform -translate-x-1/2"></div>
                <div className="ml-20 md:ml-0 md:w-5/12 md:pr-12 md:text-right">
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-gray-700 rounded-xl p-6 opacity-75">
                    <div className="flex items-center gap-2 mb-2 md:justify-end">
                      <span className="bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full">À VENIR</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Build du Serveur</h3>
                    <p className="text-gray-400">Construction du monde Minecraft avec le thème choisi</p>
                  </div>
                </div>
              </div>

              {/* Item 4 - Upcoming */}
              <div className="relative flex items-center md:justify-end">
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gray-600 rounded-full border-4 border-[#0a0a0a] z-10 transform -translate-x-1/2"></div>
                <div className="ml-20 md:ml-0 md:w-5/12 md:pl-12">
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-gray-700 rounded-xl p-6 opacity-75">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full">À VENIR</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Tests Fermés</h3>
                    <p className="text-gray-400">Phase de tests privés avec un groupe restreint de joueurs</p>
                  </div>
                </div>
              </div>

              {/* Item 5 - Upcoming */}
              <div className="relative flex items-center md:justify-start">
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gray-600 rounded-full border-4 border-[#0a0a0a] z-10 transform -translate-x-1/2"></div>
                <div className="ml-20 md:ml-0 md:w-5/12 md:pr-12 md:text-right">
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-gray-700 rounded-xl p-6 opacity-75">
                    <div className="flex items-center gap-2 mb-2 md:justify-end">
                      <span className="bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full">À VENIR</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Ouverture Publique</h3>
                    <p className="text-gray-400">Lancement officiel du serveur ouvert à tous !</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-4 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-16">
            Dernières <span className="text-primary-orange">actualités</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article.id)}
                className="group bg-[#0f0f0f] border border-gray-800 rounded-2xl overflow-hidden cursor-pointer hover:border-primary-orange/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-primary-orange text-sm mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-orange transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{article.excerpt}</p>
                  <span className="text-primary-orange font-semibold inline-flex items-center gap-2">
                    Lire la suite
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section with Background */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/image/JoinUs/jungle-lake.webp"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Rejoignez l'aventure !
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Suivez-nous sur nos réseaux sociaux et téléchargez notre launcher
          </p>

          {/* Social Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://discord.gg/KrtuE9DXjD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Discord
            </a>

            <a
              href="https://www.youtube.com/@LesChipiesNachosRP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#FF0000] hover:bg-[#CC0000] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>

            <a
              href="https://www.tiktok.com/@lesnachoschipies?lang=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white hover:bg-gray-200 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              TikTok
            </a>
          </div>

          {/* Main CTA */}
          <Link
            href="/download"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-orange to-primary-orange-dark hover:from-primary-yellow hover:to-primary-orange text-white text-xl font-bold px-12 py-5 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-2xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            TÉLÉCHARGER LE LAUNCHER
          </Link>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-[#1a1a1a] border border-gray-800 max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <Image
                src={articles.find(a => a.id === selectedArticle)?.image || ''}
                alt={articles.find(a => a.id === selectedArticle)?.title || ''}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <p className="text-primary-orange text-sm mb-2">
                {articles.find(a => a.id === selectedArticle)?.date}
              </p>
              <h2 className="text-4xl font-bold text-white mb-6">
                {articles.find(a => a.id === selectedArticle)?.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {articles.find(a => a.id === selectedArticle)?.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
