// 1. Promises en JavaScript
// Une Promise représente une valeur qui peut être disponible maintenant, plus tard, ou jamais.

// Création d'une Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simuler une condition
    if (success) {
      resolve("La promesse est tenue !");
    } else {
      reject("La promesse est rompue !");
    }
  });
  
  // Utilisation de .then() et .catch()
  myPromise
    .then((result) => {
      console.log(result); // Affiche "La promesse est tenue !"
    })
    .catch((error) => {
      console.error(error); // Affiche "La promesse est rompue !" en cas d'erreur
    });
  
  // 2. Chaînage de Promises
  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Données reçues"), 1000); // Simuler une opération asynchrone
    });
  };
  
  fetchData()
    .then((data) => {
      console.log(data); // Affiche "Données reçues"
      return "Traitement des données";
    })
    .then((processedData) => {
      console.log(processedData); // Affiche "Traitement des données"
    })
    .catch((error) => {
      console.error("Erreur :", error);
    });
  
  // 3. async/await
  // async/await est une syntaxe plus moderne pour travailler avec des Promises.
  
  // Fonction asynchrone
  async function fetchDataAsync() {
    try {
      const data = await fetchData(); // Attend que la Promise soit résolue
      console.log("Données reçues avec async/await :", data);
      return "Traitement terminé";
    } catch (error) {
      console.error("Erreur avec async/await :", error);
    }
  }
  
  // Appel de la fonction asynchrone
  fetchDataAsync().then((result) => {
    console.log(result); // Affiche "Traitement terminé"
  });
  
  // 4. Gestion des erreurs avec async/await
  async function fetchDataWithErrorHandling() {
    try {
      const data = await fetchData();
      console.log("Données reçues :", data);
      throw new Error("Erreur simulée"); // Simuler une erreur
    } catch (error) {
      console.error("Erreur capturée :", error.message); // Affiche "Erreur capturée : Erreur simulée"
    }
  }
  
  fetchDataWithErrorHandling();
  
  // 5. Promise.all pour exécuter plusieurs Promises en parallèle
  const promise1 = Promise.resolve("Première promesse");
  const promise2 = new Promise((resolve) => setTimeout(() => resolve("Deuxième promesse"), 2000));
  const promise3 = fetchData();
  
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log("Résultats de Promise.all :", results); // Affiche un tableau avec les résultats
    })
    .catch((error) => {
      console.error("Erreur dans Promise.all :", error);
    });