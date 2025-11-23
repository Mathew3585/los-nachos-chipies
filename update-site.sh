#!/bin/bash
cd ~/projects/los-nachos-chipies
echo "📥 Récupération des dernières modifications..."
git pull
echo "📦 Installation des dépendances..."
npm install
echo "🔨 Build du projet..."
npm run build
echo "🔄 Redémarrage de l'application..."
pm2 restart los-nachos-chipies
echo "✅ Mise à jour terminée !"
pm2 status
