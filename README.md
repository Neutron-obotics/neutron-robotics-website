# Neutron Robotics

Site vitrine de Neutron Robotics, un drone professionnel open-source et
reprogrammable, capable de faire tourner les meilleurs modèles d'IA à bord,
sans internet.

## Stack

- [Vite](https://vite.dev) + React + TypeScript
- [Three.js](https://threejs.org) / [@react-three/fiber](https://r3f.docs.pmnd.rs) pour le drone 3D animé
- [Framer Motion](https://www.framer.com/motion/) pour les animations au scroll
- Bilingue FR/EN

## Développement

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Déploiement

Le site est construit et déployé automatiquement sur GitHub Pages via
`.github/workflows/deploy.yml` à chaque push sur `main`.

Sur GitHub : **Settings → Pages → Source → GitHub Actions**.

URL : https://neutron-obotics.github.io/neutron-robotics-website/
