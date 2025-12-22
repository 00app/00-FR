// Full curriculum data with scripts for TTS generation
export interface DayScript {
  num: number;
  title: string;
  script: string; // Full script for TTS
  recapPhrases: string[];
  microChallenge: string;
}

export const curriculum: DayScript[] = [
  {
    num: 1,
    title: 'Introductions',
    script: `Day 1: Introductions. Today you'll learn how to introduce yourself. Je m'appelle means "my name is". Comment tu t'appelles means "what is your name". Enchanté means "nice to meet you". Practice: Je m'appelle [your name].`,
    recapPhrases: ["Je m'appelle ____.", "Comment tu t'appelles ?", "Enchanté."],
    microChallenge: "Je m'appelle [your name]"
  },
  {
    num: 2,
    title: 'Greetings',
    script: `Day 2: Greetings. Bonjour means "hello" or "good morning". Salut is informal "hi". Bonsoir means "good evening". Practice: Bonjour !`,
    recapPhrases: ["Bonjour.", "Salut.", "Bonsoir."],
    microChallenge: "Bonjour !"
  },
  {
    num: 3,
    title: 'How Are You',
    script: `Day 3: How Are You. Ça va means "how are you" or "I'm fine". Ça va bien means "I'm doing well". Comme ci, comme ça means "so-so". Practice: Ça va ?`,
    recapPhrases: ["Ça va ?", "Ça va bien.", "Comme ci, comme ça."],
    microChallenge: "Ça va ?"
  },
  {
    num: 4,
    title: 'Yes, No, Please',
    script: `Day 4: Yes, No, Please. Oui means "yes". Non means "no". S'il vous plaît means "please". Merci means "thank you". Practice: S'il vous plaît`,
    recapPhrases: ["Oui.", "Non.", "S'il vous plaît. Merci."],
    microChallenge: "S'il vous plaît"
  },
  {
    num: 5,
    title: 'Numbers 1–20',
    script: `Day 5: Numbers 1-20. Un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix. Onze, douze, treize, quatorze, quinze, seize, dix-sept, dix-huit, dix-neuf, vingt. Practice: un, deux, trois`,
    recapPhrases: ["un deux trois", "dix quinze", "vingt"],
    microChallenge: "un, deux, trois"
  },
  {
    num: 6,
    title: 'Where Are You From',
    script: `Day 6: Where Are You From. Tu viens d'où means "where are you from". Je viens de means "I'm from". J'habite en France means "I live in France". Practice: Tu viens d'où ?`,
    recapPhrases: ["Tu viens d'où ?", "Je viens de ____.", "J'habite en France."],
    microChallenge: "Tu viens d'où ?"
  },
  {
    num: 7,
    title: 'Week Review',
    script: `Day 7: Week Review. Let's review what you've learned. Practice combining greetings and introductions. Practice: Bonjour, ça va ?`,
    recapPhrases: ["Review.", "Repeat.", "Confidence."],
    microChallenge: "Bonjour, ça va ?"
  },
  {
    num: 8,
    title: 'Ordering Food',
    script: `Day 8: Ordering Food. Je voudrais means "I would like". L'addition, s'il vous plaît means "the check, please". Un café, s'il vous plaît means "a coffee, please". Practice: Je voudrais un café`,
    recapPhrases: ["Je voudrais ____.", "L'addition, s'il vous plaît.", "Un café, s'il vous plaît."],
    microChallenge: "Je voudrais un café"
  },
  {
    num: 9,
    title: 'Être + Avoir',
    script: `Day 9: Être and Avoir. Je suis means "I am". J'ai means "I have". Tu es means "you are". Tu as means "you have". Practice: Je suis content`,
    recapPhrases: ["Je suis ____.", "J'ai ____.", "Tu es / Tu as"],
    microChallenge: "Je suis content"
  },
  {
    num: 10,
    title: 'Buying Things',
    script: `Day 10: Buying Things. C'est combien means "how much is it". Ça coûte means "it costs". Je prends ça means "I'll take this". Practice: C'est combien ?`,
    recapPhrases: ["C'est combien ?", "Ça coûte ____.", "Je prends ça."],
    microChallenge: "C'est combien ?"
  },
  {
    num: 11,
    title: 'Directions',
    script: `Day 11: Directions. Où est means "where is". À gauche means "to the left". À droite means "to the right". Tout droit means "straight ahead". Practice: Où est la gare ?`,
    recapPhrases: ["Où est ____ ?", "À gauche. À droite.", "Tout droit."],
    microChallenge: "Où est la gare ?"
  },
  {
    num: 12,
    title: 'Weather',
    script: `Day 12: Weather. Il fait beau means "it's nice weather". Il pleut means "it's raining". Il fait froid means "it's cold". Practice: Il fait beau`,
    recapPhrases: ["Il fait beau.", "Il pleut.", "Il fait froid."],
    microChallenge: "Il fait beau"
  },
  {
    num: 13,
    title: 'Days of Week',
    script: `Day 13: Days of Week. Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche. Aujourd'hui c'est means "today is". Practice: Aujourd'hui c'est lundi`,
    recapPhrases: ["Lundi, mardi, mercredi", "Jeudi, vendredi", "Samedi, dimanche"],
    microChallenge: "Aujourd'hui c'est lundi"
  },
  {
    num: 14,
    title: 'Week Review',
    script: `Day 14: Week Review. Practice combining everything you've learned. Practice: Je voudrais aller à gauche`,
    recapPhrases: ["Practice.", "Repeat.", "Build confidence."],
    microChallenge: "Je voudrais aller à gauche"
  },
  {
    num: 15,
    title: 'Booking',
    script: `Day 15: Booking. Je voudrais réserver means "I would like to book". Pour deux personnes means "for two people". Pour ce soir means "for tonight". Practice: Je voudrais réserver une table`,
    recapPhrases: ["Je voudrais réserver ____.", "Pour deux personnes.", "Pour ce soir."],
    microChallenge: "Je voudrais réserver une table"
  },
  {
    num: 16,
    title: 'Transport',
    script: `Day 16: Transport. Le train part quand means "when does the train leave". Un billet pour means "a ticket for". Quelle heure means "what time". Practice: Le train part quand ?`,
    recapPhrases: ["Le train part quand ?", "Un billet pour ____.", "Quelle heure ?"],
    microChallenge: "Le train part quand ?"
  },
  {
    num: 17,
    title: 'Health',
    script: `Day 17: Health. J'ai mal à means "I have pain in". Je suis malade means "I'm sick". Un médecin, s'il vous plaît means "a doctor, please". Practice: J'ai mal à la tête`,
    recapPhrases: ["J'ai mal à ____.", "Je suis malade.", "Un médecin, s'il vous plaît."],
    microChallenge: "J'ai mal à la tête"
  },
  {
    num: 18,
    title: 'Clothes Shopping',
    script: `Day 18: Clothes Shopping. Quelle taille means "what size". Ça me va means "does it fit me". Je peux essayer means "can I try". Practice: Je peux essayer ?`,
    recapPhrases: ["Quelle taille ?", "Ça me va ?", "Je peux essayer ?"],
    microChallenge: "Je peux essayer ?"
  },
  {
    num: 19,
    title: 'Real Estate / Notaire',
    script: `Day 19: Real Estate. Je cherche un appartement means "I'm looking for an apartment". C'est combien par mois means "how much per month". Je voudrais visiter means "I would like to visit". Practice: Je cherche un appartement`,
    recapPhrases: ["Je cherche un appartement.", "C'est combien par mois ?", "Je voudrais visiter."],
    microChallenge: "Je cherche un appartement"
  },
  {
    num: 20,
    title: 'Vet & Pets',
    script: `Day 20: Vet and Pets. Mon chien est malade means "my dog is sick". Un vétérinaire, s'il vous plaît means "a veterinarian, please". Il a quel âge means "how old is he". Practice: Mon chien est malade`,
    recapPhrases: ["Mon chien est malade.", "Un vétérinaire, s'il vous plaît.", "Il a quel âge ?"],
    microChallenge: "Mon chien est malade"
  },
  {
    num: 21,
    title: 'Week Review',
    script: `Day 21: Week Review. Review all you've learned. Speak confidently. You're progressing. Practice: Je voudrais réserver`,
    recapPhrases: ["Review all.", "Speak confidently.", "You're progressing."],
    microChallenge: "Je voudrais réserver"
  },
  {
    num: 22,
    title: 'Asking Questions',
    script: `Day 22: Asking Questions. Qui means "who". Quoi means "what". Où means "where". Quand means "when". Pourquoi means "why". Comment means "how". Practice: Qui est-ce ?`,
    recapPhrases: ["Qui ? Quoi ? Où ?", "Quand ? Pourquoi ?", "Comment ?"],
    microChallenge: "Qui est-ce ?"
  },
  {
    num: 23,
    title: 'Past Tense',
    script: `Day 23: Past Tense. J'ai mangé means "I ate". Je suis allé means "I went". C'était bien means "it was good". Practice: J'ai mangé`,
    recapPhrases: ["J'ai mangé.", "Je suis allé(e).", "C'était bien."],
    microChallenge: "J'ai mangé"
  },
  {
    num: 24,
    title: 'Future Tense',
    script: `Day 24: Future Tense. Je vais aller means "I'm going to go". Je ferai ça demain means "I'll do that tomorrow". On ira ensemble means "we'll go together". Practice: Je vais aller en France`,
    recapPhrases: ["Je vais aller ____.", "Je ferai ça demain.", "On ira ensemble."],
    microChallenge: "Je vais aller en France"
  },
  {
    num: 25,
    title: 'Opinions',
    script: `Day 25: Opinions. Je pense que means "I think that". À mon avis means "in my opinion". C'est super means "it's great". Practice: Je pense que c'est bien`,
    recapPhrases: ["Je pense que ____.", "À mon avis ____.", "C'est super !"],
    microChallenge: "Je pense que c'est bien"
  },
  {
    num: 26,
    title: 'Problems & Help',
    script: `Day 26: Problems and Help. J'ai un problème means "I have a problem". Pouvez-vous m'aider means "can you help me". Au secours means "help". Practice: Pouvez-vous m'aider ?`,
    recapPhrases: ["J'ai un problème.", "Pouvez-vous m'aider ?", "Au secours !"],
    microChallenge: "Pouvez-vous m'aider ?"
  },
  {
    num: 27,
    title: 'Social Life',
    script: `Day 27: Social Life. On se voit quand means "when do we meet". Tu es libre means "are you free". Avec plaisir means "with pleasure". Practice: On se voit demain ?`,
    recapPhrases: ["On se voit quand ?", "Tu es libre ?", "Avec plaisir !"],
    microChallenge: "On se voit demain ?"
  },
  {
    num: 28,
    title: 'Food & Cooking',
    script: `Day 28: Food and Cooking. J'adore means "I love". C'est délicieux means "it's delicious". La recette, s'il vous plaît means "the recipe, please". Practice: C'est délicieux`,
    recapPhrases: ["J'adore ____.", "C'est délicieux !", "La recette, s'il vous plaît."],
    microChallenge: "C'est délicieux"
  },
  {
    num: 29,
    title: 'Full Conversation',
    script: `Day 29: Full Conversation. Combine everything. Speak naturally. You've got this. Practice: Bonjour, ça va ? Je voudrais un café`,
    recapPhrases: ["Combine everything.", "Speak naturally.", "You've got this."],
    microChallenge: "Bonjour, ça va ? Je voudrais un café"
  },
  {
    num: 30,
    title: 'Final Challenge',
    script: `Day 30: Final Challenge. Félicitations! You did it. Continue speaking. Practice: Je parle français !`,
    recapPhrases: ["Félicitations !", "You did it.", "Continue speaking."],
    microChallenge: "Je parle français !"
  }
];

// Export for backward compatibility
export const daysData = curriculum.map(({ num, title, recapPhrases, microChallenge }) => ({
  num,
  title,
  recapPhrases,
  microChallenge,
}));

