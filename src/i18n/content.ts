export interface StatBlock {
  stat: string
  label: string
  desc: string
}

export interface NumberedBlock {
  num: string
  title: string
  desc: string
}

export interface Founder {
  name: string
  role: string
  title: string
  bio: string
}

export interface SiteContent {
  nav: {
    home: string
    problem: string
    solution: string
    team: string
    contact: string
    notice: string
  }
  home: {
    tag: string
    title: string
    highlight: string
    subtitle: string
    cta1: string
    cta2: string
    scroll: string
    visionTitle: string
    visionText: string
  }
  problem: {
    kicker: string
    title: string
    intro: string
    points: StatBlock[]
    marketKicker: string
    marketTitle: string
    marketIntro: string
    marketStats: StatBlock[]
  }
  solution: {
    kicker: string
    title: string
    intro: string
    points: NumberedBlock[]
    productKicker: string
    productTitle: string
    productSteps: NumberedBlock[]
    advantagesKicker: string
    advantagesTitle: string
    advantages: StatBlock[]
  }
  competition: {
    kicker: string
    title: string
    text: string
    axisNoIa: string
    axisIa: string
    axisFrozen: string
    axisProgrammable: string
    others: string[]
    us: string
  }
  impact: {
    kicker: string
    title: string
    text: string
    points: NumberedBlock[]
    calc: string
  }
  business: {
    kicker: string
    title: string
    unique: { title: string; stat: string; desc: string }
    recurring: { title: string; stat: string; desc: string }
    text: string
  }
  gtm: {
    kicker: string
    title: string
    steps: NumberedBlock[]
  }
  roadmap: {
    kicker: string
    title: string
    years: { year: string; text: string }[]
  }
  team: {
    kicker: string
    title: string
    intro: string
    founders: Founder[]
  }
  contact: {
    kicker: string
    title: string
    text: string
    noticeTitle: string
    noticeText: string
    noticeCta: string
    formName: string
    formEmail: string
    formMessage: string
    formSend: string
  }
  footer: {
    tagline: string
    rights: string
  }
}

export const content: Record<'fr' | 'en', SiteContent> = {
  fr: {
    nav: {
      home: 'Accueil',
      problem: 'Problème & Marché',
      solution: 'Solution & Produit',
      team: 'Équipe',
      contact: 'Contact',
      notice: 'Notice de montage',
    },
    home: {
      tag: "Candidature Les Victoires by Garance 2026",
      title: 'Un drone. Reprogrammable.',
      highlight: "Tous les modèles d'IA du monde.",
      subtitle:
        "Le premier drone professionnel open-source qui fait tourner, à bord et sans internet, les meilleurs modèles d'intelligence artificielle — et change de mission en cinq minutes.",
      cta1: 'Découvrir la solution',
      cta2: "Voir la notice de montage",
      scroll: 'Défiler',
      visionTitle: 'Rendre chaque drone reprogrammable. Partout.',
      visionText:
        "Un standard ouvert pour l'intelligence embarquée — conçu en Europe, ouvert au monde.",
    },
    problem: {
      kicker: '02 · Problème',
      title: "Aujourd'hui, le drone professionnel est figé.",
      intro:
        'Le drone professionnel actuel est long et coûteux à reprogrammer, vite obsolète, majoritairement chinois, et hors de prix pour expérimenter.',
      points: [
        { stat: '6 mois / 80 000 €', label: 'Rigidité', desc: 'Le délai et le budget pour changer ce que fait un drone.' },
        { stat: 'Chaque trimestre', label: 'Obsolescence', desc: "L'IA évolue sans cesse. Les drones, eux, ne changent jamais." },
        { stat: '70 %', label: 'Dépendance', desc: 'des drones professionnels viennent de Chine.' },
        { stat: '200 000 €', label: 'Prix', desc: 'Le ticket minimum pour tester un algorithme en vol.' },
      ],
      marketKicker: '03 · Marché',
      marketTitle: 'Un marché massif, un logiciel à la traîne.',
      marketIntro:
        'Le marché des drones commerciaux explose, mais la valeur migre vers le logiciel — segment qui croît de 27 % par an. C’est là que nous nous positionnons.',
      marketStats: [
        { stat: '65 Md$', label: 'Drones commerciaux', desc: "Marché mondial d'ici 2032." },
        { stat: '24 Md$', label: 'Logiciel pour drones', desc: "Marché mondial d'ici 2030." },
        { stat: '+27 %/an', label: 'Croissance logiciel', desc: 'Le segment le plus rapide du secteur.' },
      ],
    },
    solution: {
      kicker: '04 · Solution',
      title: 'Un drone qui change de mission, pas de matériel.',
      intro:
        "La réponse : un drone 100 % reprogrammable, à l'IA embarquée et sans internet, entièrement open-source et réparable.",
      points: [
        { num: '01', title: '100 % reprogrammable', desc: "Ce matin il détecte des fissures, cet après-midi il surveille un périmètre. Le même drone." },
        { num: '02', title: 'IA embarquée', desc: "Il fait tourner les meilleurs modèles d'IA directement à bord. Sans internet, sans limite." },
        { num: '03', title: 'Open-source & réparable', desc: 'Pas de boîte noire. Chaque pièce se remplace, chaque ligne de code se lit.' },
      ],
      productKicker: '05-07 · Produit',
      productTitle: 'De l’achat au vol, en trois étapes.',
      productSteps: [
        { num: '01', title: 'Tu achètes ton drone.', desc: 'Un drone open-source et réparable, conçu et assemblé en France, livré avec son calculateur d’IA intégré. Prêt à voler en quelques heures.' },
        { num: '02', title: 'Tu choisis ce qu’il fait.', desc: 'Charge un programme existant (détection de personnes, inspection de fissures, surveillance de périmètre, identification de sons, détection de drones intrus) ou crée ton propre algorithme.' },
        { num: '03', title: 'Tu le fais voler.', desc: 'Le drone exécute sa mission. Tu changes de programme en 5 minutes, sans même l’atterrir. Demain, il fait autre chose.' },
      ],
      advantagesKicker: '08 · Avantages',
      advantagesTitle: 'Là où les autres mettent six mois.',
      advantages: [
        { stat: '5 min', label: 'Reprogrammé en vol', desc: "Tu changes l'algorithme de ton drone en cinq minutes, sans toucher au matériel." },
        { stat: '1 drone', label: 'Toutes les missions', desc: 'Le même appareil fait tout. Tu ne rachètes pas un drone par cas d’usage.' },
        { stat: '2 500 €', label: 'Accessible à tous', desc: 'Un labo ou une startup teste son algorithme en vol. Hier, il fallait 200 000 € et une équipe d’ingénieurs.' },
      ],
    },
    competition: {
      kicker: '09 · Concurrence',
      title: 'Seuls sur le quadrant qui compte.',
      text:
        "Les leaders sont figés. Les solutions ouvertes n'embarquent pas d'IA. Programmable et capable de faire tourner les meilleurs modèles à bord : cette case est vide — nous l'occupons.",
      axisNoIa: "Pas d'IA",
      axisIa: 'IA embarquée',
      axisFrozen: 'Figé',
      axisProgrammable: 'Programmable',
      others: ['DJI', 'Parrot', 'Autel EVO', 'DIY ArduPilot', 'Paparazzi UAV'],
      us: 'NEUTRON ROBOTICS',
    },
    impact: {
      kicker: '10 · Souveraineté & Impact',
      title: 'Une alternative européenne, durable et accessible.',
      text: 'Notre contribution répond à trois fragilités du marché : souveraineté européenne, durabilité contre l’obsolescence, accessibilité de la R&D, ancrage industriel en France.',
      points: [
        { num: '01', title: 'Souveraineté', desc: 'Logiciel, données et assemblage maîtrisés en France — face à une dépendance de 70 % aux drones chinois.' },
        { num: '02', title: 'Durabilité', desc: 'L’inverse du jetable : réparable pièce par pièce, open-source, mis à jour par logiciel.' },
        { num: '03', title: 'Accessibilité', desc: 'Tester un algorithme en vol passe de 200 000 € à 2 500 €. La recherche et les PME y accèdent.' },
        { num: '04', title: 'Ancrage', desc: 'Conçu et assemblé en France. Des emplois d’ingénierie hardware et IA, ici.' },
      ],
      calc: 'Calcul IA sur modules ouverts du marché (NVIDIA Jetson, Hailo…), intégrés dans une architecture maîtrisée, ouverte et diversifiable.',
    },
    business: {
      kicker: '11 · Business model',
      title: 'On vend le drone une fois. On vend l’intelligence chaque mois.',
      unique: { title: 'Achat unique', stat: '2 500 €', desc: 'Le kit de démarrage : drone open-source, calculateur d’IA embarqué et SDK complet.' },
      recurring: { title: 'Revenu récurrent', stat: '49–199 €/mois', desc: 'L’abonnement au catalogue de modèles IA — un revenu qui grandit avec chaque client.' },
      text: 'Modèle hybride : vente unique du drone, puis revenu récurrent mensuel sur le catalogue de modèles IA.',
    },
    gtm: {
      kicker: '12 · Go-to-market',
      title: 'Les labos testent, la communauté évangélise, la défense achète.',
      steps: [
        { num: '01', title: 'On construit avant de vendre', desc: 'Code open-source, hackathons, kits déposés dans les laboratoires.' },
        { num: '02', title: 'La communauté vend pour nous', desc: 'Un labo convaincu en convainc dix autres.' },
        { num: '03', title: 'La crédibilité ouvre les grandes portes', desc: 'Ce que les universités valident, la défense et l’industrie l’achètent.' },
      ],
    },
    roadmap: {
      kicker: '13-14 · Feuille de route',
      title: 'Du SDK open-source au marché européen.',
      years: [
        { year: '2026', text: 'SDK open-source, hackathons et pré-série pilote. Levée d’amorçage.' },
        { year: 'T1 2027', text: 'Drone V1 : premières livraisons. Catalogue IA (5 modèles). 0,3 M€ de revenu.' },
        { year: '2028', text: 'Certifications. Ouverture défense & industrie. 10 laboratoires équipés. 1,5 M€ de revenu.' },
        { year: '2029', text: '20+ modèles au catalogue. Expansion européenne. 5,0 M€ de revenu.' },
      ],
    },
    team: {
      kicker: '15 · Fondateurs',
      title: 'Hardware temps réel et IA embarquée.',
      intro: 'Une équipe complémentaire : hardware temps réel et IA embarquée sur systèmes critiques.',
      founders: [
        {
          name: 'Romain Gasquet',
          role: 'PRÉSIDENT',
          title: 'Ingénieur électronique — Hardware & systèmes embarqués',
          bio: 'Enedis · électronique industrielle · contraintes temps réel',
        },
        {
          name: 'Florian Even',
          role: 'DIRECTEUR GÉNÉRAL',
          title: 'Ingénieur informatique — Logiciel & IA embarquée',
          bio: 'Safran · IA déconnectée · systèmes critiques',
        },
      ],
    },
    contact: {
      kicker: '16 · Contact',
      title: 'Construisons-le ensemble.',
      text: "Un drone conçu en Europe, open-source et reprogrammable, prêt à faire tourner toute l'IA du monde.",
      noticeTitle: 'Notice de montage du drone',
      noticeText: 'Consultez le guide d’assemblage pas-à-pas de notre drone, disponible en ligne.',
      noticeCta: 'Ouvrir la notice de montage ↗',
      formName: 'Nom',
      formEmail: 'Email',
      formMessage: 'Message',
      formSend: 'Envoyer',
    },
    footer: {
      tagline: 'Conçu et assemblé en France.',
      rights: 'Tous droits réservés.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      problem: 'Problem & Market',
      solution: 'Solution & Product',
      team: 'Team',
      contact: 'Contact',
      notice: 'Assembly guide',
    },
    home: {
      tag: 'Applicant — Les Victoires by Garance 2026',
      title: 'One drone. Reprogrammable.',
      highlight: 'Every AI model in the world.',
      subtitle:
        'The first open-source professional drone that runs, on board and offline, the best artificial intelligence models — and switches mission in five minutes.',
      cta1: 'Discover the solution',
      cta2: 'View assembly guide',
      scroll: 'Scroll',
      visionTitle: 'Make every drone reprogrammable. Everywhere.',
      visionText: 'An open standard for embedded intelligence — designed in Europe, open to the world.',
    },
    problem: {
      kicker: '02 · Problem',
      title: 'Today, the professional drone is frozen.',
      intro:
        "Today's professional drone is slow and costly to reprogram, quickly obsolete, mostly Chinese, and priced out of reach for experimentation.",
      points: [
        { stat: '6 months / €80,000', label: 'Rigidity', desc: 'The time and budget needed to change what a drone does.' },
        { stat: 'Every quarter', label: 'Obsolescence', desc: 'AI keeps evolving. Drones never change.' },
        { stat: '70%', label: 'Dependence', desc: 'of professional drones come from China.' },
        { stat: '€200,000', label: 'Price', desc: 'The minimum ticket to test an algorithm in flight.' },
      ],
      marketKicker: '03 · Market',
      marketTitle: 'A massive market, software lagging behind.',
      marketIntro:
        'The commercial drone market is exploding, but value is migrating to software — the segment growing 27% a year. That is where we position ourselves.',
      marketStats: [
        { stat: '$65 Bn', label: 'Commercial drones', desc: 'Global market by 2032.' },
        { stat: '$24 Bn', label: 'Drone software', desc: 'Global market by 2030.' },
        { stat: '+27%/yr', label: 'Software growth', desc: 'The fastest-growing segment in the sector.' },
      ],
    },
    solution: {
      kicker: '04 · Solution',
      title: 'A drone that changes mission, not hardware.',
      intro:
        'The answer: a 100% reprogrammable drone, with embedded AI and no internet needed, fully open-source and repairable.',
      points: [
        { num: '01', title: '100% reprogrammable', desc: 'This morning it detects cracks, this afternoon it monitors a perimeter. The same drone.' },
        { num: '02', title: 'Embedded AI', desc: 'It runs the best AI models directly on board. No internet, no limits.' },
        { num: '03', title: 'Open-source & repairable', desc: 'No black box. Every part can be replaced, every line of code can be read.' },
      ],
      productKicker: '05-07 · Product',
      productTitle: 'From purchase to flight, in three steps.',
      productSteps: [
        { num: '01', title: 'You buy your drone.', desc: 'An open-source, repairable drone, designed and assembled in France, delivered with its integrated AI computer. Ready to fly within hours.' },
        { num: '02', title: 'You choose what it does.', desc: 'Load an existing program (people detection, crack inspection, perimeter surveillance, sound identification, intruder drone detection) or build your own algorithm.' },
        { num: '03', title: 'You fly it.', desc: 'The drone runs its mission. Switch program in 5 minutes, without even landing. Tomorrow, it does something else.' },
      ],
      advantagesKicker: '08 · Advantages',
      advantagesTitle: 'Where others need six months.',
      advantages: [
        { stat: '5 min', label: 'Reprogrammed in flight', desc: "Change your drone's algorithm in five minutes, without touching the hardware." },
        { stat: '1 drone', label: 'Every mission', desc: 'The same device does it all. No need to buy a drone per use case.' },
        { stat: '€2,500', label: 'Accessible to all', desc: 'A lab or a startup can flight-test its algorithm. Yesterday it took €200,000 and a team of engineers.' },
      ],
    },
    competition: {
      kicker: '09 · Competition',
      title: 'Alone in the quadrant that matters.',
      text:
        'Leaders are frozen. Open solutions carry no AI. Programmable and capable of running the best models on board: this spot is empty — we occupy it.',
      axisNoIa: 'No AI',
      axisIa: 'Embedded AI',
      axisFrozen: 'Frozen',
      axisProgrammable: 'Programmable',
      others: ['DJI', 'Parrot', 'Autel EVO', 'DIY ArduPilot', 'Paparazzi UAV'],
      us: 'NEUTRON ROBOTICS',
    },
    impact: {
      kicker: '10 · Sovereignty & Impact',
      title: 'A European, sustainable and accessible alternative.',
      text: 'Our contribution addresses three market fragilities: European sovereignty, durability against obsolescence, accessible R&D, and industrial anchoring in France.',
      points: [
        { num: '01', title: 'Sovereignty', desc: 'Software, data and assembly controlled in France — against a 70% dependence on Chinese drones.' },
        { num: '02', title: 'Durability', desc: 'The opposite of disposable: repairable part by part, open-source, updated by software.' },
        { num: '03', title: 'Accessibility', desc: 'Flight-testing an algorithm drops from €200,000 to €2,500. Research and SMEs can access it.' },
        { num: '04', title: 'Anchoring', desc: 'Designed and assembled in France. Hardware and AI engineering jobs, here.' },
      ],
      calc: 'AI computation on open market modules (NVIDIA Jetson, Hailo…), integrated into a controlled, open and diversifiable architecture.',
    },
    business: {
      kicker: '11 · Business model',
      title: 'We sell the drone once. We sell the intelligence every month.',
      unique: { title: 'One-time purchase', stat: '€2,500', desc: 'The starter kit: open-source drone, embedded AI computer and complete SDK.' },
      recurring: { title: 'Recurring revenue', stat: '€49–199/mo', desc: 'Subscription to the AI model catalog — revenue that grows with every customer.' },
      text: 'Hybrid model: one-time drone sale, then monthly recurring revenue on the AI model catalog.',
    },
    gtm: {
      kicker: '12 · Go-to-market',
      title: 'Labs test, the community evangelizes, defense buys.',
      steps: [
        { num: '01', title: 'We build before we sell', desc: 'Open-source code, hackathons, kits placed in laboratories.' },
        { num: '02', title: 'The community sells for us', desc: 'One convinced lab convinces ten others.' },
        { num: '03', title: 'Credibility opens the big doors', desc: 'What universities validate, defense and industry buy.' },
      ],
    },
    roadmap: {
      kicker: '13-14 · Roadmap',
      title: 'From open-source SDK to the European market.',
      years: [
        { year: '2026', text: 'Open-source SDK, hackathons and pilot pre-series. Seed round.' },
        { year: 'Q1 2027', text: 'Drone V1: first deliveries. AI catalog (5 models). €0.3M revenue.' },
        { year: '2028', text: 'Certifications. Opening to defense & industry. 10 labs equipped. €1.5M revenue.' },
        { year: '2029', text: '20+ models in the catalog. European expansion. €5.0M revenue.' },
      ],
    },
    team: {
      kicker: '15 · Founders',
      title: 'Real-time hardware and embedded AI.',
      intro: 'A complementary team: real-time hardware and embedded AI on critical systems.',
      founders: [
        {
          name: 'Romain Gasquet',
          role: 'CHAIRMAN',
          title: 'Electronics engineer — Hardware & embedded systems',
          bio: 'Enedis · industrial electronics · real-time constraints',
        },
        {
          name: 'Florian Even',
          role: 'CEO',
          title: 'Software engineer — Embedded software & AI',
          bio: 'Safran · disconnected AI · critical systems',
        },
      ],
    },
    contact: {
      kicker: '16 · Contact',
      title: "Let's build it together.",
      text: 'A drone designed in Europe, open-source and reprogrammable, ready to run all the AI in the world.',
      noticeTitle: 'Drone assembly guide',
      noticeText: 'Check out the step-by-step assembly guide for our drone, available online.',
      noticeCta: 'Open the assembly guide ↗',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Message',
      formSend: 'Send',
    },
    footer: {
      tagline: 'Designed and assembled in France.',
      rights: 'All rights reserved.',
    },
  },
}
