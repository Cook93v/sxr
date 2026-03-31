# SuperTools SaaS Starter

Socle sérieux pour une plateforme SaaS modulaire d'outils web, pensée pour GitHub + Netlify.

## 1. Vision produit

SuperTools est une suite centralisée d'outils web combinant :
- bureautique et édition de documents
- traitement PDF
- conversion de fichiers
- image / média
- productivité
- mini-outils business / développeur
- modules IA futurs
- simulateur premium 2D/3D d'appartements et d'espaces intérieurs

Le projet est conçu comme un **produit SaaS réel** : authentification, base PostgreSQL, catalogue d'outils, achats unitaires, abonnements, droits d'accès dynamiques, dashboard utilisateur, back-office admin, stockage de projets et architecture extensible.

---

## 2. Stack recommandée

### Frontend
- Next.js App Router
- TypeScript
- Tailwind CSS
- React Server Components + composants client ciblés

### Backend
- Route Handlers Next.js pour MVP
- Services modulaires dans `lib/`
- Évolution possible vers microservices pour PDF/IA/média/3D lourds

### Données
- PostgreSQL
- Prisma ORM
- JSON columns pour structures évolutives (simulateur 2D/3D, configs, quotas)

### Auth
- Auth.js / NextAuth
- Sessions JWT pour rapidité MVP
- Extension possible OAuth Google / GitHub

### Paiements
- Stripe Checkout
- Stripe Webhooks
- Plans mensuels/annuels + achats unitaires

### Stockage
- objet storage pour fichiers temporaires et exports
- conservation limitée selon plan

### 3D
- react-three-fiber + drei
- futur moteur de plan 2D dédié (Canvas / Konva / Fabric / moteur custom)

---

## 3. Architecture globale

### Niveau 1 — cœur de plateforme
- landing page
- catalogue d'outils
- pricing
- auth
- dashboard user
- dashboard admin
- billing
- moteur d'autorisations

### Niveau 2 — modules outils
Chaque outil possède :
- sa page
- sa logique
- ses permissions
- ses quotas
- son interface
- ses endpoints
- sa traçabilité usage

### Niveau 3 — services lourds futurs
À isoler quand la charge augmente :
- moteur PDF avancé
- image upscale / background removal
- transcodage audio/vidéo
- OCR
- IA générative
- calcul 2D/3D avancé

---

## 4. Catalogue outils par famille

### Bureautique
- éditeur texte type Word online
- markdown studio
- quick notes
- modèles de documents
- export PDF / DOCX
- historique simple

### PDF
- fusion / split
- compression
- rotation
- suppression / réorganisation
- watermark
- signature
- formulaires
- PDF ↔ Word
- image ↔ PDF
- OCR plus tard

### Conversion
- JPG ↔ PNG
- PNG ↔ WebP
- PDF ↔ Word
- audio/video conversions
- compression
- drag & drop

### Image
- upscale
- netteté
- denoise
- resize / crop / rotate
- watermark
- optimisation web
- comparaison avant/après

### Vidéo / audio
- compression
- extraction audio
- conversion
- trim
- merge audio
- sous-titres plus tard

### IA / automatisation
- résumé
- reformulation
- correction
- traduction
- extraction structurée
- classification documentaire

### Productivité
- QR code
- calculatrice avancée
- convertisseur d'unités
- tableau blanc léger
- tâches
- calendrier léger

### Business / web
- devis
- factures
- templates administratifs
- validateurs JSON
- beautifier CSS/JSON/YAML/CSV
- SEO checker léger

### Habitat / immobilier / architecture
- **Space Planner 3D**
- calcul surfaces
- exports plans
- projets cloud

---

## 5. Système d'accès

### Types d'accès
- `FREE`
- `ONE_TIME`
- `SUBSCRIPTION`
- `PREMIUM`

### Règles
1. L'utilisateur ouvre un outil.
2. Le moteur charge la définition du module.
3. Le système lit : session, achats, abonnement, quotas, suspension éventuelle.
4. La fonction `canAccessTool()` décide.
5. Si autorisé : exécution + journalisation d'usage.
6. Si refusé : redirection vers page premium / upgrade.

### Sources de droits
- gratuit public
- achat unitaire
- pack d'outils
- abonnement actif
- accès manuel admin
- accès temporaire promotionnel

---

## 6. Système premium

### Free
- outils simples
- quotas journaliers
- tailles de fichiers limitées
- stockage réduit

### Achat unitaire
- déblocage permanent d'un module précis
- ex: PDF Pro, export HD, générateur avancé

### Abonnements
- Pro: PDF, image, stockage, quotas supérieurs
- Studio: tout Pro + simulateur 3D + exports premium + plus de projets

### Packs
- PDF Pack
- Media Pack
- Business Pack
- Creator Pack

---

## 7. Simulateur 3D — architecture cible

### Modules fonctionnels
- moteur de projet
- moteur géométrique 2D
- moteur de rendu 3D
- bibliothèque d'objets
- calcul de surfaces
- persistance cloud
- exports

### Vue 2D
- dessin des murs
- snapping
- cotations
- zones nommées
- dimensions
- minimap permanente

### Vue 3D
- orbit camera
- rendu pièces / volumes
- lumière basique
- objets 3D
- matériaux / textures

### Données de projet
Le schéma `Project` stocke des colonnes JSON dédiées à :
- `wallsJson`
- `roomsJson`
- `objectsJson`
- `texturesJson`
- `dimensionsJson`
- `surfacesJson`

### Calcul surfaces
MVP:
- somme des rectangles/pièces tracées
- surface totale
- surface par pièce
- périmètre

V2/V3:
- polygones complexes
- murs courbes
- revêtements
- estimation matériaux

---

## 8. Dashboard utilisateur

Sections prévues :
- résumé compte
- outils récents
- favoris
- achats
- abonnement
- projets
- stockage
- accès rapides

---

## 9. Dashboard admin

Sections prévues :
- KPI revenus
- utilisateurs
- outils
- pricing
- achats
- abonnements
- modération
- logs admin
- feature flags
- analytics d'usage

---

## 10. Système de fichiers

### Cycle de vie
1. upload temp
2. scan / validation
3. traitement outil
4. stockage résultat
5. expiration selon plan
6. purge automatique

### Bonnes pratiques
- taille max par outil
- MIME whitelist
- isolation par user/project
- liens signés
- suppression programmée

---

## 11. Arborescence

```text
app/
  api/
    auth/[...nextauth]/route.ts
    billing/create-checkout-session/route.ts
    tools/route.ts
    webhooks/stripe/route.ts
  admin/page.tsx
  catalogue/page.tsx
  dashboard/page.tsx
  login/page.tsx
  premium/page.tsx
  pricing/page.tsx
  register/page.tsx
  tools/[slug]/page.tsx
components/
  layout/
  marketing/
  shared/
  simulator/
lib/
  access/
  auth/
  billing/
  db/
prisma/
  schema.prisma
  seed.ts
```

---

## 12. Déploiement GitHub + Netlify

### Étapes
1. pousser le repo sur GitHub
2. connecter le repo à Netlify
3. renseigner les variables `.env.example`
4. configurer la base PostgreSQL managée
5. configurer Stripe
6. ajouter l'URL webhook Stripe
7. lancer `prisma migrate deploy`
8. vérifier auth, checkout, webhooks

### Variables minimales
- `DATABASE_URL`
- `DIRECT_URL`
- `AUTH_SECRET`
- `NEXTAUTH_URL`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_APP_URL`

---

## 13. Roadmap

### V1
- plateforme core
- auth email/password
- catalogue
- 5 à 10 outils MVP
- billing Stripe
- dashboard user/admin
- simulateur 3D démo

### V2
- packs d'outils
- quotas détaillés
- exports PDF/DOCX
- projets cloud avancés
- bibliothèque assets élargie
- outils image/PDF premium réels

### V3
- OCR
- IA texte
- collaboration
- partage de projet
- multi-étages
- rapports détaillés

### V4
- application mobile compagnon
- marketplace de modules
- API publique / partenaires
- bibliothèque d'assets premium

---

## 14. Points importants

Ce starter est un **socle professionnel**, pas la totalité des centaines de fonctionnalités finales. Il fournit :
- une structure propre
- la séparation produit / accès / billing / data
- un schéma de base solide
- des exemples concrets de modules gratuits et payants
- un début crédible pour le simulateur 3D

Pour passer en production complète, il faudra ensuite brancher :
- les traitements réels PDF/image/audio/video
- les jobs asynchrones
- le vrai upload storage
- les vrais plans Stripe et webhooks persistants
- la sécurité avancée, observabilité et QA
