
////Fonctions de manipulation de tableaux
Array.prototype.map()

////Cas d'utilisation : Crée un nouveau tableau en appliquant une fonction à chaque élément du tableau d'origine.
const number = [1, 2, 3];
const doubled = number.map(num => num * 2); // [2, 4, 6]

Array.prototype.filter()
////Cas d'utilisation : Crée un nouveau tableau contenant uniquement les éléments qui satisfont une condition.
const number1 = [1, 2, 3, 4];
const evens = number1.filter(num => num % 2 === 0); // [2, 4]

Array.prototype.reduce()
////Cas d'utilisation : Réduit un tableau à une seule valeur en appliquant une fonction accumulateur.
const number2 = [1, 2, 3, 4];
const sum = number2.reduce((acc, num) => acc + num, 0); // 10

Array.prototype.forEach()
////Cas d'utilisation : Exécute une fonction pour chaque élément du tableau.

const number3 = [1, 2, 3];
number3.forEach(num => console.log(num)); // Affiche 1, 2, 3

Array.prototype.find()
////Cas d'utilisation : Retourne le premier élément du tableau qui satisfait une condition.
const numbers = [1, 2, 3, 4];
const found = numbers.find(num => num > 2); // 3

////Fonctions de manipulation de chaînes de caractères

String.prototype.split()
////Cas d'utilisation : Divise une chaîne en un tableau en fonction d'un séparateur.
const str1 = "Hello,World";
const arr = str1.split(","); // ["Hello", "World"]


String.prototype.includes()
////Cas d'utilisation : Vérifie si une chaîne contient une sous-chaîne.
const str2 = "Hello, World!";
const hasWorld = str2.includes("World"); // true

String.prototype.replace()
////Cas d'utilisation : Remplace une partie d'une chaîne par une autre.
const str3 = "Hello, World!";
const newStr = str3.replace("World", "JavaScript"); // "Hello, JavaScript!"

String.prototype.trim()
////Cas d'utilisation : Supprime les espaces blancs au début et à la fin d'une chaîne.
const str4 = "   Hello, World!   ";
const trimmed = str4.trim(); // "Hello, World!"

////Fonctions de manipulation d'objets
Object.keys()
////Cas d'utilisation : Retourne un tableau des clés d'un objet.
const obj3 = { a: 1, b: 2 };
const keys = Object.keys(obj3); // ["a", "b"]
Object.values()

//Cas d'utilisation : Retourne un tableau des valeurs d'un objet.
const obj4 = { a: 1, b: 2 };
const values = Object.values(obj4); // [1, 2]


Object.entries()
//Cas d'utilisation : Retourne un tableau de paires clé-valeur sous forme de tableaux.
const obj5 = { a: 1, b: 2 };
const entries = Object.entries(obj5); // [["a", 1], ["b", 2]]

Object.assign()
//Cas d'utilisation : Copie les propriétés d'un ou plusieurs objets dans un objet cible.
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2); // { a: 1, b: 2 }

////Fonctions de gestion des événements
addEventListener()
//Cas d'utilisation : Attache un gestionnaire d'événement à un élément du DOM.
const button = document.querySelector("button");
button.addEventListener("click", () => console.log("Button clicked!"));

removeEventListener()
//Cas d'utilisation : Supprime un gestionnaire d'événement précédemment attaché.
button.removeEventListener("click", handleClick);


//Fonctions de gestion des promesses
Promise.then()
//Cas d'utilisation : Exécute une fonction lorsque la promesse est résolue.
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data));


Promise.catch()
//Cas d'utilisation : Gère les erreurs lorsqu'une promesse est rejetée.
fetch("https://api.example.com/data")
  .catch(error => console.error("Error:", error));


Promise.all()
//Cas d'utilisation : Exécute plusieurs promesses en parallèle et attend qu'elles soient toutes résolues.
Promise.all([promise1, promise2])
  .then(results => console.log(results));

//Fonctions utilitaires
setTimeout()
//Cas d'utilisation : Exécute une fonction après un délai spécifié.
setTimeout(() => console.log("Hello after 2 seconds"), 2000);

setInterval()
//Cas d'utilisation : Exécute une fonction à intervalles réguliers.
setInterval(() => console.log("Every 1 second"), 1000);


JSON.parse()
//Cas d'utilisation : Convertit une chaîne JSON en objet JavaScript.
const obj = JSON.parse('{"a": 1, "b": 2}');


JSON.stringify()
//Cas d'utilisation : Convertit un objet JavaScript en chaîne JSON.
const str = JSON.stringify({ a: 1, b: 2 });


//Fonctions de manipulation du DOM
document.querySelector()
//Cas d'utilisation : Sélectionne le premier élément correspondant à un sélecteur CSS.
const element = document.querySelector(".my-class");


document.querySelectorAll()
//Cas d'utilisation : Sélectionne tous les éléments correspondant à un sélecteur CSS.
const elements = document.querySelectorAll("p");


document.createElement()
//Cas d'utilisation : Crée un nouvel élément HTML.
const div = document.createElement("div");

element.appendChild()
//Cas d'utilisation : Ajoute un nœud enfant à un élément.
document.body.appendChild(div);