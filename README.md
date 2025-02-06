# Les mots-clés `var`, `let`, et `const` en JavaScript

En JavaScript, il existe trois mots-clés pour déclarer des variables : `var`, `let`, et `const`. Chacun a ses propres caractéristiques et cas d'utilisation. Voici une explication détaillée de chacun, ainsi que des exemples de code pour illustrer leurs différences.

---

## 1. `var`

### Portée (scope)
`var` a une portée de **fonction**, ce qui signifie qu'une variable déclarée avec `var` est accessible dans toute la fonction où elle est déclarée, mais pas en dehors de cette fonction.

### Hoisting
Les variables déclarées avec `var` sont **hoisted** (hissées), ce qui signifie qu'elles sont déplacées en haut de leur contexte d'exécution (fonction ou script). Cependant, seule la **déclaration** est hoisted, pas l'initialisation.

### Réaffectation
Les variables `var` peuvent être **réaffectées** et **redéclarées**.

### Cas d'utilisation
`var` est moins utilisé aujourd'hui, car `let` et `const` offrent une meilleure gestion de la portée. Cependant, `var` peut encore être utile dans certains cas spécifiques, comme dans des scripts anciens ou pour des raisons de compatibilité.

**Exemple :**
```javascript
function exampleVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10, car var a une portée de fonction
}
exampleVar();