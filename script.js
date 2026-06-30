const header = document.querySelector("[data-header]");
const revealItems = document.querySelectorAll("[data-reveal]");
const languageToggle = document.querySelector("[data-language-toggle]");

const translations = {
  it: {
    "meta.title": "Acqua Franella | Ogni goccia tiene insieme una terra",
    "meta.description": "Acqua Franella racconta l'acqua raccolta dai dreni per la stabilizzazione delle frane e la trasforma in consapevolezza, prodotto e cura del territorio.",
    "nav.story": "Storia",
    "nav.drains": "Dreni",
    "nav.bottle": "Bottiglia",
    "nav.impact": "Impatto",
    "nav.contact": "Contatti",
    "nav.join": "Partecipa",
    "hero.kicker": "Acqua, memoria, prevenzione",
    "hero.title": "Ogni goccia tiene insieme una terra.",
    "hero.lead": "Acqua Franella nasce da un'idea semplice e potente: l'acqua che i dreni allontanano dalle frane può diventare un simbolo vivo del territorio, una bottiglia che racconta, sensibilizza e restituisce.",
    "hero.primary": "Capire i dreni",
    "hero.secondary": "La nostra storia",
    "story.kicker": "Prima della bottiglia",
    "story.title": "Ci sono paesi, versanti, case e persone che non vogliono essere dimenticate.",
    "story.p1": "L'Italia è fragile perché è viva: montagne giovani, colline in movimento, piogge intense, terreni che assorbono acqua fino a perdere equilibrio. Le frane non sono soltanto linee su una carta geologica. Sono strade interrotte, famiglie preoccupate, luoghi a cui qualcuno continua a voler bene.",
    "story.p2": "Per questo Acqua Franella prova a cambiare il modo in cui se ne parla. Non con paura, ma con cura. Non con distanza, ma con un gesto quotidiano: prendere in mano una bottiglia e scoprire da quale ferita del territorio arriva quell'acqua.",
    "story.mascot": "Io ti accompagno: niente paura, parliamo di frane con parole semplici.",
    "story.caption": "Un drenaggio non è solo un tubo: è il punto in cui il territorio respira e racconta cosa gli sta succedendo.",
    "band.text": "Una frana si stabilizza togliendo pressione. Una comunità si stabilizza aggiungendo consapevolezza.",
    "drains.kicker": "Perché drenare",
    "drains.title": "Drenare significa dare all'acqua una strada sicura.",
    "drains.intro": "Immagina il versante come una spugna inclinata: se si riempie troppo, diventa pesante e scivolosa. I pozzi drenanti e i dreni aiutano l'acqua a uscire, così il terreno resta più asciutto e più stabile.",
    "drains.withoutLabel": "Senza pozzi drenanti",
    "drains.withoutShort": "L'acqua resta dentro",
    "drains.withoutText": "La pioggia entra nel terreno e si accumula. Il pendio diventa più pesante, come uno zaino pieno d'acqua.",
    "drains.withLabel": "Con pozzi drenanti",
    "drains.withShort": "L'acqua trova l'uscita",
    "drains.withText": "I pozzi fanno da scorciatoia: raccolgono l'acqua nel sottosuolo e la accompagnano fuori in modo controllato.",
    "drains.kidTitle": "Detto facile facile",
    "drains.kidText": "Il terreno asciutto si tiene più forte. Il terreno troppo pieno d'acqua fatica a reggersi. Drenare vuol dire aiutarlo a svuotarsi, un po' come aprire il tappo di una vasca.",
    "product.kicker": "La bottiglia manifesto",
    "product.title": "Non vendiamo soltanto acqua. Mettiamo una storia nelle mani.",
    "product.text": "Ogni bottiglia può raccontare il versante da cui proviene l'acqua, il tipo di drenaggio, le analisi effettuate, il progetto di prevenzione collegato e la quota reinvestita. È un oggetto quotidiano che costringe a una domanda gentile: cosa sto aiutando a tenere in piedi?",
    "product.mascot": "Ogni etichetta può diventare una piccola lezione.",
    "product.promise1Title": "Tracciabile",
    "product.promise1Text": "origine, controlli e autorizzazioni dichiarati",
    "product.promise2Title": "Educativa",
    "product.promise2Text": "QR e contenuti semplici sul dissesto idrogeologico",
    "product.promise3Title": "Restitutiva",
    "product.promise3Text": "parte dei ricavi torna in cura e prevenzione",
    "journey.kicker": "Dal versante alla comunità",
    "journey.title": "Un percorso breve da capire, lungo da costruire bene.",
    "journey.step1Title": "Ascolto del luogo",
    "journey.step1Text": "Si parte da territori con opere di drenaggio già esistenti o da valutare con tecnici ed enti.",
    "journey.step2Title": "Verifica dell'acqua",
    "journey.step2Text": "Analisi, autorizzazioni e controlli stabiliscono se e come l'acqua può essere valorizzata.",
    "journey.step3Title": "Racconto pubblico",
    "journey.step3Text": "La bottiglia diventa una piccola lezione di geologia, prevenzione e responsabilità.",
    "journey.step4Title": "Ritorno al territorio",
    "journey.step4Text": "Il valore generato sostiene divulgazione, monitoraggio e nuove azioni dove possibile.",
    "impact.kicker": "Impatto",
    "impact.title": "La parte più importante è ciò che torna indietro.",
    "impact.text": "Acqua Franella ha senso solo se resta trasparente. Il ricavo non deve sparire dentro una promessa vaga: deve essere leggibile, luogo per luogo, progetto per progetto.",
    "impact.row1": "Divulgazione nelle scuole e nei paesi",
    "impact.row2": "Monitoraggio, analisi e ricerca applicata",
    "impact.row3": "Fondo per nuove azioni di stabilizzazione",
    "team.kicker": "Chi siamo",
    "team.title": "Ragazzi universitari, una terra addosso, una domanda ostinata.",
    "team.text": "Possiamo parlare di frane senza aspettare l'emergenza? Possiamo trasformare un'opera tecnica in un gesto culturale? Acqua Franella nasce da qui: dal desiderio di far sentire vicino un tema che spesso appare freddo, lontano, da specialisti.",
    "team.link": "Costruiamo un luogo pilota",
    "contact.kicker": "Partecipa",
    "contact.title": "Hai un territorio, una competenza o una storia da mettere in circolo?",
    "contact.text": "Cerchiamo comuni, università, associazioni, tecnici, sponsor e cittadini che vogliano trasformare la prevenzione in una narrazione concreta e verificabile.",
    "contact.mascot": "La prossima storia potrebbe nascere da un versante, una scuola o un paese che vuole raccontarsi meglio.",
    "contact.panelTitle": "Un invito aperto, senza moduli da compilare.",
    "contact.panelText": "Acqua Franella può crescere con luoghi pilota, scuole, enti, tecnici e partner che vogliono rendere visibile il valore della prevenzione. Prima viene la storia giusta, poi arrivano i passaggi concreti.",
    "contact.panelCta": "Rileggi la storia",
    "footer.text": "Progetto in sviluppo. La commercializzazione dell'acqua richiede analisi, autorizzazioni e verifiche sanitarie, ambientali e tecniche. I dreni riducono un fattore di instabilità, ma non eliminano da soli il rischio di frana."
  },
  en: {
    "meta.title": "Acqua Franella | Every Drop Helps Hold a Land Together",
    "meta.description": "Acqua Franella turns water collected by landslide drainage systems into awareness, a product story, and care for fragile territories.",
    "nav.story": "Story",
    "nav.drains": "Drains",
    "nav.bottle": "Bottle",
    "nav.impact": "Impact",
    "nav.contact": "Contact",
    "nav.join": "Join",
    "hero.kicker": "Water, memory, prevention",
    "hero.title": "Every drop helps hold a land together.",
    "hero.lead": "Acqua Franella starts from a simple, powerful idea: water carried away by landslide drains can become a living symbol of the territory, a bottle that tells, teaches, and gives back.",
    "hero.primary": "Understand drains",
    "hero.secondary": "Our story",
    "story.kicker": "Before the bottle",
    "story.title": "There are villages, slopes, homes, and people who do not want to be forgotten.",
    "story.p1": "Italy is fragile because it is alive: young mountains, moving hills, intense rain, and soils that absorb water until they lose balance. Landslides are not only lines on a geological map. They are interrupted roads, worried families, and places someone still loves.",
    "story.p2": "That is why Acqua Franella tries to change the way we talk about them. Not with fear, but with care. Not from far away, but through an everyday gesture: holding a bottle and discovering which wound in the land that water comes from.",
    "story.mascot": "I'll guide you: no fear, we can talk about landslides with simple words.",
    "story.caption": "A drain is not just a pipe: it is the point where the land breathes and tells us what is happening.",
    "band.text": "A landslide is stabilized by releasing pressure. A community is stabilized by adding awareness.",
    "drains.kicker": "Why drainage matters",
    "drains.title": "Drainage gives water a safe path out.",
    "drains.intro": "Imagine the slope as a tilted sponge: when it fills up too much, it becomes heavy and slippery. Drainage wells and drains help water leave, so the ground stays drier and more stable.",
    "drains.withoutLabel": "Without drainage wells",
    "drains.withoutShort": "Water stays inside",
    "drains.withoutText": "Rain enters the soil and builds up. The slope gets heavier, like a backpack full of water.",
    "drains.withLabel": "With drainage wells",
    "drains.withShort": "Water finds the exit",
    "drains.withText": "The wells act like shortcuts: they collect water underground and guide it out in a controlled way.",
    "drains.kidTitle": "In very simple words",
    "drains.kidText": "Dryer ground holds itself together better. Ground full of water struggles to stay steady. Drainage helps it empty, a bit like opening the plug in a bathtub.",
    "product.kicker": "The manifesto bottle",
    "product.title": "We do not sell only water. We put a story in people's hands.",
    "product.text": "Each bottle can tell the story of the slope the water comes from, the drainage system, the analyses performed, the prevention project connected to it, and the share reinvested. It is an everyday object that asks a gentle question: what am I helping to hold up?",
    "product.mascot": "Every label can become a small lesson.",
    "product.promise1Title": "Traceable",
    "product.promise1Text": "origin, checks, and authorizations made visible",
    "product.promise2Title": "Educational",
    "product.promise2Text": "QR content about landslide risk in simple words",
    "product.promise3Title": "Giving back",
    "product.promise3Text": "part of the revenue returns to care and prevention",
    "journey.kicker": "From slope to community",
    "journey.title": "A short path to understand, a long path to build well.",
    "journey.step1Title": "Listening to the place",
    "journey.step1Text": "We start from territories with existing drainage works or sites to be assessed with technicians and public bodies.",
    "journey.step2Title": "Checking the water",
    "journey.step2Text": "Analyses, authorizations, and controls define whether and how the water can be valorized.",
    "journey.step3Title": "Public storytelling",
    "journey.step3Text": "The bottle becomes a small lesson in geology, prevention, and responsibility.",
    "journey.step4Title": "Returning value",
    "journey.step4Text": "The value generated supports education, monitoring, and new actions where possible.",
    "impact.kicker": "Impact",
    "impact.title": "The most important part is what comes back.",
    "impact.text": "Acqua Franella only makes sense if it remains transparent. Revenue must not disappear into a vague promise: it should be readable, place by place, project by project.",
    "impact.row1": "Education in schools and villages",
    "impact.row2": "Monitoring, analysis, and applied research",
    "impact.row3": "Fund for new stabilization actions",
    "team.kicker": "Who we are",
    "team.title": "University students, a land close to the heart, and a stubborn question.",
    "team.text": "Can we talk about landslides before an emergency happens? Can we turn a technical work into a cultural gesture? Acqua Franella starts here: from the wish to make a specialist topic feel close, clear, and human.",
    "team.link": "Build a pilot place with us",
    "contact.kicker": "Join us",
    "contact.title": "Do you have a territory, a skill, or a story to put in motion?",
    "contact.text": "We are looking for municipalities, universities, associations, technicians, sponsors, and citizens who want to turn prevention into a concrete and verifiable story.",
    "contact.mascot": "The next story could start from a slope, a school, or a village that wants to tell itself better.",
    "contact.panelTitle": "An open invitation, with no forms to fill in.",
    "contact.panelText": "Acqua Franella can grow with pilot places, schools, public bodies, technicians, and partners who want to make the value of prevention visible. First comes the right story, then the concrete steps.",
    "contact.panelCta": "Read the story again",
    "footer.text": "Project in development. Commercializing water requires analyses, authorizations, and health, environmental, and technical checks. Drains reduce one instability factor, but they do not eliminate landslide risk on their own."
  }
};

let currentLanguage = localStorage.getItem("acquaFranellaLanguage") || "it";

const translate = (language) => {
  const dictionary = translations[language] || translations.it;

  document.documentElement.lang = language;
  document.title = dictionary["meta.title"];
  document.querySelector("meta[name='description']")?.setAttribute("content", dictionary["meta.description"]);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  if (languageToggle) {
    languageToggle.textContent = language === "it" ? "EN" : "IT";
    languageToggle.setAttribute(
      "aria-label",
      language === "it" ? "Switch language to English" : "Cambia lingua in italiano"
    );
  }

  localStorage.setItem("acquaFranellaLanguage", language);
};

if (header) {
  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "it" ? "en" : "it";
    translate(currentLanguage);
  });
}

translate(currentLanguage);
