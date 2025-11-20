'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 px-4 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <Image
              src="/image/logo/Logo transparence.png"
              alt="Los Nachos Chipies"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Conditions d'<span className="text-primary-orange">utilisation</span>
          </h1>
          <p className="text-gray-400">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              <h2 className="text-2xl font-bold text-white">1. Acceptation des conditions</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>
                En accédant et en utilisant le serveur Los Nachos Chipies (ci-après "le Serveur"), vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le Serveur.
              </p>
              <p>
                Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entreront en vigueur dès leur publication sur cette page. Il est de votre responsabilité de consulter régulièrement ces conditions.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
              <h2 className="text-2xl font-bold text-white">2. Utilisation du serveur</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p className="font-semibold text-white">Vous vous engagez à :</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Respecter toutes les règles du serveur disponibles dans la section Wiki</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Ne pas utiliser de logiciels tiers, hacks, mods non autorisés ou tout autre moyen de triche</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Respecter les autres joueurs et les membres du staff</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Ne pas partager de contenu illégal, offensant ou inapproprié</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Ne pas tenter de perturber le fonctionnement du serveur ou d'exploiter des failles</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
              </svg>
              <h2 className="text-2xl font-bold text-white">3. Compte utilisateur</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>
                Pour accéder au Serveur, vous devez disposer d'un compte Minecraft valide. Vous êtes responsable de la sécurité de votre compte et de toutes les activités qui s'y déroulent.
              </p>
              <p>
                Vous vous engagez à ne pas partager votre compte avec d'autres personnes et à nous informer immédiatement de toute utilisation non autorisée de votre compte.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd"/>
              </svg>
              <h2 className="text-2xl font-bold text-white">4. Sanctions et bannissements</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>
                En cas de non-respect des présentes conditions ou des règles du serveur, nous nous réservons le droit de prendre des mesures disciplinaires, notamment :
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Avertissements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Mutes temporaires ou permanents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Bannissements temporaires ou permanents</span>
                </li>
              </ul>
              <p>
                Les décisions du staff sont finales. Vous pouvez faire appel d'un bannissement via notre Discord en présentant des preuves de votre bonne foi.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
              </svg>
              <h2 className="text-2xl font-bold text-white">5. Propriété intellectuelle</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>
                Tout le contenu présent sur le Serveur, y compris mais sans s'y limiter les textures, builds, plugins et configurations, est la propriété de Los Nachos Chipies ou de ses créateurs respectifs.
              </p>
              <p>
                Vous ne pouvez pas copier, reproduire, distribuer ou créer des œuvres dérivées du contenu du Serveur sans autorisation écrite préalable.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd"/>
              </svg>
              <h2 className="text-2xl font-bold text-white">6. Limitation de responsabilité</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>
                Le Serveur est fourni "en l'état" sans garantie d'aucune sorte. Nous ne garantissons pas que le Serveur sera disponible de manière ininterrompue ou sans erreur.
              </p>
              <p>
                Los Nachos Chipies ne sera pas responsable des dommages directs, indirects, accessoires ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser le Serveur.
              </p>
              <p className="text-sm italic text-gray-500">
                Note : Ce serveur n'est pas affilié à Mojang AB ou Microsoft Corporation.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
              <h2 className="text-2xl font-bold text-white">7. Contact</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>
                Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter via notre serveur Discord.
              </p>
              <a
                href="https://discord.gg/KrtuE9DXjD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-orange hover:text-primary-yellow transition-colors duration-300 font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Rejoindre notre Discord
              </a>
            </div>
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
