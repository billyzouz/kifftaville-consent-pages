# kifftaville-consent-pages

Pages HTML statiques pour la **validation parentale** du projet **KiffTaVille**.

Ces pages sont rendues par GitHub Pages après que le parent clique sur le lien d'autorisation reçu par email. Elles affichent une page de confirmation propre suite à un appel de l'Edge Function `validate-parental-consent` (qui fait un redirect 302 vers ici).

## Transparence RGPD

Ces pages sont **publiques** pour permettre l'audit du code par les collectivités, DPO et parents.

- **Aucun tracker** (pas de Google Analytics, Tag Manager, pixel, etc.).
- **Aucun cookie**.
- **Aucune collecte de données** sur ces pages (pas de formulaire, pas de submit).
- Seul un paramètre `?name=` est lu dans l'URL pour afficher le prénom de l'enfant dans le message (sanitisé, jamais envoyé nulle part).
- Les polices Inter et Space Grotesk sont chargées depuis Google Fonts (requête vers `fonts.googleapis.com`).

## Stack

HTML5 + CSS pur + 1 fichier JS vanilla (~20 lignes). Pas de framework, pas de build.

## Pages

| Route | Cas |
|---|---|
| `validated.html` | Inscription validée (consentement OK) |
| `revoked.html` | Refus enregistré |
| `expired.html` | Lien expiré (>48 h) |
| `already-used.html` | Lien déjà utilisé |
| `invalid.html` | Lien invalide / inconnu |
| `error.html` | Erreur technique |
| `method-not-allowed.html` | Appel HTTP non-GET (rare) |

## Projet principal

KiffTaVille — application civique pour les jeunes 10-20 ans, vendue en B2G aux collectivités françaises.
