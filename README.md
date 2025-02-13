## 1. Échange de deux variables
L'échange de valeurs entre deux variables est une tâche courante. Au lieu d'utiliser une variable temporaire, vous pouvez le faire en une seule ligne avec une affectation de déstructuration.

```js
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a); // 10
console.log(b); // 5
```

## 2. Vérifier si un nombre est pair ou impair
Vous pouvez vérifier si un nombre est pair ou impair en utilisant l'opérateur module.

```js
const isEven = num => num % 2 === 0;
console.log(isEven(4)); // true
console.log(isEven(7)); // false
```

## 3. Générer un nombre aléatoire dans une plage
La génération d'un nombre aléatoire dans une plage spécifique peut être effectuée sur une seule ligne.

```js
const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInRange(1, 10)); // e.g., 5
```

## 4. Suppression des doublons d'un tableau
Utilisez l'objet `Set` pour supprimer les doublons d'un tableau.

```js
const removeDuplicates = arr => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
```

## 5. Aplatissement d'un tableau
Aplatissez un tableau imbriqué à l’aide de la méthode `flat`.

```js
const flattenArray = arr => arr.flat(Infinity);
console.log(flattenArray([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
```

## 6. Vérification de l'existence d'un élément dans un tableau
Utilisez la méthode `includes` pour vérifier si un élément existe dans un tableau.

```js
const existsInArray = (arr, element) => arr.includes(element);
console.log(existsInArray([1, 2, 3], 2)); // true
console.log(existsInArray([1, 2, 3], 4)); // false
```

## 7. Conversion d'un tableau en chaîne
Convertissez un tableau en chaîne à l'aide de la méthode `join`.

```js
const arrayToString = arr => arr.join('');
console.log(arrayToString(['H', 'e', 'l', 'l', 'o'])); // "Hello"
```

## 8. Inverser une chaîne
Inversez une chaîne à l'aide des méthodes `split`, `reverse` et `join`.

```js
const reverseString = str => str.split('').reverse().join('');
console.log(reverseString('hello')); // "olleh"
```

## 9. Obtenir la date actuelle au format AAAA-MM-JJ
Formatez la date actuelle comme YYYY-MM-DD.

```js
const getCurrentDate = () => new Date().toISOString().split('T')[0];
console.log(getCurrentDate()); // e.g., "2023-10-01"
```

## 10. Mettre en majuscule la première lettre d'une chaîne
Mettre en majuscule la première lettre d'une chaîne.

```js
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalizeFirstLetter('hello')); // "Hello"
```

## Conclusion
Ces extraits de code peuvent vous faire gagner du temps et rendre votre code plus concis. Que vous souhaitiez échanger des variables, vérifier des nombres pairs ou formater des dates, ces extraits peuvent être un ajout pratique à votre boîte à outils JavaScript. Bon codage !
