# SOLUTIONS AUX TODOS

## TODO 1 : Navigation incorrecte
### Nature du problème 
Certains liens rechargent complètement la page au lieu d'utiliser le routeur Angular
### Solution technique
Ajout d'une directive `[routerLink]` dans les balises `<a>` 
### Concept Angular utilisé
- Directive

## TODO 2 : Besoin de formatage de texte
### Nature du problème 
Les titres des livres ne sont pas affichées correctement
### Solution technique
Création d'un pipe permettant de formatter correctement les titres des livres
### Concept Angular utilisé
- Pipe

## TODO 3
IDENTIQUE AU TODO 1

## TODO 4

### Nature du problème 
Certaines pages ne s'affichent pas correctement.
### Solution technique 
Le problème avait déjà été résolu
### Concept Angular utilisé

## TODO 5 
### Nature du problème
Créer une route pour la page détail d'un livre
### Solution technique 
Ajout d'une route dans le fichier `app.routes.ts` pour naviguer vers la page de détail d'un livre. La route doit inclure un paramètre pour l'identifiant du livre afin de charger les informations spécifiques à ce livre.
### Concept Angular utilisé
- RouterModule pour la configuration des routes.
- Composant de détail du livre pour afficher les informations du livre.

## TODO 6
### Nature du problème
Un formulaire doit être créé pour permettre la saisie des informations d’un livre, incluant les champs title, author, description et category. Il doit également inclure une validation des données saisies.
### Solution technique
L’implémentation repose sur Reactive Forms d’Angular en utilisant FormBuilder pour initialiser le formulaire et Validators pour imposer des contraintes sur les champs. Lier ces champs à un template HTML permettra une saisie dynamique avec gestion des erreurs.
### Concept Angular utilisé
- Reactive Forms (ReactiveFormsModule) pour la gestion du formulaire.
- FormBuilder pour simplifier l’initialisation des champs.
- Validators pour assurer que chaque champ est correctement rempli.
- formControlName pour relier les champs du formulaire au modèle de données.
- Gestion d’événements (ngSubmit) pour soumettre le formulaire et traiter les données.


## TODO 7
### Nature du problème
Les champs du formulaire ne possèdent pas les validations nécessaires pour garantir l'intégrité des données saisies par l'utilisateur.
### Solution technique
Ajouter des validations pour chaque champ du formulaire en utilisant les directives Angular. Les validations à ajouter sont :
- `title` : requis et doit comporter au moins 3 caractères.
- `author` : requis et doit comporter au moins 3 caractères.
- `description` : requis et doit comporter au moins 10 caractères.
- `category` : requis.
### Concept Angular utilisé
Utilisation des directives de validation Angular telles que `required` et `minlength` pour imposer des contraintes sur les champs du formulaire.
-->

## TODO 8
### Nature du problème
Créer un bouton qui permet de revenir à la page précédente
### Solution technique
Ajout d'une redirection vers la page précédente stockée dans l'historique du navigateur dans la fonction `goBack()` du composant `book-detail`.
### Concept Angular utilisé
- Utilisation du service `Location` de `@angular/common` afin de naviguer dans l'historique du navigateur.

## TODO 9
### Nature du problème
Erreur dans le navigateur 
### Solution technique
Vérification que l'objet book est bien défini avant de tenter d'accéder à ses propriétés.
### Concept Angular utilisé
- Utilisation de l'opérateur `?` afin de vérifier si les propriétés sont undefined.

## TODO 10
### Nature du problème
Appliquer la directive highlight au champ `book.title` du composant `book-detail.component.html`
### Solution technique
Ajout d'une directive dans le template book-detail.component.html. Il faut veiller à l'importer en amont dans le composant TypeScript.
### Concept Angular utilisé
- Directive personnalisée
- Importation et déclaration de la directive
- Utilisation de la directive dans le template HTML.

## TODO 12
### Nature du problème
Problème de fonctionnement sur un bouton
### Solution technique
Bouton déjà corrigé
### Concept Angular utilisé

## TODO 13
### Nature du problème
Les données sont passées à la liste mais pas affichées. Affiche les données
### Solution technique
Changement de nom de variable dans le template. il faut afficher les livres qui sont dans une variable `books`, hors celle utilisée était `data`
### Concept Angular utilisé
- NgIf

## TODO 14
### Nature du problème
Appliquer la directive highlight au champ `book.title` du composant `book-list.component.html`
### Solution technique
Ajout d'une directive dans le template book-detail.component.html. Il faut veiller à l'importer en amont dans le composant TypeScript.
### Concept Angular utilisé
- Directive personnalisée
- Importation et déclaration de la directive
- Utilisation de la directive dans le template HTML.

## TODO 15
### Nature du problème
Afficher la description du livre en utilisant un pour limiter à 20 caractères et ajouter des points de suspension si la description est plus longue
### Solution technique
Création d'un pipe permettant de tronquer la description
### Concept Angular utilisé
- Pipe personnalisé

## TODO 16
### Nature du problème
Affiche une alerte qui indique que le favori a été modifié
### Solution technique
Affichage d'un message dans la console permettant d'informer qu'un livre a été ajouté ou enlevé des favoris
### Concept Angular utilisé
- `console.log()`

## TODO 17
### Nature du problème
Affiche une alerte qui indique que la modification du favori a échoué
### Solution technique
Affichage d'un message d'erreur dans la console
### Concept Angular utilisé
- `console.error()`

## TODO 18
### Nature du problème
Affiche une alerte qui indique que le livre a été supprimé
### Solution technique
Affichage d'un message dans la console permettant d'informer qu'un livre a été supprimé
### Concept Angular utilisé
- `console.log()`

## TODO 19
### Nature du problème
Affiche une alerte qui indique que la suppression du livre a échoué
### Solution technique
Affichage d'un message d'erreur dans la console
### Concept Angular utilisé
- `console.error()`

## TODO 20
### Nature du problème
Identifie et corrige l'erreur & affiche le titre en uppercase
### Solution technique
Ajout d'une balise HTML et utilisation d'un Pipe natif Angular permettant de mettre le titre en majuscule
### Concept Angular utilisé
- Pipe

## TODO 22
### Nature du problème
Creer un component pour afficher le header
### Solution technique
Création d'un nouveau composant Angular, déplacement des différents morceaux de code et import du nouveau composant dans `app.component.html`
### Concept Angular utilisé
- Composant

## TODO 23
### Nature du problème
Creer un component pour afficher le footer
### Solution technique
Création d'un nouveau composant Angular, déplacement des différents morceaux de code et import du nouveau composant dans `app.component.html`
### Concept Angular utilisé
- Composant

## TODO 24
### Nature du problème
Modifier la directive pour que le texte soit en gras si l'input est true et appliquer cela au champ title du livre sur les pages book-detail et book-list
### Solution technique
Ajout d'une condition dans la directive afin de changer la font-weight d'un texte en fonction de la valeur de l'input
### Concept Angular utilisé
- Directive personnalisée