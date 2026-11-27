import { type ProductImage } from './productImage';

export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    categoryId: string;
    subcategory: string;
    images: ProductImage[];
    featured: boolean;
    active: boolean;
    stock: number;
    createdAt: string;
}