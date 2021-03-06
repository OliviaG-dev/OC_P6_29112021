# Projet P6 - FishEye

## Link:
Link du GitHub pages : https://oliviag-dev.github.io/OC_P6_29112021/
## Entreprise:

Site web de photographes freelances.
“Nos clients prennent de super photos, mais ils n’y connaissent rien en
développement web. C'est pourquoi nous proposons une plateforme unique pour
montrer leurs photos sur une belle page et les contacter pour des événements ou
des tirages. Nous sommes l'un des plus grands sites de photographie en freelance,
avec un énorme réseau de photographes.”

## fonctionalités:

- Factory pattern

- le contenu de la page est généré de manière
dynamique en fonction du photographe.

- Affiche une galerie des travaux du photographe (photo et vidéo).

- Chaque média affiche le titre et le nombre de likes, les likes sont incrémentés puis décrémentés.

- Trie des médias par popularité, titre et date.

- Au clic sur un média une lightbox apparait:
    - Des boutons prev et nex pour naviguer au clic.
    - Une croix pour quitter.
    - Le tout est naviguable au clavier avec les touches fléchées, échap et entrée.

- Un formulaire "Contactez-moi", il comprend les champs "email, nom, prénom et message" et renvoi le contenu des champs dans les logs de la console.

## Contraintes techniques:

- Le code devrait passer les tests AChecker sans “known issue” (afin qu'il soit
conforme aux WCAG).

- Toute la gestion des événements (par exemple, les clics et les pressions au
clavier) doit être configurée (utilisez KeyboardEvent.key ou
KeyboardEvent.code.).

- Utilisez un lecteur d'écran gratuit pour vous faire une idée de ce que
représente l'utilisation du site pour une personne malvoyante.

- Le code est séparé en différents fichiers (HTML, CSS, JavaScript).

- ESLint est utilisé (avec les paramètres par défaut) pour garantir que le
code est robuste. Ceci est particulièrement facile à intégrer avec l'IDE
VSCode.

- Une version moderne (ES6 ou supérieure) de JavaScript est utilisée et les fonctionnalités obsolètes ne sont pas utilisées.

## Amélioration a apporter:

- [x] Responsive. 

- [ ] Refactorisation du code.

- [ ] Envoyer les données du formulaire.