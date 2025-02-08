# Promises et async/await en JavaScript

Ce projet illustre les concepts de **Promises** et de la syntaxe **async/await** en JavaScript, qui sont essentiels pour gérer les opérations asynchrones de manière efficace et lisible. Ces concepts permettent de simplifier le travail avec des tâches asynchrones, comme les appels réseau, les lectures de fichiers, ou les délais.

---

## Table des Matières

1. [Introduction aux Promises](#1-introduction-aux-promises)
2. [Création et Utilisation des Promises](#2-création-et-utilisation-des-promises)
3. [Chaînage de Promises](#3-chaînage-de-promises)
4. [Introduction à async/await](#4-introduction-à-asyncawait)
5. [Gestion des Erreurs avec async/await](#5-gestion-des-erreurs-avec-asyncawait)
6. [Promise.all pour les Opérations Parallèles](#6-promiseall-pour-les-opérations-parallèles)
7. [Bonnes Pratiques](#7-bonnes-pratiques)
8. [Exécution du Code](#8-exécution-du-code)

---

## 1. Introduction aux Promises

Une **Promise** (promesse) en JavaScript est un objet qui représente une valeur qui peut être disponible maintenant, plus tard, ou jamais. Elle est utilisée pour gérer des opérations asynchrones de manière plus propre que les callbacks.

Une Promise a trois états possibles :
- **Pending** : L'état initial, la promesse est en attente.
- **Fulfilled** : La promesse est tenue avec une valeur.
- **Rejected** : La promesse est rompue avec une raison (erreur).

---

## 2. Création et Utilisation des Promises

### Création d'une Promise

Une Promise est créée en utilisant le constructeur `Promise`, qui prend une fonction exécutrice avec deux arguments : `resolve` et `reject`.

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simuler une condition
  if (success) {
    resolve("La promesse est tenue !"); // La promesse est résolue
  } else {
    reject("La promesse est rompue !"); // La promesse est rejetée
  }
});