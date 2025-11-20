# Déploiement sur Raspberry Pi 4 avec Cloudflare Tunnel

Ce guide vous explique comment déployer le site Los Nachos Chipies sur un Raspberry Pi 4 (8GB) et le rendre accessible publiquement via Cloudflare Tunnel.

## Prérequis

- Raspberry Pi 4 avec 8GB de RAM
- Carte SD avec Raspberry Pi OS installé
- Connexion Internet
- Compte GitHub
- Compte Cloudflare (gratuit)

## Étape 1 : Configuration initiale du Raspberry Pi

### 1.1 Mise à jour du système

```bash
sudo apt update
sudo apt upgrade -y
```

### 1.2 Installation de Node.js

Installez Node.js version 18 ou supérieure (recommandé : version 20 LTS) :

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

Vérifiez l'installation :

```bash
node --version
npm --version
```

### 1.3 Installation de Git

```bash
sudo apt install -y git
```

## Étape 2 : Récupération du code depuis GitHub

### 2.1 Configuration de Git

Configurez vos informations Git :

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

### 2.2 Cloner le repository

D'abord, créez le repository sur GitHub et poussez votre code :

**Sur votre PC Windows :**

```bash
cd e:\Projet\Perso\websiteluncher
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/los-nachos-chipies.git
git push -u origin main
```

**Sur le Raspberry Pi :**

```bash
cd ~
mkdir projects
cd projects
git clone https://github.com/VOTRE_USERNAME/los-nachos-chipies.git
cd los-nachos-chipies
```

## Étape 3 : Installation et build du projet

### 3.1 Installation des dépendances

```bash
npm install
```

### 3.2 Build du projet pour la production

```bash
npm run build
```

### 3.3 Test en local

```bash
npm start
```

Le site devrait être accessible sur `http://localhost:3000`

## Étape 4 : Configuration de PM2 (Process Manager)

PM2 permet de garder votre application Next.js en ligne 24/7 et de la redémarrer automatiquement en cas de crash ou de redémarrage du Pi.

### 4.1 Installation de PM2

```bash
sudo npm install -g pm2
```

### 4.2 Démarrage de l'application avec PM2

```bash
cd ~/projects/los-nachos-chipies
pm2 start npm --name "los-nachos-chipies" -- start
```

### 4.3 Configuration du démarrage automatique

```bash
pm2 startup
pm2 save
```

### 4.4 Commandes utiles PM2

```bash
# Voir l'état de l'application
pm2 status

# Voir les logs
pm2 logs los-nachos-chipies

# Redémarrer l'application
pm2 restart los-nachos-chipies

# Arrêter l'application
pm2 stop los-nachos-chipies

# Supprimer l'application
pm2 delete los-nachos-chipies
```

## Étape 5 : Configuration de Cloudflare Tunnel

Cloudflare Tunnel (anciennement Argo Tunnel) permet d'exposer votre site sur Internet sans ouvrir de ports sur votre routeur.

### 5.1 Installation de cloudflared

```bash
# Télécharger cloudflared pour ARM64
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm64.deb

# Installer le package
sudo dpkg -i cloudflared-linux-arm64.deb

# Vérifier l'installation
cloudflared --version
```

### 5.2 Authentification avec Cloudflare

```bash
cloudflared tunnel login
```

Cette commande ouvrira un navigateur pour vous connecter à Cloudflare. Si vous n'avez pas d'interface graphique sur votre Pi, la commande affichera une URL que vous pourrez ouvrir sur un autre appareil.

### 5.3 Création du tunnel

```bash
cloudflared tunnel create los-nachos-chipies
```

Notez l'ID du tunnel affiché (format : `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### 5.4 Configuration du tunnel

Créez le fichier de configuration :

```bash
sudo mkdir -p /etc/cloudflared
sudo nano /etc/cloudflared/config.yml
```

Ajoutez le contenu suivant (remplacez `TUNNEL_ID` par l'ID de votre tunnel) :

```yaml
tunnel: TUNNEL_ID
credentials-file: /home/pi/.cloudflared/TUNNEL_ID.json

ingress:
  - hostname: votre-domaine.com
    service: http://localhost:3000
  - service: http_status:404
```

### 5.5 Configuration DNS

Associez votre domaine au tunnel :

```bash
cloudflared tunnel route dns los-nachos-chipies votre-domaine.com
```

Vous pouvez aussi ajouter un sous-domaine :

```bash
cloudflared tunnel route dns los-nachos-chipies www.votre-domaine.com
```

### 5.6 Démarrage du tunnel

Test manuel :

```bash
cloudflared tunnel run los-nachos-chipies
```

Si tout fonctionne, configurez le service pour qu'il démarre automatiquement :

```bash
sudo cloudflared service install
sudo systemctl start cloudflared
sudo systemctl enable cloudflared
```

### 5.7 Vérification du tunnel

```bash
# Voir l'état du service
sudo systemctl status cloudflared

# Voir les logs
sudo journalctl -u cloudflared -f

# Liste des tunnels
cloudflared tunnel list
```

## Étape 6 : Configuration du script de mise à jour

Le projet contient déjà un script `update-site.sh` qui automatise les mises à jour. Après avoir cloné le projet, rendez-le simplement exécutable :

```bash
chmod +x ~/projects/los-nachos-chipies/update-site.sh
```

### Utilisation

Quand vous modifiez le code sur votre PC :

**Sur Windows :**

```bash
git add .
git commit -m "Description des changements"
git push
```

**Sur le Raspberry Pi :**

```bash
~/projects/los-nachos-chipies/update-site.sh
```

Le script va automatiquement :
- 📥 Récupérer les dernières modifications depuis GitHub
- 📦 Installer les nouvelles dépendances
- 🔨 Rebuilder le projet
- 🔄 Redémarrer l'application avec PM2
- ✅ Afficher le statut

## Étape 7 : Monitoring et maintenance

### 7.1 Surveillance des ressources

```bash
# Voir l'utilisation CPU/RAM
htop

# Voir l'espace disque
df -h

# Température du CPU
vcgencmd measure_temp
```

### 7.2 Logs

```bash
# Logs de l'application Next.js
pm2 logs los-nachos-chipies

# Logs du tunnel Cloudflare
sudo journalctl -u cloudflared -f
```

### 7.3 Redémarrage complet

Si vous avez des problèmes :

```bash
pm2 restart los-nachos-chipies
sudo systemctl restart cloudflared
```

## Configuration recommandée pour Raspberry Pi

### Optimisations Next.js

Le fichier `next.config.js` peut être optimisé pour le Pi :

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Réduit la taille du build
  compress: true, // Active la compression
  poweredByHeader: false, // Cache l'en-tête X-Powered-By
};

module.exports = nextConfig;
```

### Swap Memory (recommandé pour le build)

Si le build échoue par manque de mémoire :

```bash
sudo dphys-swapfile swapoff
sudo nano /etc/dphys-swapfile
# Changer CONF_SWAPSIZE=100 en CONF_SWAPSIZE=2048
sudo dphys-swapfile setup
sudo dphys-swapfile swapon
```

## Sécurité

### Pare-feu

Comme vous utilisez Cloudflare Tunnel, vous n'avez pas besoin d'ouvrir de ports. Assurez-vous que seul le port SSH (22) est ouvert si nécessaire :

```bash
sudo apt install ufw
sudo ufw allow ssh
sudo ufw enable
```

### Mises à jour régulières

```bash
# Créer un cron job pour les mises à jour système
sudo crontab -e

# Ajouter cette ligne pour des mises à jour automatiques hebdomadaires
0 3 * * 0 apt update && apt upgrade -y
```

## Dépannage

### Le site ne se charge pas

1. Vérifier que l'application tourne :
   ```bash
   pm2 status
   ```

2. Vérifier les logs :
   ```bash
   pm2 logs los-nachos-chipies
   ```

3. Vérifier le tunnel :
   ```bash
   sudo systemctl status cloudflared
   ```

### Le tunnel ne fonctionne pas

1. Vérifier la configuration :
   ```bash
   cat /etc/cloudflared/config.yml
   ```

2. Tester manuellement :
   ```bash
   cloudflared tunnel run los-nachos-chipies
   ```

3. Vérifier les DNS :
   ```bash
   cloudflared tunnel route ip show
   ```

## Support

- Next.js : https://nextjs.org/docs
- PM2 : https://pm2.keymetrics.io/docs/usage/quick-start/
- Cloudflare Tunnel : https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/

## Notes importantes

- Le Raspberry Pi 4 8GB est suffisant pour héberger ce site avec un trafic modéré
- Pensez à faire des sauvegardes régulières de votre code sur GitHub
- Surveillez la température du Pi, utilisez un dissipateur thermique ou un ventilateur si nécessaire
- Le tunnel Cloudflare est gratuit et offre également une protection DDoS et un CDN
