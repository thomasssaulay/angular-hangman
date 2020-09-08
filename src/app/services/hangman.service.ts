export class HangmanService {
  domainList = [
    {
      id: 0,
      name: "Lettres et Sciences Humaines",
      metiers: [
        "Professeur",
        "Journaliste",
        "Traducteur",
        "Sociologue",
        "Bibliothécaire",
        "Libraire",
        "Interprète",
        "Psychologues",
        "Rédacteur"
      ],
      hint: [
        "Cocation",
        "Le Monde",
        "Babel",
        "Bourdieu",
        "BNF",
        "Dialogues",
        "Langues",
        "Tu es suivi ?",
        "Nombre de caractères"
      ]
    },
    {
      id: 1,
      name: "Médecine & Sciences de la Santé",
      metiers: [
        "Médecin",
        "Kinésithérapeute",
        "Sage-femme",
        "Cadre de santé",
        "Dentiste",
        "Podologue",
        "Ergothérapeute",
        "Orthophoniste",
        "Pharmacien"
      ],
      hint: [
        "Hippocrate",
        "Massage",
        "Accouchement",
        "Administration des hôpitaux",
        "Roulette",
        "Semelle",
        "Handicap",
        "Langage",
        "Croix verte"
      ]
    },
    {
      id: 2,
      name: "Sciences et Technologie",
      metiers: [
        "Ingénieur audiovisuel",
        "Urbaniste",
        "Biochimiste",
        "Informaticien",
        "Ingénieur du son",
        "Chargé projet web",
        "Physicien"
      ],
      hint: [
        "Plateau",
        "Le Corbusier",
        "Lavoisier",
        "Geek",
        "Perche",
        "Geek",
        "Hawking"
      ]
    },
    {
      id: 3,
      name: "Sciences de la Mer",
      metiers: [
        "Ingénieur aquaculture",
        "Géophysicien",
        "Océanographe",
        "Juriste maritime",
        "Expert littoral",
        "Enseignant-chercheur",
        "Economiste de la mer"
      ],
      hint: [
        "Elevage marin",
        "Planète Terre",
        "Bonnet rouge",
        "Droit de la mer",
        "Préservation des côtes",
        "Laboratoire",
        "Piketty en marinière"
      ]
    },
    {
      id: 4,
      name: "Institut Universitaire de Technologie",
      metiers: [
        "Chargé de clientèle",
        "Dessinateur industriel",
        "Agent immobilier",
        "Electro-technicien",
        "Responsable logistique",
        "Conducteur de travaux",
        "Technicien en automatismes",
        "Electricien"
      ],
      hint: [
        "Commercial",
        "DAO",
        "Plaza",
        "Circuit imprimé",
        "Livraison",
        "Chantier",
        "Robot",
        "Circuit"
      ]
    },
    {
      id: 5,
      name: "Sports & Sciences et de l’Éducation",
      metiers: [
        "Coach sportif",
        "Professeur EPS",
        "Entraîneur",
        "Ingénieur pédagogique",
        "Professeur des écoles",
        "Formateur",
        "Educateur spécialisé"
      ],
      hint: [
        "Entraînement personnel",
        "Formez les équipes !",
        "Compétition",
        "Sciences de l'enseignement",
        "Maîtresse !",
        "Éducateur sportif",
        "Accompagnement personnel"
      ]
    },
    {
      id: 6,
      name: "Droit, Économie, Gestion",
      metiers: [
        "Avocat",
        "Commissaire de police",
        "Contrôleur gestion",
        "Clerc de notaire",
        "Assistant marketing",
        "Médiateur culturel",
        "Acheteur",
        "Responsable logistique"
      ],
      hint: [
        "Robe",
        "Quai des Orfèvres",
        "Budget",
        "Acte",
        "Besoin client",
        "Expo / Festival",
        "Négociation",
        "Transport"
      ]
    }
  ];
}
