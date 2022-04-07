export interface Product {
  _id: string;
  title: string;
  rating: string;
  img: string;
  tag: string;
  enrollment: string;
  price: number;
  categoryName: string;
}

export interface Category {
  _id: string;
  categoryName: string;
  description: string;
}
