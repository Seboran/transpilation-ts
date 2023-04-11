# Transpilation

Ce projet permet de générer du code dans n'importe quel langage à partir d'un AST

## Comment lancer ce projet ?

```bash
yarn run start
```

## Comment créer son propre code

On veut représenter avec des nodes l'instruction suivante en pseudo code :

```pseudo
si X > Y:
  2 + (5 * 3)
sinon:
  2 + (5 - 3)
```

Pour cela on peut identifier que l'instruction est un bloc if, portant une condition, et une expression si vraie et une expression si faux.

Cela se représente ainsi :

```typescript
new SiNode(
  new ConditionNode(
    new SuperieurNode(new LitteralNode('X'), new LitteralNode('Y'))
  ),
  new AdditionNode(
    new NumberNode(2),
    new MultiplicationNode(new NumberNode(5), new NumberNode(3))
  ),
  new AdditionNode(
    new NumberNode(2),
    new SoustractionNode(new NumberNode(5), new NumberNode(3))
  )
)
```

Pour parcourir cet arbre, chaque node implémente la méthode `accept` qui prend un `VisiteurNode` en argument. Voir par exemple `JavascriptGenerator`.

Exemple d'utilisation :

```typescript
const javascriptGenerator = new JavascriptGenerator()
const code = instructions.accept(javascriptGenerator)
```

Et notre instance de JavascriptGenerator parcoure toute la node automatiquement.

Ce pattern est appelé "Visitor pattern double dispatch"
