---
marp: true
theme:  default
---

# Transpilation : comment coder dans un langage quand on ne sait pas coder dans ce langage ?

---

## Pourquoi faire ?

1. Car à l'entretien on nous parlait de java mais la mission on fait du cobol
2. Porter le code source de quelque chose d'incompréhensible
3. Pour gagner du temps
4. Pour mieux coder !

---

## Exemples connus de transpilation

1. Typescript
2. Kotlin / Java
3. COBOL ?

(mettre des images)

---

## Présentation

1. Comprendre les AST avec un oeuf sur le plat
2. Écrire du java avec du javascript
3. Un exemple utile de parsing

---

## Un œuf sur le plat donc ?

Recette d'un oeuf sur le plat

1. Prendre une poêle, un œuf, du poivre, une plaque chauffante
2. Craquer l'œuf. Verser le contenu dans la poêle
3. Faire chauffer tant que l'œuf n'est pas cuit
4. Ajouter un peu de poivre
5. Verser dans un plat

---

## La recette réécrite en javascript

```js
const [poele, oeuf, poivre, plaqueChauffante] = input()

const contenuOeuf = craquer(oeuf)
verser(contenuOeuf, poele)

while(!contenuOeuf.isCuit()) {
  plaqueChauffante.chauffer(poele)
}

verser(poivre, poele)

return poele.value
```

---

## Comparaison recette et javascript

```js
// 1. Prendre une poêle, un œuf, du poivre, une plaque chauffante
const [poele, oeuf, poivre, plaqueChauffante] = input()
// 2. Craquer l'œuf. Verser le contenu dans la poêle
const contenuOeuf = craquer(oeuf)
verser(contenuOeuf, poele)
// 3. Faire chauffer tant que l'œuf n'est pas cuit
while(!contenuOeuf.isCuit()) {
  plaqueChauffante.chauffer(poele)
}
// 4. Ajouter un peu de poivre
verser(poivre, poele)
// 5. Verser dans un plat
return poele.value
```

---

## Introduction à l'AST 1

Abstract Syntax Tree, la représentation abstraite en arbre du code.

Exemple :

```js
2 + 2
```

Image d'un arbre 2 + 2

---

## Introduction à l'AST 2

Exemple 2 :

```js
2 + 2 + 2
```

Image d'un arbre de 2 + 2 + 2

---

## Introduction à l'AST 3

Exemple 3 :

```js
2 + 2 + 2 + 2
```

Image d'un arbre de 2 + 2 + 2 + 2

---

## Introduction à l'AST 4

C'est à partir de l'AST que l'on peut abstraire notre programme, l'exécuter, le compiler

## Revenons à notre recette de cuisine

