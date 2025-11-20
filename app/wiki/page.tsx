'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function WikiPage() {
  const [activeSection, setActiveSection] = useState('regles');

  const sections = {
    regles: {
      title: 'Règles du Serveur',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
        </svg>
      ),
      content: [
        {
          subtitle: 'Respect et comportement',
          items: [
            'Respectez tous les joueurs et membres du staff',
            'Aucun langage offensant, discriminatoire ou toxique',
            'Pas de harcèlement sous quelque forme que ce soit',
            'Restez courtois en toutes circonstances',
          ],
        },
        {
          subtitle: 'Roleplay',
          items: [
            'Restez dans votre personnage en RP',
            'Pas de metagaming (utilisation d\'informations hors RP)',
            'Respectez les actions et décisions des autres joueurs',
            'Les morts RP doivent être acceptées selon les règles établies',
          ],
        },
        {
          subtitle: 'Jeu équitable',
          items: [
            'Aucun hack, mod ou triche autorisé',
            'Pas d\'exploitation de bugs ou glitches',
            'Respectez les zones protégées et propriétés privées',
            'Suivez les règles économiques du serveur',
          ],
        },
      ],
    },
    commandes: {
      title: 'Commandes Disponibles',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
        </svg>
      ),
      content: [
        {
          subtitle: 'Commandes de base',
          items: [
            '/help - Affiche la liste des commandes',
            '/spawn - Retourne au spawn principal',
            '/home - Retourne à votre maison',
            '/sethome - Définit votre point de spawn personnel',
          ],
        },
        {
          subtitle: 'Commandes RP',
          items: [
            '/me [action] - Décrit une action RP',
            '/do [description] - Décrit l\'environnement ou situation',
            '/whisper [joueur] [message] - Chuchote à un joueur proche',
            '/shout [message] - Crie un message (portée étendue)',
          ],
        },
        {
          subtitle: 'Commandes sociales',
          items: [
            '/msg [joueur] [message] - Envoie un message privé',
            '/party create - Crée un groupe',
            '/party invite [joueur] - Invite un joueur dans votre groupe',
            '/trade [joueur] - Ouvre un menu d\'échange sécurisé',
          ],
        },
      ],
    },
    guides: {
      title: 'Guides de Démarrage',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
        </svg>
      ),
      content: [
        {
          subtitle: 'Premier pas sur le serveur',
          items: [
            'Créez votre personnage et son histoire',
            'Visitez le spawn et familiarisez-vous avec les lieux',
            'Rejoignez le Discord pour rencontrer la communauté',
            'Lisez attentivement toutes les règles',
          ],
        },
        {
          subtitle: 'Créer votre personnage',
          items: [
            'Choisissez un nom et une histoire cohérente',
            'Définissez les traits de personnalité',
            'Respectez le thème de la saison en cours',
            'Évitez les personnages surpuissants (power gaming)',
          ],
        },
        {
          subtitle: 'Économie et commerce',
          items: [
            'La monnaie principale est le Nacho Coin',
            'Gagnez de l\'argent via les quêtes et le commerce',
            'Ouvrez votre propre boutique en zone commerciale',
            'Participez aux événements économiques saisonniers',
          ],
        },
        {
          subtitle: 'Construction et territoires',
          items: [
            'Demandez une zone de construction au staff',
            'Respectez le style architectural du thème',
            'Protégez vos constructions avec les commandes de claim',
            'Participez aux projets communautaires',
          ],
        },
      ],
    },
    faq: {
      title: 'Questions Fréquentes',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
        </svg>
      ),
      content: [
        {
          subtitle: 'Questions générales',
          items: [
            'Q: Comment rejoindre le serveur ? - R: Téléchargez notre launcher depuis la page de téléchargement',
            'Q: Le serveur est-il gratuit ? - R: Oui, totalement gratuit ! Seul Minecraft Java Edition est requis',
            'Q: Combien de temps dure une saison ? - R: Généralement 3 à 4 mois, avec des événements réguliers',
            'Q: Puis-je jouer avec mes amis ? - R: Absolument ! Invitez vos amis à nous rejoindre',
          ],
        },
        {
          subtitle: 'Problèmes techniques',
          items: [
            'Q: Le launcher ne se lance pas - R: Vérifiez que Java est installé et à jour',
            'Q: Je suis banni à tort - R: Contactez le staff sur Discord avec des preuves',
            'Q: Le serveur est-il en maintenance ? - R: Consultez notre Discord pour les annonces',
            'Q: Comment signaler un bug ? - R: Utilisez le canal #bugs sur Discord',
          ],
        },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
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
            <span className="text-primary-orange">Wiki</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tout ce que vous devez savoir pour profiter au maximum de Los Nachos Chipies
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                activeSection === key
                  ? 'bg-gradient-to-r from-primary-orange to-primary-orange-dark text-white glow-orange shadow-lg'
                  : 'bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] text-gray-300 hover:text-white border border-gray-800 hover:border-primary-orange/50'
              }`}
            >
              <span className={activeSection === key ? 'text-white' : 'text-primary-orange'}>
                {section.icon}
              </span>
              {section.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 md:p-12 rounded-xl border-2 border-primary-orange/20 min-h-[500px]">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-primary-orange">
              {sections[activeSection as keyof typeof sections].icon}
            </span>
            <h2 className="text-3xl font-bold text-white">
              {sections[activeSection as keyof typeof sections].title}
            </h2>
          </div>

          <div className="space-y-8">
            {sections[activeSection as keyof typeof sections].content.map((section, index) => (
              <div key={index} className="bg-black/30 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-primary-orange mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                  {section.subtitle}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-300 text-base flex items-start gap-3 hover:text-white transition-colors duration-200"
                    >
                      <span className="text-primary-orange mt-1.5 flex-shrink-0">
                        <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3"/>
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-12 rounded-xl border-2 border-primary-orange/20">
          <svg className="w-16 h-16 mx-auto mb-4 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"/>
          </svg>
          <h2 className="text-3xl font-bold text-white mb-4">
            Vous ne trouvez pas ce que vous <span className="text-primary-orange">cherchez</span> ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Notre communauté est là pour vous aider ! Rejoignez notre Discord pour poser vos questions.
          </p>
          <a
            href="https://discord.gg/votre-serveur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Demander de l'aide sur Discord
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
