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
    product: string
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
  }
  product: {
    kicker: string
    title: string
    intro: string
    pillars: NumberedBlock[]
  }
  steps: {
    kicker: string
    title: string
    items: NumberedBlock[]
  }
  benefits: {
    kicker: string
    title: string
    items: StatBlock[]
  }
  price: {
    kicker: string
    title: string
    intro: string
    drone: { title: string; amount: string; desc: string }
    models: { title: string; amount: string; desc: string }
  }
  trust: {
    title: string
    badges: { title: string; desc: string }[]
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
      product: 'Le drone',
      team: 'Équipe',
      contact: 'Contact',
      notice: 'Notice de montage',
    },
    home: {
      tag: 'Robotique open-source, IA embarquée',
      title: 'Un drone. Reprogrammable.',
      highlight: "Toutes les missions.",
      subtitle:
        "Le premier drone professionnel open-source qui fait tourner, à bord et sans internet, les meilleurs modèles d'intelligence artificielle. Change de mission en cinq minutes, sans changer de matériel.",
      cta1: 'Découvrir le drone',
      cta2: 'Voir la notice de montage',
      scroll: 'Défiler',
    },
    product: {
      kicker: 'Le drone',
      title: 'Un seul appareil, toutes les missions.',
      intro:
        'Ce matin, il détecte des fissures sur un ouvrage. Cet après-midi, il surveille un périmètre. Toujours le même drone, jamais le même job.',
      pillars: [
        { num: '01', title: '100 % reprogrammable', desc: 'Change de mission en quelques clics, sans jamais toucher au matériel.' },
        { num: '02', title: 'IA embarquée', desc: "Fait tourner les meilleurs modèles d'intelligence artificielle directement à bord. Aucune connexion internet requise." },
        { num: '03', title: 'Open-source et réparable', desc: 'Aucune pièce propriétaire, aucune boîte noire. Tout se répare, tout se comprend.' },
      ],
    },
    steps: {
      kicker: 'Comment ça marche',
      title: 'Prêt à voler en trois étapes.',
      items: [
        { num: '01', title: 'Vous recevez votre drone', desc: 'Conçu et assemblé en France, livré avec son calculateur d’IA intégré. Prêt à voler en quelques heures.' },
        { num: '02', title: 'Vous choisissez sa mission', desc: 'Détection de personnes, inspection de fissures, surveillance de périmètre, identification de sons. Chargez un programme du catalogue ou créez le vôtre.' },
        { num: '03', title: 'Vous le faites voler', desc: 'Changez de mission en 5 minutes, sans même atterrir. Demain, il fait autre chose.' },
      ],
    },
    benefits: {
      kicker: 'Pourquoi ce drone',
      title: 'Ce qui change vraiment.',
      items: [
        { stat: '5 min', label: 'Reprogrammé en vol', desc: 'Changez de mission en quelques minutes, sans outil ni compétence technique particulière.' },
        { stat: '1 drone', label: 'Pour toutes les missions', desc: "Un seul appareil suffit là où il en fallait un par usage. Fini les flottes spécialisées." },
        { stat: 'Réparable', label: 'Pièce par pièce', desc: 'Aucune pièce propriétaire. Un drone qui se répare et qui dure, plutôt qu’un drone qu’on jette.' },
      ],
    },
    price: {
      kicker: 'Prix',
      title: 'Un prix simple et transparent.',
      intro: 'Un seul achat pour le drone. Un catalogue de missions IA en option, à volonté.',
      drone: { title: 'Le drone', amount: '2 500 €', desc: 'Kit complet : drone open-source, calculateur d’IA embarqué et SDK pour créer vos propres missions.' },
      models: { title: 'Missions IA supplémentaires', amount: '49 à 199 €/mois', desc: 'Optionnel. Accès à un catalogue grandissant de missions prêtes à l’emploi.' },
    },
    trust: {
      title: 'Conçu pour durer, pas pour être jeté.',
      badges: [
        { title: 'Conçu et assemblé en France', desc: 'De la conception à l’assemblage, tout se passe ici.' },
        { title: 'Open-source', desc: 'Le code et les plans sont ouverts. Rien n’est verrouillé.' },
        { title: 'Réparable', desc: 'Chaque pièce se remplace, sans dépendre d’un service après-vente.' },
      ],
    },
    team: {
      kicker: 'Équipe',
      title: 'Deux ingénieurs, une obsession.',
      intro: 'Une équipe complémentaire : hardware temps réel et IA embarquée sur systèmes critiques.',
      founders: [
        {
          name: 'Romain Gasquet',
          role: 'PRÉSIDENT',
          title: 'Ingénieur électronique, hardware & systèmes embarqués',
          bio: 'Enedis · électronique industrielle · contraintes temps réel',
        },
        {
          name: 'Florian Even',
          role: 'DIRECTEUR GÉNÉRAL',
          title: 'Ingénieur informatique, logiciel & IA embarquée',
          bio: 'Safran · IA déconnectée · systèmes critiques',
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Envie d’en savoir plus ?',
      text: 'Une question sur le drone, sur une mission précise, ou sur les délais de livraison ? Écrivez-nous.',
      noticeTitle: 'Notice de montage du drone',
      noticeText: 'Consultez le guide d’assemblage pas à pas de notre drone, disponible en ligne.',
      noticeCta: 'Ouvrir la notice de montage',
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
      product: 'The drone',
      team: 'Team',
      contact: 'Contact',
      notice: 'Assembly guide',
    },
    home: {
      tag: 'Open-source robotics, embedded AI',
      title: 'One drone. Reprogrammable.',
      highlight: 'Every mission.',
      subtitle:
        'The first open-source professional drone that runs, on board and offline, the best artificial intelligence models. Switch mission in five minutes, without changing hardware.',
      cta1: 'Discover the drone',
      cta2: 'View assembly guide',
      scroll: 'Scroll',
    },
    product: {
      kicker: 'The drone',
      title: 'One device, every mission.',
      intro:
        'This morning, it detects cracks on a structure. This afternoon, it monitors a perimeter. Always the same drone, never the same job.',
      pillars: [
        { num: '01', title: '100% reprogrammable', desc: 'Switch mission in a few clicks, without ever touching the hardware.' },
        { num: '02', title: 'Embedded AI', desc: 'Runs the best AI models directly on board. No internet connection required.' },
        { num: '03', title: 'Open-source and repairable', desc: 'No proprietary parts, no black box. Everything can be repaired, everything can be understood.' },
      ],
    },
    steps: {
      kicker: 'How it works',
      title: 'Ready to fly in three steps.',
      items: [
        { num: '01', title: 'You receive your drone', desc: 'Designed and assembled in France, delivered with its integrated AI computer. Ready to fly within hours.' },
        { num: '02', title: 'You choose its mission', desc: 'People detection, crack inspection, perimeter surveillance, sound identification. Load a program from the catalog or build your own.' },
        { num: '03', title: 'You fly it', desc: 'Switch mission in 5 minutes, without even landing. Tomorrow, it does something else.' },
      ],
    },
    benefits: {
      kicker: 'Why this drone',
      title: 'What actually changes.',
      items: [
        { stat: '5 min', label: 'Reprogrammed in flight', desc: 'Switch mission in a few minutes, no tools or special technical skills required.' },
        { stat: '1 drone', label: 'For every mission', desc: 'One device is enough where you used to need one per use case. No more specialized fleets.' },
        { stat: 'Repairable', label: 'Part by part', desc: 'No proprietary parts. A drone that gets repaired and lasts, instead of one you throw away.' },
      ],
    },
    price: {
      kicker: 'Price',
      title: 'Simple, transparent pricing.',
      intro: 'One purchase for the drone. An optional catalog of AI missions, on demand.',
      drone: { title: 'The drone', amount: '€2,500', desc: 'Complete kit: open-source drone, embedded AI computer, and SDK to build your own missions.' },
      models: { title: 'Additional AI missions', amount: '€49 to €199/mo', desc: 'Optional. Access to a growing catalog of ready-to-use missions.' },
    },
    trust: {
      title: 'Built to last, not to be thrown away.',
      badges: [
        { title: 'Designed and assembled in France', desc: 'From design to assembly, it all happens here.' },
        { title: 'Open-source', desc: 'The code and the blueprints are open. Nothing is locked down.' },
        { title: 'Repairable', desc: 'Every part can be replaced, without depending on customer support.' },
      ],
    },
    team: {
      kicker: 'Team',
      title: 'Two engineers, one obsession.',
      intro: 'A complementary team: real-time hardware and embedded AI on critical systems.',
      founders: [
        {
          name: 'Romain Gasquet',
          role: 'CHAIRMAN',
          title: 'Electronics engineer, hardware & embedded systems',
          bio: 'Enedis · industrial electronics · real-time constraints',
        },
        {
          name: 'Florian Even',
          role: 'CEO',
          title: 'Software engineer, embedded software & AI',
          bio: 'Safran · disconnected AI · critical systems',
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Want to know more?',
      text: 'A question about the drone, a specific mission, or delivery timelines? Get in touch.',
      noticeTitle: 'Drone assembly guide',
      noticeText: 'Check out the step-by-step assembly guide for our drone, available online.',
      noticeCta: 'Open the assembly guide',
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
