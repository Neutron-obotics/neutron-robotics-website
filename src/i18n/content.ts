export interface StatBlock {
  stat: string
  label: string
  desc: string
}

export interface NumberedBlock {
  num: string
  title: string
  desc: string
  list?: string
}

export interface Founder {
  name: string
  role: string
  title: string
  bio: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface SiteContent {
  nav: {
    home: string
    product: string
    team: string
    faq: string
    contact: string
  }
  home: {
    tag: string
    title: string
    highlight: string
    subtitle: string
    cta1: string
    badge: string
  }
  product: {
    kicker: string
    title: string
    items: NumberedBlock[]
  }
  benefits: {
    items: StatBlock[]
  }
  sovereignty: {
    kicker: string
    title: string
    paragraphs: string[]
  }
  team: {
    kicker: string
    title: string
    founders: Founder[]
  }
  faq: {
    kicker: string
    title: string
    items: FaqItem[]
  }
  contact: {
    title: string
    text: string
    emailPlaceholder: string
    submit: string
    thanks: string
    orEmail: string
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
      product: 'Le drone',
      team: 'Équipe',
      faq: 'FAQ',
      contact: "Liste d'attente",
    },
    home: {
      tag: 'Robotique open-source, IA embarquée',
      title: 'Un drone. Reprogrammable.',
      highlight: "Tous les modèles d'IA du monde.",
      subtitle:
        "Le premier drone professionnel open-source qui fait tourner, à bord et sans connexion, les meilleurs modèles d'intelligence artificielle — et change de mission en cinq minutes.",
      cta1: "Rejoindre la liste d'attente",
      badge: 'Conçu & assemblé en France',
    },
    product: {
      kicker: "Ce qu'on construit",
      title: 'Un drone qui change de mission, pas de matériel.',
      items: [
        {
          num: '01',
          title: 'Tu achètes ton drone',
          desc: "Open-source et réparable, conçu et assemblé en France, livré avec son calculateur d'IA intégré. Prêt à voler en quelques heures.",
        },
        {
          num: '02',
          title: "Tu choisis ce qu'il fait",
          desc: 'Charge un programme existant en quelques clics, ou crée le tien — sans aucune limite.',
          list: 'Détection de personnes · Inspection de fissures · Surveillance de périmètre · Identification de sons · Détection de drones intrus',
        },
        {
          num: '03',
          title: 'Tu le fais voler',
          desc: "Le drone exécute sa mission. Tu changes de programme en 5 minutes, sans même l'atterrir. Demain, il fait autre chose.",
        },
      ],
    },
    benefits: {
      items: [
        { stat: '5 min', label: 'Reprogrammé en vol', desc: 'Pour reprogrammer une mission en vol, sans toucher au matériel.' },
        { stat: '1 drone', label: 'Pour toutes les missions', desc: 'Pour toutes les missions : détection, inspection, surveillance, acoustique.' },
        { stat: 'Réparable', label: 'Pièce par pièce', desc: 'Aucune pièce propriétaire. Un drone qui se répare et qui dure, plutôt qu’un drone qu’on jette.' },
      ],
    },
    sovereignty: {
      kicker: 'Souveraineté & impact',
      title: 'Une alternative européenne, durable et accessible.',
      paragraphs: [
        "Aujourd'hui, 70% des drones professionnels viennent de Chine, et sont jetés dès qu'ils tombent en panne. Neutron Robotics prend le contre-pied : logiciel, données et assemblage maîtrisés en France, un drone réparable pièce par pièce et mis à jour par logiciel — pas remplacé.",
        "Et parce qu'il est open-source et accessible, la recherche et les PME peuvent enfin tester leurs propres algorithmes en vol, sans budget de grand groupe.",
      ],
    },
    team: {
      kicker: 'Équipe',
      title: 'Hardware temps réel et IA embarquée.',
      founders: [
        {
          name: 'Romain Gasquet',
          role: 'PRÉSIDENT',
          title: 'Ingénieur électronique, hardware & systèmes embarqués',
          bio: "Groupe du secteur de l'énergie · électronique industrielle · contraintes temps réel",
        },
        {
          name: 'Florian Even',
          role: 'DIRECTEUR GÉNÉRAL',
          title: 'Ingénieur informatique, logiciel & IA embarquée',
          bio: 'Groupe du secteur de la défense · IA déconnectée · systèmes critiques',
        },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Nous répondons à vos questions.',
      items: [
        {
          q: 'Concrètement, comment fonctionne le drone ?',
          a: "Le drone embarque un calculateur d'IA (modules ouverts type NVIDIA Jetson ou Hailo) et un SDK ouvert. Vous chargez un programme depuis le catalogue — ou le vôtre — en quelques clics, sans reflasher le matériel. Le changement de mission prend cinq minutes.",
        },
        {
          q: 'Ça marche sans connexion internet ?',
          a: "Oui. Les modèles d'IA tournent entièrement à bord, sans dépendre d'un réseau ou d'un cloud. Les données restent sur l'appareil : idéal pour les zones isolées ou les usages sensibles.",
        },
        {
          q: 'Pourquoi pas un drone du commerce classique ?',
          a: 'Les drones professionnels actuels sont figés : changer leur mission prend six mois et jusqu’à 80 000 €, et la majorité viennent de Chine. Neutron Robotics est ouvert, réparable et reprogrammable en quelques minutes, avec un assemblage souverain en France.',
        },
        {
          q: 'Par où commencer ?',
          a: 'Rejoignez la liste d’attente ci-dessous. Les premiers kits sont livrés aux laboratoires partenaires dès le premier trimestre 2027.',
        },
      ],
    },
    contact: {
      title: "Rejoignez la liste d'attente.",
      text: 'Neutron Robotics est en développement. Les premiers kits sont livrés aux laboratoires partenaires dès 2027 — soyez parmi les premiers informés.',
      emailPlaceholder: 'vous@exemple.fr',
      submit: 'Rejoindre',
      thanks: "Merci ! On vous recontacte dès l'ouverture des précommandes.",
      orEmail: 'ou écrivez-nous à',
    },
    footer: {
      tagline: 'Conçu et assemblé en France.',
      rights: 'Tous droits réservés.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      product: 'The drone',
      team: 'Team',
      faq: 'FAQ',
      contact: 'Waitlist',
    },
    home: {
      tag: 'Open-source robotics, embedded AI',
      title: 'One drone. Reprogrammable.',
      highlight: 'Every AI model in the world.',
      subtitle:
        'The first open-source professional drone that runs, on board and offline, the best artificial intelligence models — and switches mission in five minutes.',
      cta1: 'Join the waitlist',
      badge: 'Designed & assembled in France',
    },
    product: {
      kicker: "What we're building",
      title: 'One drone that changes mission, not hardware.',
      items: [
        {
          num: '01',
          title: 'You buy your drone',
          desc: 'Open-source and repairable, designed and assembled in France, delivered with its integrated AI computer. Ready to fly within hours.',
        },
        {
          num: '02',
          title: 'You choose what it does',
          desc: 'Load an existing program in a few clicks, or build your own — with no limits.',
          list: 'People detection · Crack inspection · Perimeter surveillance · Sound identification · Intruder drone detection',
        },
        {
          num: '03',
          title: 'You fly it',
          desc: 'The drone carries out its mission. You switch program in 5 minutes, without even landing. Tomorrow, it does something else.',
        },
      ],
    },
    benefits: {
      items: [
        { stat: '5 min', label: 'Reprogrammed in flight', desc: 'To reprogram a mission in flight, without touching the hardware.' },
        { stat: '1 drone', label: 'For every mission', desc: 'For every mission: detection, inspection, surveillance, acoustics.' },
        { stat: 'Repairable', label: 'Part by part', desc: 'No proprietary parts. A drone that gets repaired and lasts, instead of one you throw away.' },
      ],
    },
    sovereignty: {
      kicker: 'Sovereignty & impact',
      title: 'A European alternative, sustainable and accessible.',
      paragraphs: [
        'Today, 70% of professional drones come from China, and are thrown away as soon as they break down. Neutron Robotics takes the opposite approach: software, data and assembly controlled in France, a drone repairable part by part and updated by software — not replaced.',
        'And because it is open-source and accessible, research labs and SMEs can finally test their own algorithms in flight, without a large corporation budget.',
      ],
    },
    team: {
      kicker: 'Team',
      title: 'Real-time hardware and embedded AI.',
      founders: [
        {
          name: 'Romain Gasquet',
          role: 'CHAIRMAN',
          title: 'Electronics engineer, hardware & embedded systems',
          bio: 'Energy sector group · industrial electronics · real-time constraints',
        },
        {
          name: 'Florian Even',
          role: 'CEO',
          title: 'Software engineer, embedded software & AI',
          bio: 'Defense sector group · disconnected AI · critical systems',
        },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'We answer your questions.',
      items: [
        {
          q: 'Concretely, how does the drone work?',
          a: 'The drone embeds an AI computer (open modules such as NVIDIA Jetson or Hailo) and an open SDK. You load a program from the catalog — or your own — in a few clicks, without reflashing the hardware. Switching mission takes five minutes.',
        },
        {
          q: 'Does it work without an internet connection?',
          a: "Yes. The AI models run entirely on board, without depending on a network or a cloud. Data stays on the device: ideal for remote areas or sensitive use cases.",
        },
        {
          q: 'Why not a regular commercial drone?',
          a: "Current professional drones are fixed: changing their mission takes six months and up to €80,000, and most come from China. Neutron Robotics is open, repairable and reprogrammable in minutes, with sovereign assembly in France.",
        },
        {
          q: 'Where do I start?',
          a: 'Join the waitlist below. The first kits are delivered to partner labs starting Q1 2027.',
        },
      ],
    },
    contact: {
      title: 'Join the waitlist.',
      text: 'Neutron Robotics is in development. The first kits are delivered to partner labs starting 2027 — be among the first to know.',
      emailPlaceholder: 'you@example.com',
      submit: 'Join',
      thanks: "Thank you! We'll get back to you when pre-orders open.",
      orEmail: 'or write to us at',
    },
    footer: {
      tagline: 'Designed and assembled in France.',
      rights: 'All rights reserved.',
    },
  },
}
