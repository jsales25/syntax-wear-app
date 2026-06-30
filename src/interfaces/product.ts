export interface Product {
  id: number;
  name: string;
  price: number;
  images?: string[];
  colors?: string[];
  image?: string;
  color?: string;
  categoryId?: number;
  slug?: string;
  stock?: number;
  active?: boolean;
  description?: string;
}
