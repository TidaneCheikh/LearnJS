// 1. Déclaration d'une classe
class Personne {
    // Corps de la classe
  }
  
  // 2. Constructeur
  class Personne {
    constructor(nom, age) {
      this.nom = nom;
      this.age = age;
    }
  }
  
  const personne1 = new Personne("Alice", 30);
  console.log(personne1.nom); // Alice
  console.log(personne1.age); // 30
  
  // 3. Méthodes
  class Personne {
    constructor(nom, age) {
      this.nom = nom;
      this.age = age;
    }
  
    sePresenter() {
      console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
  }
  
  const personne2 = new Personne("Alice", 30);
  personne2.sePresenter(); // Bonjour, je m'appelle Alice et j'ai 30 ans.
  
  // 4. Propriétés statiques et méthodes statiques
  class Personne {
    constructor(nom, age) {
      this.nom = nom;
      this.age = age;
    }
  
    static espece = "Homo sapiens";
  
    static infoEspece() {
      console.log(`Les personnes sont des ${Personne.espece}.`);
    }
  }
  
  console.log(Personne.espece); // Homo sapiens
  Personne.infoEspece(); // Les personnes sont des Homo sapiens.
  
  // 5. Héritage
  class Animal {
    constructor(nom) {
      this.nom = nom;
    }
  
    parler() {
      console.log(`${this.nom} fait un bruit.`);
    }
  }
  
  class Chien extends Animal {
    constructor(nom, race) {
      super(nom); // Appelle le constructeur de la classe parente
      this.race = race;
    }
  
    aboyer() {
      console.log(`${this.nom} aboie.`);
    }
  }
  
  const chien1 = new Chien("Rex", "Berger Allemand");
  chien1.parler(); // Rex fait un bruit.
  chien1.aboyer(); // Rex aboie.
  
  // 6. Getters et Setters
  class Personne {
    constructor(nom, age) {
      this.nom = nom;
      this.age = age;
    }
  
    get description() {
      return `${this.nom} a ${this.age} ans.`;
    }
  
    set nouvelAge(age) {
      if (age > 0) {
        this.age = age;
      } else {
        console.log("L'âge doit être un nombre positif.");
      }
    }
  }
  
  const personne3 = new Personne("Alice", 30);
  console.log(personne3.description); // Alice a 30 ans.
  personne3.nouvelAge = 35;
  console.log(personne3.description); // Alice a 35 ans.
  personne3.nouvelAge = -5; // L'âge doit être un nombre positif.
  
  // 7. Méthodes privées et propriétés privées
  class CompteBancaire {
    #solde;
  
    constructor(soldeInitial) {
      this.#solde = soldeInitial;
    }
  
    #estMontantValide(montant) {
      return montant > 0;
    }
  
    deposer(montant) {
      if (this.#estMontantValide(montant)) {
        this.#solde += montant;
      } else {
        console.log("Montant invalide.");
      }
    }
  
    get solde() {
      return this.#solde;
    }
  }
  
  const compte = new CompteBancaire(100);
  compte.deposer(50);
  console.log(compte.solde); // 150
  compte.deposer(-10); // Montant invalide.
  
  // 8. Classes et prototypes
  class Personne {
    constructor(nom) {
      this.nom = nom;
    }
  
    sePresenter() {
      console.log(`Je m'appelle ${this.nom}.`);
    }
  }
  
  console.log(typeof Personne); // function
  console.log(Personne.prototype.sePresenter); // [Function: sePresenter]