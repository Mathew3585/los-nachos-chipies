'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function VideoHeader() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay was prevented:', error);
      });
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Video/Header/HeaderVideo.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Logo with Aura */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] mb-12 animate-fade-in">
          {/* Aura Effect - Multiple Layers */}
          <div className="absolute inset-0 animate-pulse-glow">
            <div className="absolute inset-0 bg-gradient-radial from-primary-orange/40 via-primary-orange/20 to-transparent rounded-full blur-3xl"></div>
          </div>
          <div className="absolute inset-0 animate-pulse-glow-delayed">
            <div className="absolute inset-0 bg-gradient-radial from-primary-yellow/30 via-primary-yellow/10 to-transparent rounded-full blur-2xl"></div>
          </div>

          {/* Logo with Bump Animation */}
          <div className="relative w-full h-full animate-bump">
            <Image
              src="/image/logo/Logo transparence.png"
              alt="Los Nachos Chipies"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-2xl sm:text-3xl md:text-4xl text-white mb-12 animate-slide-up max-w-4xl font-semibold">
          Entrez dans Los Nachos Chipies, le serveur RP qui vous sert une nouvelle ambiance à chaque saison. Ici, les thèmes changent plus vite que le fromage ne fond, alors accrochez-vous : ça va croustiller.
        </p>

        {/* CTA Button */}
        <Link
          href="/download"
          className="bg-gradient-to-r from-primary-orange to-primary-orange-dark hover:from-primary-yellow hover:to-primary-orange text-white text-xl sm:text-2xl font-bold py-4 px-12 sm:py-5 sm:px-16 rounded-xl transition-all duration-300 transform hover:scale-110 glow-orange hover:glow-yellow shadow-2xl animate-bounce-subtle"
        >
          COMMENCEZ L'AVENTURE
        </Link>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-primary-orange"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bump {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        @keyframes pulse-glow-delayed {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1.05);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.15);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-bump {
          animation: bump 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-pulse-glow-delayed {
          animation: pulse-glow-delayed 2s ease-in-out infinite 0.5s;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}
