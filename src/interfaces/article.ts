export interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  views: number;
  likes: number;
  isHighlighted: boolean;
}