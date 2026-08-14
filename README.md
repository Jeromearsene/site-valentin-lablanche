# Site CV Valentin Lablanche

## Getting Started

### Initialization

`yarn` to install librairies.

### Usage

- `yarn dev` - Starts a dev server at http://localhost:5173/

- `yarn build` - Builds for production, emitting to `dist/`. Prerenders app to static HTML

- `yarn preview` - Starts a server at http://localhost:4173/ to test production build locally

## Déploiement

- Avec [Vercel](https://vercel.com/jeromearsenes-projects/site-valentin-lablanche), dès qu'un push à lieu sur la branche `main`, le site est automatiquement redéployé.

## Pull request

1. Créer une branche à partir de la branche nommée `prod`:

    ```bash
    git branche [nom branche] -b
    ```

    `-b` est pour basculer directement sur cette branche.

2. Effectuer ses changements.
3. Les pousser:

    ```bash
    git push origin [nom branche]
   ```

4. Créer la pull request depuis Github: `Pull requests` > `New pull request`. La faire pointer vers la branche de `prod`.
