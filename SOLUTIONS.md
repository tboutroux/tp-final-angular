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
Les catégories des livres ne sont pas affichées correctement
### Solution technique
Création d'un pipe permettant de formatter correctement les catégories des livres
### Concept Angular utilisé
- Pipe

## TODO 3: Structure de page incomplète
### Nature du problème 
L'application manque de modularité et de réutilisation de code.
### Solution technique 
Extraction des éléments appartenant au header et au footer afin de les transformer en composant réutilisables `HeaderComponent` et `FooterComponent`. Ces derniers sont utilisés dans le template `app.component.html`
### Concepts Angular utilisés
- Templates
- Composants

## TODO 4: Pages non affichées

### Nature du problème 
Certaines pages ne s'affichent pas correctement.
### Solution technique 
Vérification des routes dans le fichier ``app.routes.ts`` afin d'assurer le bon import des différentes routes de l'application. 
### Concept Angular utilisé
- Routing

## TODO 5: Route manquante
### Nature du problème
Créer une route pour la page détail d'un livre
### Solution technique 
Ajout d'une route dans le fichier `app.routes.ts` pour naviguer vers la page de détail d'un livre. La route doit inclure un paramètre pour l'identifiant du livre afin de charger les informations spécifiques à ce livre.
### Concept Angular utilisé
- RouterModule pour la configuration des routes.
- Composant de détail du livre pour afficher les informations du livre.
- Paramètre de route (id du livre)

## TODO 6: Formulaire incomplet
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


## TODO 7: Validations manquantes
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

## TODO 8: Navigation manquante
### Nature du problème
Créer un bouton qui permet de revenir à la page précédente
### Solution technique
Ajout d'une redirection vers la page précédente stockée dans l'historique du navigateur dans la fonction `goBack()` du composant `book-detail`.
### Concept Angular utilisé
- Utilisation du service `Location` de `@angular/common` afin de naviguer dans l'historique du navigateur.

## TODO 9: Erreur dans la console
### Nature du problème
Erreur "Cannot read properties of undefined" dans la console, ce qui peut entraîner un plantage de l'application lorsque les données ne sont pas chargées.
### Solution technique
Utilisation d'un `ngIf` dans le template ``book-detail.component.html`` pour vérifier l'existence des données avant de les afficher.
### Concept Angular utilisé
- Directive
- Gestion asynchrone de l'affichage

## TODO 10: Directive non appliquée
### Nature du problème
Certains éléments ne sont pas mis en évidence comme prévu, ce qui dégrade l'expérience utilisateur en manquant d'indications visuelles.
### Solution technique
Application de la directive ``highlight`` au champ `book.title` du composant `book-detail.component.html`
### Concept Angular utilisé
- Directive personnalisée
- Templates

## TODO 11: Bouton non fonctionnel
### Nature du problème
Certains boutons ne réagissent pas aux clics, empêchant les actions d'être effectuées.
### Solution technique
Vérification de la méthode `goBack()` pour vérifier que la redirection fonctionne correctement lors de l'évènement `click()`
### Concept Angular utilisé
- Gestion des évènement
- Navigation

## TODO 12: Données non affichées
### Nature du problème
Les données sont passées à la liste mais pas affichées. Affiche les données
### Solution technique
Changement de nom de variable dans le template. il faut afficher les livres qui sont dans une variable `books`, hors celle utilisée était `data`
### Concept Angular utilisé
- NgFor

## TODO 13: Descriptions trop longues
### Nature du problème
Les descriptions des livres prennent trop de place, ce qui encombre l'interface utilisateur et la rend moins lisible.
### Solution technique
Création d'un pipe permettant de tronquer la description
### Concept Angular utilisé
- Pipe personnalisé

## TODO 14: Retour utilisateur manquant
### Nature du problème
Aucune confirmation n'est affichée après certaines actions, ce qui empêche l'utilisateur de savoir si son action a réussi ou échoué.
### Solution technique
Affichage d'une SnackBar Angular Material pour afficher les notification lors des modifications de favoris et de la suppression d'un livre.
### Concept Angular utilisé
- Gestion des évènements
- Utilisation d'Angular Material

## TODO 15: Erreur d'affichage du titre
### Nature du problème
Les titres ne s'affichent pas correctement, ce qui rend l'information présentée incorrecte ou mal formatée.
### Solution technique
Ajout d'une balise HTML et utilisation d'un Pipe natif Angular permettant de mettre le titre en majuscule (`uppercase`)
### Concept Angular utilisé
- Pipe

## TODO 16: Directive incomplète
### Nature du problème
La directive highlight ne fonctionne pas comme prévu, ce qui dégrade l'expérience utilisateur en manquant d'indications visuelles.
### Solution technique
Ajout d'une condition dans la directive `highlight` afin de changer la font-weight d'un texte en fonction de la valeur de l'input (``true`` ou ``false``)
### Concept Angular utilisé
- Directive personnalisée