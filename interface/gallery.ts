export interface Gallery {
  title: string;
  image: string;
  date: Date;
  overview: string;
  slug: string;
  author: {
    name: string;
    image: string;
  };
}
