const personne = {
    nom: "Alice",
    age: 25,
    adresse: {
        ville: "Paris",
        codePostal: "75001"
    },
    direBonjour: function() {
        console.log(`Bonjour, je m'appelle ${this.nom}`);
    }
};
console.log(personne.nom); // "Alice"
console.log(personne["age"]); // 25
console.log(personne.adresse.ville); // "Paris"
personne.direBonjour(); // "Bonjour, je m'appelle Alice"

personne.age = 26; // Modification
personne.profession = "Développeuse"; // Ajout
console.log(personne);

delete personne.adresse;
console.log(personne); // La propriété "adresse" a été supprimée

//Les tableaux

const fruits = ["pomme", "banane", "orange"];
console.log(fruits[0]); // "pomme"
console.log(fruits[2]); // "orange"

fruits.push("mangue"); // Ajoute à la fin
console.log(fruits); // ["pomme", "kiwi", "orange", "mangue"]

fruits.pop(); // Supprime le dernier élément
console.log(fruits); // ["pomme", "kiwi", "orange"]

//les maps
const longueurs = fruits.map(fruit => fruit.length);
console.log(longueurs); // [5, 4, 6]

//filters
const fruitsAvecO = fruits.filter(fruit => fruit.includes("o"));
console.log(fruitsAvecO); // ["pomme", "orange"]

//reduce
const totalLettres = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLettres); // 15

//find
const fruitAvecO = fruits.find(fruit => fruit.includes("o"));
console.log(fruitAvecO); // "pomme"

//some et very
const contientO = fruits.some(fruit => fruit.includes("o")); // true
const tousContiennentO = fruits.every(fruit => fruit.includes("o")); // false

//les functions
const multiplier = (a, b) => a * b;
console.log(multiplier(2, 3)); // 6

//Fonctions anonymes
//Une fonction sans nom, souvent utilisée comme callback.


const nombres = [1, 2, 3];
const carres = nombres.map(function(n) {
    return n * n;
});
console.log(carres); // [1, 4, 9]

//Fonctions d'ordre supérieur
//Une fonction qui prend une autre fonction en argument ou qui retourne une fonction.


function creerMultiplicateur(facteur) {
    return function(nombre) {
        return nombre * facteur;
    };
}
const doubler = creerMultiplicateur(2);
console.log(doubler(5)); // 10

const cles = Object.keys(personne);
console.log(cles); // ["nom", "age", "adresse", "direBonjour"]
Object.values() 
// Retourne un tableau des valeurs d'un objet.

const valeurs = Object.values(personne);
console.log(valeurs); // ["Alice", 25, { ville: "Paris", codePostal: "75001" }, function]
Object.entries() 
// Retourne un tableau de paires [clé, valeur].


const entrees = Object.entries(personne);
console.log(entrees); // [["nom", "Alice"], ["age", 25], ...]

//Fonctions pour les tableaux
Array.isArray() 
// Vérifie si une valeur est un tableau.


console.log(Array.isArray(fruits)); // true
Array.from() 

//Crée un tableau à partir d'un objet itérable.

//
const tableau = Array.from("hello");
console.log(tableau); // ["h", "e", "l", "l", "o"]
Array.concat() 

//Fusionne deux tableaux.

const legumes = ["carotte", "poireau"];
const aliments = fruits.concat(legumes);
const aliments_2=[...aliments,...legumes]
console.log(aliments); // ["pomme", "kiwi", "orange", "carotte", "poireau"]