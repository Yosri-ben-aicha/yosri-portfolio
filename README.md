# 🚀 Portfolio Professionnel - Yosri Ben Aicha

Portfolio moderne et professionnel développé avec Next.js 15, TypeScript, et Tailwind CSS.

## ✨ Fonctionnalités

- 🎨 Design moderne et professionnel
- 📱 Entièrement responsive
- ⚡ Performance optimisée
- 🔍 SEO optimisé
- 🎭 Animations fluides avec Intersection Observer
- 🧩 Architecture modulaire et scalable
- ♿ Accessible (WCAG compliant)

## 🛠️ Technologies

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📦 Installation

```bash
# Installer les dépendances
bun install

# Lancer le serveur de développement
bun dev

# Build de production
bun run build

# Démarrer en production
bun start
```

## 🌐 Déploiement

### Déploiement sur Vercel (Automatique)

Le projet est configuré pour un déploiement automatique sur Vercel :

1. **Connectez votre repository GitHub à Vercel**
   - Allez sur https://vercel.com/new
   - Importez votre repository `yosri-portfolio`
   - Vercel détectera automatiquement Next.js

2. **Configuration automatique**
   - Framework: Next.js ✅
   - Build Command: `next build` ✅
   - Output Directory: `.next` ✅

3. **Domaine personnalisé** (Optionnel)
   - Voir [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) pour les instructions détaillées

### URL de Déploiement

- **GitHub:** https://github.com/Yosri-ben-aicha/yosri-portfolio
- **Vercel:** Vérifiez votre dashboard Vercel pour l'URL exacte

## 📁 Structure du Projet

```
src/
├── app/
│   ├── page.tsx          # Page principale
│   ├── layout.tsx         # Layout avec métadonnées SEO
│   ├── globals.css        # Styles globaux
│   └── ClientBody.tsx     # Client component wrapper
├── components/
│   ├── Navigation.tsx     # Navigation avec scroll spy
│   ├── Hero.tsx           # Section hero
│   ├── About.tsx          # Section à propos
│   ├── Skills.tsx         # Section compétences
│   ├── Experience.tsx     # Section expérience
│   ├── Projects.tsx       # Section projets
│   ├── Education.tsx      # Section formation
│   ├── Certifications.tsx # Section certifications
│   ├── Contact.tsx        # Section contact
│   ├── Footer.tsx         # Footer
│   └── Section.tsx        # Composant section réutilisable
└── hooks/
    ├── useScrollSpy.ts    # Hook pour détecter la section active
    └── useIntersectionObserver.ts # Hook pour animations au scroll
```

## 🎯 Configuration du Domaine Personnalisé

Pour obtenir un domaine comme `yosri-ben-aicha.engineer` :

1. **Achetez un domaine** (voir [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md))
2. **Dans Vercel Dashboard:**
   - Settings → Domains → Add Domain
   - Entrez votre domaine
   - Suivez les instructions DNS

Voir le guide complet dans [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## 🔧 Configuration

### Variables d'Environnement

Aucune variable d'environnement requise pour le moment.

### Optimisations

- ✅ Image optimization (AVIF/WebP)
- ✅ Compression activée
- ✅ React Strict Mode
- ✅ SEO optimisé
- ✅ Performance optimisée

## 📝 License

© 2025 Yosri Ben Aicha. Tous droits réservés.

## 📧 Contact

- **Email:** benaicha@et.esiea.fr
- **LinkedIn:** [yosri-ben-aicha-43b7a8262](https://www.linkedin.com/in/yosri-ben-aicha-43b7a8262/)
- **GitHub:** [Yosri-ben-aicha](https://github.com/Yosri-ben-aicha)
