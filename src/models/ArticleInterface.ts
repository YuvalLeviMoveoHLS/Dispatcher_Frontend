export interface Article {
  source: {
    id: string | null;
    name: string | null;
  };
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
  author?: string | null;
}
