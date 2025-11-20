'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 px-4 pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src="/image/logo/Logo transparence.png"
              alt="Los Nachos Chipies"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            À <span className="text-primary-orange">Propos</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Découvrez l'histoire et la vision derrière Los Nachos Chipies
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 md:p-12 rounded-xl border-2 border-primary-orange/20 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-8 h-8 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
            </svg>
            <h2 className="text-3xl font-bold text-white">Notre <span className="text-primary-orange">Histoire</span></h2>
          </div>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Los Nachos Chipies est né de la passion d'une communauté de joueurs Minecraft qui rêvaient
              de créer une expérience RP unique et immersive. Fondé en 2024, notre serveur s'est rapidement
              démarqué par son approche innovante : des thèmes saisonniers qui transforment complètement
              l'univers du jeu.
            </p>
            <p>
              Chaque saison apporte son lot de nouveautés : nouvelles zones à explorer, quêtes exclusives,
              événements communautaires et mécaniques de jeu inédites. Cette approche garantit une expérience
              toujours fraîche et excitante pour nos joueurs.
            </p>
            <p>
              Aujourd'hui, Los Nachos Chipies compte une communauté active de plus de 100 joueurs passionnés
              qui participent quotidiennement à la création d'histoires mémorables. Notre équipe de modération
              dévouée veille à maintenir une ambiance conviviale et respectueuse pour tous.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 md:p-12 rounded-xl border-2 border-primary-orange/20 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-8 h-8 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
            </svg>
            <h2 className="text-3xl font-bold text-white">Notre <span className="text-primary-orange">Vision</span></h2>
          </div>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Nous croyons que le roleplay dans Minecraft doit être accessible, amusant et constamment
              renouvelé. Notre mission est de créer un espace où chaque joueur peut s'exprimer, développer
              son personnage et participer activement à l'évolution du serveur.
            </p>
            <p>
              Nous nous engageons à écouter notre communauté, à intégrer leurs suggestions et à créer
              ensemble l'expérience de jeu ultime. Chaque mise à jour, chaque événement, chaque nouvelle
              saison est le fruit d'une collaboration entre l'équipe et les joueurs.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white text-center mb-10">
            Nos <span className="text-primary-orange">Valeurs</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20 hover:border-primary-orange transition-all duration-300 text-center group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-16 h-16 mx-auto text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Communauté</h3>
              <p className="text-gray-400">
                Une communauté soudée et bienveillante où chacun trouve sa place
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20 hover:border-primary-orange transition-all duration-300 text-center group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-16 h-16 mx-auto text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-400">
                Toujours à la recherche de nouvelles idées pour améliorer l'expérience
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20 hover:border-primary-orange transition-all duration-300 text-center group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-16 h-16 mx-auto text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Qualité</h3>
              <p className="text-gray-400">
                Un serveur stable, performant et régulièrement mis à jour
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-10">
            <svg className="w-8 h-8 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
            <h2 className="text-4xl font-bold text-primary-orange text-center">L'Équipe</h2>
          </div>

          <p className="text-gray-300 text-lg text-center mb-12 max-w-3xl mx-auto">
            Notre équipe passionnée travaille sans relâche pour vous offrir la meilleure expérience
            de jeu possible. Rencontrez les personnes qui font vivre Los Nachos Chipies !
          </p>

          {/* Team Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Mathew - Développeur */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl border-2 border-primary-orange/20 hover:border-primary-orange transition-all duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/image/Staff/Mathew-Dev.png"
                  alt="Mathew - Développeur"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">Mathew</h3>
                  <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="inline-block bg-gradient-to-r from-primary-orange to-primary-orange-dark text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                  Développeur
                </span>
                <p className="text-gray-400 text-sm">
                  Créateur du launcher et responsable du développement technique du serveur
                </p>
              </div>
            </div>

            {/* Helyah - Community Manager */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl border-2 border-primary-orange/20 hover:border-primary-orange transition-all duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/image/Staff/Helyah-Communoty-manger.png"
                  alt="Helyah - Community Manager"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">Helyah</h3>
                  <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                </div>
                <span className="inline-block bg-gradient-to-r from-primary-orange to-primary-orange-dark text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                  Community Manager
                </span>
                <p className="text-gray-400 text-sm">
                  Gestionnaire de la communauté et organisateur d'événements pour les joueurs
                </p>
              </div>
            </div>

            {/* jj_boissonaulychee - Chargé du lore */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl border-2 border-primary-orange/20 hover:border-primary-orange transition-all duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/image/Staff/jj-Charge-du-lore.png"
                  alt="jj - Chargé du lore"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">jj</h3>
                  <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                  </svg>
                </div>
                <span className="inline-block bg-gradient-to-r from-primary-orange to-primary-orange-dark text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                  Chargé du lore
                </span>
                <p className="text-gray-400 text-sm">
                  Créateur et gardien de l'univers narratif du serveur
                </p>
              </div>
            </div>

            {/* redrobinwspleen - Chargé d'event */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl border-2 border-primary-orange/20 hover:border-primary-orange transition-all duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/image/Staff/redrobinwspleen-Charge-event.png"
                  alt="redrobinwspleen - Chargé d'event"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">redrobinwspleen</h3>
                  <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="inline-block bg-gradient-to-r from-primary-orange to-primary-orange-dark text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                  Chargé d'event
                </span>
                <p className="text-gray-400 text-sm">
                  Organisateur des événements et animations du serveur
                </p>
              </div>
            </div>

            {/* ssengagness - Modo */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl border-2 border-primary-orange/20 hover:border-primary-orange transition-all duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/image/Staff/ssengagness-Modo.png"
                  alt="ssengagness - Modérateur"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">ssengagness</h3>
                  <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="inline-block bg-gradient-to-r from-primary-orange to-primary-orange-dark text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                  Modérateur
                </span>
                <p className="text-gray-400 text-sm">
                  Veille au bon respect des règles et à l'ambiance conviviale
                </p>
              </div>
            </div>

            {/* wi_st3ria - Chargé du lore */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-xl border-2 border-primary-orange/20 hover:border-primary-orange transition-all duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/image/Staff/wi_st3ria-Charge-du-lore.jpeg"
                  alt="wi_st3ria - Chargé du lore"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">wi_st3ria</h3>
                  <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                  </svg>
                </div>
                <span className="inline-block bg-gradient-to-r from-primary-orange to-primary-orange-dark text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                  Chargé du lore
                </span>
                <p className="text-gray-400 text-sm">
                  Créateur et gardien de l'univers narratif du serveur
                </p>
              </div>
            </div>
          </div>

          {/* Recrutement */}
          <div className="text-center bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20">
            <svg className="w-12 h-12 mx-auto mb-4 text-primary-yellow" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
            <p className="text-gray-400">
              Nous sommes toujours à la recherche de talents motivés pour rejoindre notre équipe.
              Rejoignez notre Discord pour en savoir plus !
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-12 rounded-xl border-2 border-primary-orange/20">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à Rejoindre l'<span className="text-primary-orange">Aventure</span> ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-orange to-primary-orange-dark hover:from-primary-yellow hover:to-primary-orange text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-110 glow-orange hover:glow-yellow shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
              Télécharger le Launcher
            </Link>
            <a
              href="https://discord.gg/KrtuE9DXjD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Rejoindre Discord
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-orange hover:text-primary-yellow transition-colors duration-300 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
