# Gestion des Erreurs en JavaScript

Ce projet illustre les concepts de gestion des erreurs en JavaScript, notamment :

1. **Gestion des erreurs avec `try...catch`**
2. **Création d'erreurs personnalisées avec `throw`**
3. **Extension de la classe `Error` pour des erreurs personnalisées**

---

## 1. Gestion des Erreurs avec `try...catch`

Le bloc `try...catch` permet de capturer et de gérer les erreurs qui se produisent pendant l'exécution du code. Si une erreur se produit dans le bloc `try`, le contrôle est immédiatement transféré au bloc `catch`.

### Syntaxe de base :
```javascript
try {
  // Code potentiellement dangereux
} catch (error) {
  // Gestion de l'erreur
} finally {
  // Code exécuté quoi qu'il arrive
}