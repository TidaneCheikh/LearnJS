// 1. Gestion des erreurs avec try...catch
try {
    let x = y + 1; // y n'est pas défini, cela va générer une erreur
  } catch (error) {
    console.error("Erreur :", error.message); // Affiche "Erreur : y is not defined"
  } finally {
    console.log("Ce code s'exécute toujours, qu'il y ait une erreur ou non.");
  }
  
  // 2. Création d'erreurs personnalisées avec throw
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division par zéro impossible");
    }
    return a / b;
  }
  
  try {
    console.log(divide(10, 0));
  } catch (error) {
    console.error(error.message); // Affiche "Division par zéro impossible"
  }
  
  // 3. Extension de la classe Error pour des erreurs personnalisées
  class ValidationError extends Error {
    constructor(message) {
      super(message); // Appelle le constructeur de la classe parente (Error)
      this.name = "ValidationError"; // Définit le nom de l'erreur
    }
  }
  
  function validateUser(user) {
    if (!user.name) {
      throw new ValidationError("Le nom de l'utilisateur est requis");
    }
  }
  
  try {
    validateUser({}); // Pas de nom, donc une erreur est levée
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("Erreur de validation :", error.message);
    } else {
      console.error("Erreur inattendue :", error.message);
    }
  }
  
  // Exemple avec des propriétés supplémentaires
  class DatabaseError extends Error {
    constructor(message, code) {
      super(message);
      this.name = "DatabaseError";
      this.code = code; // Code d'erreur personnalisé
    }
  }
  
  try {
    // Simuler une erreur de base de données
    throw new DatabaseError("Échec de la connexion à la base de données", 500);
  } catch (error) {
    if (error instanceof DatabaseError) {
      console.error(`Erreur de base de données (code ${error.code}):`, error.message);
    } else {
      console.error("Erreur inattendue :", error.message);
    }
  }