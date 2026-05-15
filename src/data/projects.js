/**
 * Réalisations — visuels : public/images/portfolio/
 */
const portfolioImg = (file) =>
  `${process.env.PUBLIC_URL}/images/portfolio/${file}`;

export const projects = [
  {
    id: 'p1',
    title: 'Fresh Food',
    description: 'Site de vente de produits frais en ligne.',
    image: portfolioImg('fresh-food.jpg'),
    tech: 'Site réalisé avec PHP et MySQL.',
    url: 'https://github.com/abunadiya/portfolio-react',
  },
  {
    id: 'p2',
    title: 'Restaurant Akira',
    description: 'Site vitrine avec présentation, menus et réservation.',
    image: portfolioImg('restaurant-japonais.jpg'),
    tech: 'Site réalisé avec WordPress.',
    url: 'https://github.com/abunadiya/portfolio-react',
  },
  {
    id: 'p3',
    title: 'Espace bien-être',
    description: 'Site institutionnel pour un centre de bien-être.',
    image: portfolioImg('espace-bien-etre.jpg'),
    tech: 'Site réalisé avec LARAVEL.',
    url: 'https://github.com/abunadiya/portfolio-react',
  },
  {
    id: 'p4',
    title: 'SEO',
    description: "Amélioration du référencement d'un site e-commerce.",
    image: portfolioImg('seo.jpg'),
    tech: 'Utilisation des outils SEO.',
    url: 'https://github.com/abunadiya/portfolio-react',
  },
  {
    id: 'p5',
    title: "Création d'une API",
    description: "Création d'une API RESTful publique.",
    image: portfolioImg('coder.jpg'),
    tech: 'PHP - SYMFONY.',
    url: 'https://github.com/abunadiya/portfolio-react',
  },
  {
    id: 'p6',
    title: "Maquette d'un site web",
    description: "Création du prototype d'un site.",
    image: portfolioImg('screens.jpg'),
    tech: 'Réalisé avec FIGMA.',
    url: 'https://github.com/abunadiya/portfolio-react',
  },
];
