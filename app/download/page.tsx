'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaWindows } from 'react-icons/fa';

export default function DownloadPage() {
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
            Télécharger le <span className="text-primary-orange">Launcher</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Téléchargez notre launcher personnalisé pour rejoindre l'aventure Los Nachos Chipies
          </p>
        </div>

        {/* Download Card - Windows Only */}
        <div className="flex justify-center mb-16">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-10 rounded-xl border-2 border-primary-orange/30 hover:border-primary-orange transition-all duration-300 transform hover:scale-105 text-center max-w-md w-full">
            <FaWindows className="w-20 h-20 mx-auto mb-6 text-primary-orange" />
            <h3 className="text-3xl font-bold text-white mb-4">Windows</h3>
            <p className="text-gray-400 mb-8">Windows 10/11</p>
            <a
              href="/downloads/LosNachosChipies-Launcher.exe"
              download
              className="block w-full bg-gradient-to-r from-primary-orange to-primary-orange-dark hover:from-primary-yellow hover:to-primary-orange text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 glow-orange hover:glow-yellow shadow-lg text-lg"
            >
              Télécharger .exe
            </a>
            <p className="text-gray-500 text-sm mt-4">macOS et Linux bientôt disponibles</p>
          </div>
        </div>

        {/* Installation Instructions */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Guide d'<span className="text-primary-orange">Installation</span>
          </h2>
          <ol className="space-y-6 text-gray-300">
            <li className="flex items-start gap-4">
              <span className="bg-gradient-to-r from-primary-orange to-primary-orange-dark text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                1
              </span>
              <div>
                <p className="text-white font-semibold mb-1">Téléchargement</p>
                <p className="text-gray-400">Téléchargez le launcher correspondant à votre système d'exploitation</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-gradient-to-r from-primary-orange to-primary-orange-dark text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                2
              </span>
              <div>
                <p className="text-white font-semibold mb-1">Installation</p>
                <p className="text-gray-400">Lancez l'installateur et suivez les instructions à l'écran</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-gradient-to-r from-primary-orange to-primary-orange-dark text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                3
              </span>
              <div>
                <p className="text-white font-semibold mb-1">Connexion</p>
                <p className="text-gray-400">Connectez-vous avec votre compte Minecraft</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-gradient-to-r from-primary-orange to-primary-orange-dark text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                4
              </span>
              <div>
                <p className="text-white font-semibold mb-1">C'est parti !</p>
                <p className="text-gray-400">Cliquez sur "JOUER" et commencez votre aventure sur Los Nachos Chipies !</p>
              </div>
            </li>
          </ol>
        </div>

        {/* System Requirements */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20 mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">
            Configuration <span className="text-primary-orange">Requise</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-black/30 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-primary-orange mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
                Minimum
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li><strong className="text-white">OS:</strong> Windows 10</li>
                <li><strong className="text-white">Processeur:</strong> Intel Core i3 / AMD équivalent</li>
                <li><strong className="text-white">RAM:</strong> 4 GB</li>
                <li><strong className="text-white">GPU:</strong> Intégré</li>
                <li><strong className="text-white">Stockage:</strong> 2 GB disponible</li>
              </ul>
            </div>
            <div className="p-6 bg-black/30 rounded-lg border border-primary-orange/30">
              <h3 className="text-xl font-bold text-primary-yellow mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
                Recommandé
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li><strong className="text-white">OS:</strong> Windows 11</li>
                <li><strong className="text-white">Processeur:</strong> Intel Core i5 / AMD équivalent</li>
                <li><strong className="text-white">RAM:</strong> 8 GB</li>
                <li><strong className="text-white">GPU:</strong> Dédié (GTX 1050 / équivalent)</li>
                <li><strong className="text-white">Stockage:</strong> 4 GB disponible</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="text-center bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-12 rounded-xl border-2 border-primary-orange/20">
          <svg className="w-16 h-16 mx-auto mb-4 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
          </svg>
          <h2 className="text-3xl font-bold text-white mb-4">
            Besoin d'<span className="text-primary-orange">aide</span> ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Rejoignez notre Discord pour obtenir de l'aide de notre équipe et de la communauté
          </p>
          <a
            href="https://discord.gg/KrtuE9DXjD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Rejoindre le Discord
          </a>
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
