'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PrivacyPage() {
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
            Politique de <span className="text-primary-orange">confidentialité</span>
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
              <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>
                Los Nachos Chipies (ci-après "nous", "notre" ou "nos") s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité explique quelles informations nous collectons, comment nous les utilisons et quels sont vos droits.
              </p>
              <p>
                En utilisant notre serveur Minecraft, vous acceptez les pratiques décrites dans cette politique.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.5 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-3 2.5a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
              </svg>
              <h2 className="text-2xl font-bold text-white">2. Informations collectées</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <div>
                <p className="font-semibold text-white mb-2">Informations de compte</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-orange mt-1">•</span>
                    <span>Pseudo Minecraft (UUID)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-orange mt-1">•</span>
                    <span>Adresse IP (pour des raisons de sécurité et de modération)</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Données de jeu</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-orange mt-1">•</span>
                    <span>Statistiques de jeu (temps de jeu, succès, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-orange mt-1">•</span>
                    <span>Messages du chat et commandes exécutées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-orange mt-1">•</span>
                    <span>Constructions et inventaire en jeu</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Données techniques</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-orange mt-1">•</span>
                    <span>Version du client Minecraft</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-orange mt-1">•</span>
                    <span>Logs de connexion et d'erreurs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 7H7v6h6V7z"/>
                <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"/>
              </svg>
              <h2 className="text-2xl font-bold text-white">3. Utilisation des données</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>Nous utilisons vos données pour :</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Fournir et maintenir le service du serveur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Assurer la sécurité et prévenir les abus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Modérer le contenu et appliquer les règles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Améliorer l'expérience de jeu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Communiquer avec vous concernant le serveur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Analyser les statistiques d'utilisation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
              </svg>
              <h2 className="text-2xl font-bold text-white">4. Partage des données</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>
                Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations dans les cas suivants :
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span><strong className="text-white">Avec votre consentement :</strong> Lorsque vous acceptez explicitement le partage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span><strong className="text-white">Pour des raisons légales :</strong> Si requis par la loi ou pour protéger nos droits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span><strong className="text-white">Avec nos prestataires :</strong> Services d'hébergement qui nous aident à opérer le serveur (avec des obligations de confidentialité)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
              </svg>
              <h2 className="text-2xl font-bold text-white">5. Sécurité des données</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.
              </p>
              <p>
                Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée. Nous ne pouvons donc pas garantir une sécurité absolue.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd"/>
              </svg>
              <h2 className="text-2xl font-bold text-white">6. Vos droits</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>Conformément aux réglementations applicables, vous avez le droit de :</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span><strong className="text-white">Accéder</strong> à vos données personnelles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span><strong className="text-white">Rectifier</strong> vos données si elles sont inexactes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span><strong className="text-white">Supprimer</strong> vos données dans certaines circonstances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span><strong className="text-white">Vous opposer</strong> au traitement de vos données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span><strong className="text-white">Porter</strong> vos données vers un autre service</span>
                </li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous via notre Discord.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
              <h2 className="text-2xl font-bold text-white">7. Mineurs</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>Notre serveur est accessible aux joueurs de tous âges. En tant que parent, vous avez le droit de :</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span><strong className="text-white">Superviser</strong> l'utilisation du serveur par votre enfant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span><strong className="text-white">Accéder</strong> aux données personnelles de votre enfant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span><strong className="text-white">Demander la suppression</strong> des informations fournies sans votre consentement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span><strong className="text-white">Retirer votre consentement</strong> à tout moment</span>
                </li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous via notre Discord.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl border-2 border-primary-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
              <h2 className="text-2xl font-bold text-white">8. Contact</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, veuillez nous contacter via notre serveur Discord.
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
