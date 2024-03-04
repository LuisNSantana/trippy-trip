export interface ContentItem {
  text: string;
  imageUrl: string;
}

export interface Evento {
  title: string;
  slug: string; // Suponiendo que slug.current es un string
  url: string;
  image: string; // Suponiendo que image.asset->url es un string
  content: ContentItem[];
}
