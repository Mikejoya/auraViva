import type { Product } from "../types/product";

export interface ProductRepository {
    getAll(): Promise<Product[]>;
    getBySlug(slug: string): Promise<Product | null>;
    getFeatured(): Promise<Product[]>;
    getByCategory(categoryId: string): Promise<Product[]>;
}